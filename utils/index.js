
baseX = (value, base) => {
    let digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
    let result = '';
    while (value >= base) {
      result = digits[value % base] + result;
      value = Math.floor(value / base);
    }
    return  digits[value] + result;
  };
  
module.exports = baseX;