const getNumbertoPower = (x, n) => {
    
    if (n <= 1) {
      alert('Степень не поддерживается, введите число больше 0')
    } else {
      const result = Math.pow(x, n);
      console.log(result);
      return result;
    }
};
  
    getNumbertoPower(5, 0);
  