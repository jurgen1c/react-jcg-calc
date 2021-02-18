import Big from 'big.js';

const operate = (numberOne, numberTwo, op) => {
  const numOne = Big(Number(numberOne));
  const numTwo = Big(Number(numberTwo));
  const minusOne = Big(-1);

  switch (op) {
    case '+':
      if (numOne < 0 && numTwo > 0) {
        return (Math.abs(numTwo) - Math.abs(numOne));
      }
      if (numTwo < 0 && numOne > 0) {
        return Math.abs(numOne) - Math.abs(numTwo);
      }
      return numOne + numTwo;
    case '-':
      if (numOne < 0 && numTwo < 0) {
        return -(Math.abs(numTwo) + Math.abs(numOne));
      }
      if (numOne < 0) {
        return Math.abs(numTwo) - Math.abs(numOne);
      }
      return numOne - numTwo;
    case 'X':
      return numOne * numTwo;
    case '÷':
      return numOne / numTwo;
    case '%':
      return numOne * Big(0.01);
    case '+/-':
      return Math.abs(numOne) * Math.abs(minusOne);
    default:
      return Error;
  }
};

export default operate;
