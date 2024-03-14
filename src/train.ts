                                   // ------ L -task -------------
 /* NumberSquare interfeysini yaratamiz, bu interfeys raqam va kvadratini va ularning typelarini o'z ichiga oladi. 
 getSquareNumbers funksiyasi numbers nomli raqamlarni qabul qiladi va 2 ga ko'paytiradi. NumberSquare obyektlari numberning kvadratlarini qaytaradi.
  */                                  

interface NumberSquare {
    number: number;
    square: number;
}
function getSquareNumbers(numbers: number[]): NumberSquare[] {
    return numbers.map(number => ({ number, square: Math.pow(number, 2) }));
}
// Test qilish
console.log(getSquareNumbers([1, 2, 3, 4, 5])); 

                                             
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
  Traditional Api
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

