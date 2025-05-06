
    let maxRedCount = 0;
    let redCount = 0;
  
    for (let i = 0; i < 1000000; i++) {
      let randomValue = Math.floor(Math.random() * 3); // Генерируем случайное значение от 0 до 2
  
      if (randomValue === 0) { // 0 соответствует красному
        redCount++;
      } else {
        redCount = 0; // Сбрасываем счетчик красного, если выпало не красное
      }
  
      maxRedCount = Math.max(maxRedCount, redCount); // Обновляем максимальное количество красных
    }
  
    console.log("Максимальное число раз выпадало красное значение:", maxRedCount);
  
  
  
  
  