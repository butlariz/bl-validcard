function cardValidator(numberCard) {
  if (numberCard === '' || !numberCard) {
    throw Error('Function called with no value');
  } else if (typeof(numberCard) !== 'number') {
    throw Error('Type only numbers');
  } else if (numberCard.toString().length === 1) {
    throw Error('One number is not a valid card');
  } else {
    const arrayNumbers = numberCard.toString().split('').reverse();
    return luhnAlgorithm(arrayNumbers);
  } 
}

const luhnAlgorithm = (array) => {
  arrayLuhn = array.map((value, index) => {
    value = parseInt(value);
    if (index % 2 === 0) {
      return value;
    } else {
      return value * 2 > 9 ? value * 2 - 9 : value * 2;
    }
  });

  return sumArray(arrayLuhn);
};

const sumArray = (array) => {
  let sum = array.reduce((accum, item) => accum + item);
  return validateSum(sum);
};

const validateSum = (num) => {
  return num % 10 === 0;
};

module.exports.cardValidator = cardValidator;