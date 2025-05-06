let numbers = [-5, 2, -8, 10, -3, 0, 7, 1, -9, 4, 6, -2, 12, 8, 0, 5, 3];
    let positiveSum = 0;
    let positiveCount = 0;
    let negativeSum = 0;
    let negativeCount = 0;
    let zeroCount = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        positiveSum += numbers[i];
        positiveCount++;
      } else if (numbers[i] < 0) {
        negativeSum += numbers[i];
        negativeCount++;
      } else {
        zeroCount++;
      }
    }
  
    let positiveAverage = positiveCount > 0 ? positiveSum / positiveCount : 0;
    let negativeAverage = negativeCount > 0 ? negativeSum / negativeCount : 0;
  
    console.log("Среднее арифметическое положительных:", positiveAverage);
    console.log("Среднее арифметическое отрицательных:", negativeAverage);
    console.log("Количество нулей:", zeroCount);
  



  
  