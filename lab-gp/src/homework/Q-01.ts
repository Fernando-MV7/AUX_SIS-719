(() => {

  //lista de emails de usuarios de Meta-X
  const userEmails: string[] = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];
  console.log(userEmails);

  //Lista de compras de un carrito
  const cartProducts: { product: string }[] = [
    { product: "switch" },
    { product: "X-box Controller" },
    { product: "steam-gift-card" },
  ];
  console.log(cartProducts);
  
  //funcion para sumar mas 3 a un numero y retornarlo
  const addThree = (num: number): number => num + 3;
  console.log(addThree(2));
  
    //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  console.log(capitalizeFirstLetter("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  const eventOccurred: boolean = false;
  if (eventOccurred) console.log('event');

  //variable que se encarga de verificar 
  const userHasAccess: boolean = true;
  if (userHasAccess) console.log('welcome');
  
  //variable para hallar el promedio de 3 numeros
  const average: number = (1 + 2 + 3) / 3;
  console.log(average);
  
  //variable que almacena el valor de PI

  let PI: number = Math.PI;
  console.log(PI);
  

  //variabel que controla si un archivo es modificable 
  const fileIsEditable: boolean = true;
  if (fileIsEditable) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  let e: number = Math.E;
  console.log(e);

})();