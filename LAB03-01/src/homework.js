(() => {
  let numbers = [1, 2, 3, 4, 5];

  const multipliedNumbers = numbers.map(num => num * 5);

  console.log('First exercise ->',multipliedNumbers); 
  

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];
  names.sort(); 
  console.log('Second exercise ->',names);

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];
  const uniqueData = [...new Set(data)];
  console.log('Thrid exercise ->',uniqueData);


  const largeWord = "abcdabcdABCD";

    const countLetters = (str) => {
    const letterCount = {};
    for (let char of str) {
      if (letterCount[char]) {
        letterCount[char]++;
      } else {
        letterCount[char] = 1;
      }
    }
    return letterCount;
  };
  
  const result = countLetters(largeWord);
  console.log('Fourth excercise ->',result);
})();
