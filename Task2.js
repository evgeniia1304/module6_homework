function isPrimeNumber(num) {
  
    if ((num < 2) || (num > 1000)) {
      return console.log("данные неверны")
    } else {
      for (let i = 2; i < num; i++){
          if (num % i === 0){
            return console.log("непростое число")
          } else {
            return console.log("простое число")
          }
       }
    }
  }
  console.log(isPrimeNumber(74)); // здесь вводится число