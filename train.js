//                              ------------------------------------ G-Task --------------------------------
/* "getHighestIndex" nomli bir funksiya yozish kerak.
Bu funksiya bir integerlar massivini qabul qilishi kerak.
Massivning eng katta qiymatiga ega bo'lgan birinchi indeksni topish kerak.
Agar massiv bo'sh bo'lsa, yoki eng katta qiymat topilmagan bo'lsa, funksiya -1 ni qaytarsin
*/
const getHighestIndex = (arr) => {
    let highestIndex = 0; // Boshlang'ich indeksni 0 ga tenglab olamiz
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[highestIndex]) { // Agar hozirgi element oldingisidan katta bo'lsa
        highestIndex = i; // highestIndex ni yangilaymiz
      }
    }
    return highestIndex; // Eng katta elementning indeksini return qiladi
  };
  const ret = getHighestIndex([2, 21, 10, 12, 21, 9]); 
  console.log(ret);// =>  1 
          
          
 