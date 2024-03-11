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

// K-TASK
const countVowels = (str: string) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  const charArray = str.split("");
  for (let i = 0; i < charArray.length; i++) {
    if (vowels.includes(charArray[i])) {
      count++;
    }
  }
  return count;
};
const result = countVowels("MuhammadAli");
console.log(result);
// // J-TASK
// const findLongestWord = (str: string) => {
//   const words = str.split(" ");
//   let result = words[0];
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > result.length) {
//       result = words[i];
//     }
//   }
//   return result;
// };
// const res = findLongestWord("I am from Uzbekistan");
// console.log(res);

// // I-TASK
// const getDigits = (str: string) => {
//   let result: string = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(+str[i])) {
//       result += str[i];
//     }
//   }
//   return result;
// };

// const res = getDigits("m14i1t");
// console.log("res:", res);

// // H-TASK
// const getPositive = (arr: number[]) => {
//   let res: string = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       res += arr[i];
//     }
//   }
//   return res;
// };

// const result = getPositive([1, 2, 3, 4, 0, -1, -4, 6, -8]);
// console.log(result);

// // Sezer challenge
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// let code = 2;
// let message = "hello, how are you doing, my general?";
// const decodeMessage = (message: string, secret: number) => {
//   const result = message.replace(/[a-z]/gi, (char) => {
//     const index = alphabet.indexOf(char.toLowerCase());
//     const newIndex = (index + secret + alphabet.length) % alphabet.length;
//     const decodedChar = alphabet[newIndex];
//     return decodedChar;
//   });
//   return result;
// };
// const secret_msg = decodeMessage(message, code);
// console.log("Secret Message =>", secret_msg);

// setTimeout(() => {
//   code *= -1;
//   const message_encoded = decodeMessage(secret_msg, code);
//   console.log("Original Message => ", message_encoded);
// }, 5000);
