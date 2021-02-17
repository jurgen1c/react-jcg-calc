import Big from 'big.js';

const operate = (numberOne, numberTwo, op) => {

  numOne = Big(Number(numberOne));
  numTwo = Big(Number(numberTwo));

  switch(op) {
    case '+':
      return numOne + numTwo
      break;
    case '-':
      return numOne - numTwo
      break;
    case '*':
      return numOne * numTwo
      break;
    case '÷':
      return numOne / numTwo
      break;
    case '%':
      return numOne % numTwo
      break;
    default:
      break;
  }

}

export default operate;