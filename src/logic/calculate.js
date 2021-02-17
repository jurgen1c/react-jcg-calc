import operate from './operate';

const calculate = ({ total, next, operation }, bName) => {
  let result = total;
  let nextNum = next;

  if (bName === '+/-') {
    result *= -1;
    nextNum *= -1;
    return { result, nextNum };
  }
  result = operate(result, nextNum, operation);
  return { result, nextNum };
};

export default calculate;
