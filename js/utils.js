// Получение случайного целого числа в заданном интервале, включая min и max
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Получение случайного индекса из указанного диапазона
const createRandomUniqueIntegerGenerator = (a, b) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger (a, b);
    while (previousValues.includes (currentValue)) {
      currentValue = getRandomInteger (a, b);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// Поиск случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, createRandomUniqueIntegerGenerator, getRandomArrayElement};
