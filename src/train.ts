                                   
                                   // ------ O - task -------------

 function calculateSumOfNumbers(values: (number | string | boolean)[]): number {
    let sum = 0;
    for (const value of values) {
        if (typeof value === 'number') {
            sum += value as number; 
        } else if (typeof value === 'string' && !isNaN(parseFloat(value as string))) {
            sum += parseFloat(value as string); 
        }
    }
    return sum;
}

console.log(calculateSumOfNumbers([10, "son 10", true, 25])); // 55
                                  


//                                                                     // ------ N - task -------------                              
                                   
// const palindromCheck = (str: string) => {
//   // Berilgan matnni teskari qilish
//   const reversedStr = str.split("").reverse().join("");

//   // Teskari qilingan matin asl matn bilan solishtirib
//   // Agar ular bir xil bo'lsa, palindrom bo'lib qaytariladi, aks holda false
//   return str === reversedStr;
// };


// const result1 = palindromCheck("dad");
// console.log("palindromCheck1", result1); // true

// const result2 = palindromCheck("son");
// console.log("palindromCheck2", result2); // false

                                   
                                   
                                   // ------ L -task -------------
 /* NumberSquare interfeysini yaratamiz, bu interfeys raqam va kvadratini va ularning typelarini o'z ichiga oladi. 
 getSquareNumbers funksiyasi numbers nomli raqamlarni qabul qiladi va 2 ga ko'paytiradi. NumberSquare obyektlari numberning kvadratlarini qaytaradi.
  */                                  

// interface NumberSquare {
//     number: number;
//     square: number;
// }
// function getSquareNumbers(numbers: number[]): NumberSquare[] {
//     return numbers.map(number => ({ number, square: Math.pow(number, 2) }));
// }
// // Test qilish
// console.log(getSquareNumbers([1, 2, 3, 4, 5])); 

                                             
                                             // ------ K -task -------------

//  console.log("Hello ");

//  function reverseSentence(sentence: string): string {
//     const words = sentence.split(" ");
//     const reversedWords = words.map(
//       word => word.split("")
//       .reverse().join(""));
//     return reversedWords.join(" ");
//  }
// console.log(reverseSentence("we like coding!"));


/* Project Standards:
  - Logging standards
  - Naming standards
     function, method, variable => CAMEL case
     class => PASKAL case
     folder, file => KEBAB case
     css => SNAKE case
  - Error handling
*/

/* Api turlari:
  Traditional Api (Html ni ozi methodlaridan foydalinb)
  Rest Api
  GraphQL Api
  ...
*/

/* Frontend Development
  Traditional FD  => BSSR (Admin pageni shu orqai quramiz)=> EJS
  Modern FD       => SPA(Users' pageni shu usulda quramiz.)  => REACT
  
*/

/* Cookies:
   request join
   self destroy
*/

/* Validations:
   Frontend validation
   Backend validation
   Database validation
*/

