console.log("Hello Mentor!");

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
// getPositive nomli funksiya yaratiladi.
// Bu funksiya musbat sonlarni olib, ularni bir string sifatida qaytaradi.
const getPositive = (arr: number[]): string => {
    // res o'zgaruvchisi, funksiya natijasini saqlash uchun ishlatiladi.
    let res: string = "";
    // For loop yordamida, berilgan har bir elementini tekshiriladi.
    for (let i = 0; i < arr.length; i++) {
        // Agar ro'yxatdagi element musbat bo'lsa:
        if (arr[i] > 0) {
            // Natijadagi sonni stringga o'tkazib, res ga qo'shiladi.
            res += arr[i].toString();
        }
    }
    // Natijadagi string qaytariladi.
    return res;
};

// Faqat musbat sonlar 1, 2, 4, 8 qaytarilishi kerak. Natija "1248" stringi bo'ladi.
const result = getPositive([1, 2, -3, 4, -6, 8, 0, -1, -4, -8]);
console.log(result); // => 1248
