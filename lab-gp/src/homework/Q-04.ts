(() => {

  /* APLICA DRY */
  
  //EX - 1
  function performOperation(a: number, b: number, c: number): number {
    const sumResult = a + b;
    const multiplicationResult = sumResult * c;
    return multiplicationResult;
  }
  
  function calculateOperation1(a: number, b: number, c: number): number {
    return performOperation(a, b, c);
  }
  
  function calculateOperation2(x: number, y: number, z: number): number {
    return performOperation(x, y, z);
  }

  // EX - 2
  type AreaCalculator = (dimensions: number[]) => number;

  function calculateArea(calculator: AreaCalculator, ...dimensions: number[]): number {
    return calculator(dimensions);
  }
  
  const calculateRectangleArea: AreaCalculator = ([length, width]) => length * width;
  const calculateCircleArea: AreaCalculator = ([radius]) => Math.PI * radius * radius;
  
  console.log(calculateArea(calculateRectangleArea, 5, 3)); // 15
  console.log(calculateArea(calculateCircleArea, 2)); // 12.566370614359172
  // EX - 3
  function validate<T>(input: T, validationFn: (value: T) => boolean): boolean {
    return validationFn(input);
  }
  
  function validateEmail(email: string): boolean {
    // ...some code for validate here
    return validate(email, (value: string) => {
      // Lógica de validación de correo electrónico
      return true; 
    });
  }
  
  function validateUsername(username: string): boolean {
    // ...some code for validate here
    return validate(username, (value: string) => {
      // Lógica de validación de nombre de usuario
      return true; 
    });
  }

})();