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
          
          
          