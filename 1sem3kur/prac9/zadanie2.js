console.log("ЗАДАНИЕ 2 ..........................................................."); 
 let numbers = [-5, 2, -8, 10, -3, 7, 1, -9, 4, 6, -2, 12, 8, 5, 3];
  console.log("Исходный массив:", numbers);
    if (numbers.length <= 10) {
      console.error("Длина массива должна быть больше 10.");
       
    };
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
        numbers[i] = numbers[i] * numbers[i]; // Заменяем отрицательный элемент на его квадрат
      };
    
  
    
  };
  console.log("Измененный массив:", numbers); 

 
  
  
  
  
  
