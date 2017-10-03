var isPrime = function(number) {
  for(var i = 2; i < (number / 2 + 1); i++)
    if(number % i === 0) return false;
  return number !== 1;
};

module.exports = isPrime;
