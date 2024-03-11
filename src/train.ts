console.log("Hello Mentor!");
// // ------------------------------ K-Task --------------------------

class Main {
  public static main(): void {
      const sentence: string = "I come from Uzbekistan";
      const longestWord: string = Main.findLongestWord(sentence);
      console.log(longestWord);
  }

  public static findLongestWord(sentence: string): string {
      const words: string[] = sentence.split(" ");
      let longestWord: string = "";
      let maxLength: number = 0;

      for (const word of words) {
          if (word.length > maxLength) {
              maxLength = word.length;
              longestWord = word;
          }
      }

      return longestWord;
  }
}

Main.main();




  // // ------------------------------ I-Task --------------------------
  // /* 1-getDigits nomli funksiya berilgan inputString ichidagi raqamlarni ajratib oladi va yangi bir string sifatida qaytaradi.
  //   2-result nomli bo'sh string yaratiladi.
  //   3-inputString ning har birni tekshirish amalga oshiriladi.
  //   4-Agar belgi raqam bo'lsa (!isNaN(parseInt(char)) orqali), uni result stringiga qo'shadi.
  //   5-Natijani qaytaradi.
  //   */

  //   function getDigits(inputString: string): string {
  //     // Qabul qilingan stringdagi raqamlarni saqlash uchun bo'sh string
  //     let result = '';
  
  //     // Qabul qilingan stringni har birni tekshiramiz
  //     for (let char of inputString) {
  //         // Agar berilgan raqam bo'lsa, uni natijaga qo'shamiz
  //         if (!isNaN(parseInt(char))) {
  //             result += char;
  //         }
  //     }
  //     return result;
  // }
  // console.log(getDigits("m14i1t")); // => 141
  
// getPositive nomli funksiya yaratiladi.
// Bu funksiya musbat sonlarni olib, ularni bir string sifatida qaytaradi.
// const getPositive = (arr: number[]): string => {
//     // res o'zgaruvchisi, funksiya natijasini saqlash uchun ishlatiladi.
//     let res: string = "";
//     // For loop yordamida, berilgan har bir elementini tekshiriladi.
//     for (let i = 0; i < arr.length; i++) {
//         // Agar ro'yxatdagi element musbat bo'lsa:
//         if (arr[i] > 0) {
//             // Natijadagi sonni stringga o'tkazib, res ga qo'shiladi.
//             res += arr[i].toString();
//         }
//     }
//     // Natijadagi string qaytariladi.
//     return res;
// };

// // Faqat musbat sonlar 1, 2, 4, 8 qaytarilishi kerak. Natija "1248" stringi bo'ladi.
// const result = getPositive([1, 2, -3, 4, -6, 8, 0, -1, -4, -8]);
// console.log(result); // => 1248
