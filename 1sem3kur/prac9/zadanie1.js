function start() {
  console.log("ЗАДАНИЕ 1 ...........................................................");
   
    const numbers = [];
    for (let i = 0; i < 15; i++) {
      numbers.push(Math.floor(Math.random() * 41) - 10); // 41 - для включения 30, -10 - для смещения диапазона
    }
  
    
    console.log("Массив чисел:", numbers);
  

    let sum = 0;
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        sum += numbers[i];
        count++;
      }
    }
  
   
    let average = 0;
    if (count > 0) {
      average = sum / count;
    }
  
  
    console.log("Среднее арифметическое положительных элементов:", average);
  }
  
 start();
  ///////////////////////////////////////////////////////////////////////////////////////////




