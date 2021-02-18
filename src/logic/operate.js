import Big from 'big.js';

const operate = (numberOne, numberTwo, op) => {
  const numOne = Big(Number(numberOne));
  const numTwo = Big(Number(numberTwo));
  const minusOne = Big(-1);

  switch (op) {
    case '+':
      return numOne.plus(numTwo).toNumber();
    case '-':
      return numOne.minus(numTwo).toNumber();
    case 'X':
      return Big(Number(numOne * numTwo));
    case '÷':
      return numOne.div(numTwo).toNumber();
    case '%':
      return numOne.times(Big(0.01)).toNumber();
    case '+/-':
      return numOne.times(minusOne).toNumber();
    default:
      return Error;
  }
};

export default operate;
