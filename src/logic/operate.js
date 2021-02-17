import Big from 'big.js';

const operate = (numberOne, numberTwo, op) => {
  const numOne = Big(Number(numberOne));
  const numTwo = Big(Number(numberTwo));
  let result = new Big();

  switch (op) {
    case '+':
      result = numOne + numTwo;
      break;
    case '-':
      result = numOne - numTwo;
      break;
    case '*':
      result = numOne * numTwo;
      break;
    case '÷':
      result = numOne / numTwo;
      break;
    case '%':
      result = numOne % numTwo;
      break;
    default:
  }
  return result;
};

export default operate;
