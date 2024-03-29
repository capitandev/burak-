                                   // ------ S-TASK: - task -------------
/**
 * 
 * @param nums : 
 * 1-Ro'yxatda qancha raqam borligini aniqlab, uning 1 dan n gacha bo'lgan barcha raqamlarni qo'shib chiqib, umumiy yig'indini hisoblaymiz. 
 * Bu uchun, n ning qiymatini olishimiz kerak.
 * 2-Ro'yxatdagi barcha raqamlarni yig'indisini topib olamiz.
 * 3-Berilgan ro'yxatdagi raqamlar orasida qaysi raqamning tushib qolganligini aniqlash uchun umumiy yig'indan ro'yxatdagi raqamlarning yig'indisini ayirib chiqamiz. 
 * Bu bilan tushib qolgan sonni topamiz.
 * 3-Aniqlangan tushib qolgan sonni return qilamiz.
 * Berilgan ro'yxatdagi tushib qolgan sonni topish uchun missingNumber nomli funksiyasini yaratiamiz.
 * U nums nomli number type li array qabul qilishi n ning uzunligini hisoblashi , raqamlarni yig'indisini va ro'yaxtadgi barcha raqamlar yig'indisini hisoblab ayirishi 
 * va tushib qolgan sonni aniqlab return qaytarishi kerak.
 * @returns : missing Number 
 */
function missingNumber(nums: number[]): number {
    const n: number = nums.length;
    const totalSum: number = (n * (n + 1)) / 2;
    const actualSum: number = nums.reduce((acc, curr) => acc + curr, 0);
    return totalSum - actualSum;
}

const nums: number[] = [3, 0, 1];
console.log(missingNumber(nums)); 


                                    // ------ R - task -------------


//  console.log("Hello Mentor :) ");

//  function calculate(expression: string): number {
//   const result = eval(expression);
//   return Number(result);
// }
// console.log(calculate("1+3")); 

                                          // ------ Q - task -------------

// const hasProperty = (obj: { [key: string]: string }, str: string): boolean => {
//   const keys = Object.keys(obj);
  
//   for (let i = 0; i < keys.length; i++) {
//     if (keys[i] === str) {
//       return true;
//     }
//   }
//   return false;
// };

// const result1: boolean = hasProperty({ name: "BMW", model: "M3" }, "model");
// console.log("result1 => ", result1);

// const result2: boolean = hasProperty({ name: "BMW", model: "M3" }, "year");
// console.log("result2 => ", result2);


                                  // ------ P - task -------------

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//     return Object.entries(obj);
// }
// const obj: { [key: string]: any } = {a: 10, b: 20};
// const result: [string, any][] = objectToArray(obj);
// console.log(result); 


//                                    // ------ O - task -------------

//  function calculateSumOfNumbers(values: (number | string | boolean)[]): number {
//     let sum = 0;
//     for (const value of values) {
//         if (typeof value === 'number') {
//             sum += value as number; 
//         } else if (typeof value === 'string' && !isNaN(parseFloat(value as string))) {
//             sum += parseFloat(value as string); 
//         }
//     }
//     return sum;
// }

// console.log(calculateSumOfNumbers([10, "son 10", true, 25])); // 55
                                  


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

