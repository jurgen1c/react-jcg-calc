import operate from './operate';

const calculate = (data, bName) => {
  let { total, next, operation } = data;
  switch (bName) {
    case '+':
    case '-':
    case '÷':
    case 'X':
    case '=':
      if (total !== '' && next !== '') {
        total = operate(total, next, operation);
        next = '';
        if (bName === '=') {
          operation = '';
        } else {
          operation = bName;
        }
      } else if (total !== '' && next === '') {
        operation = bName;
      } else {
        total = next;
        next = '';
        operation = bName;
      }
      break;
    case '+/-':
      next = operate(next, -1, 'X');
      break;
    case '%':
      if (next !== '') {
        total = operate(next, 0, '%');
        next = '';
      }
      break;
    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;
    default:
      if (bName === '.' && next.includes('.')) {
        break;
      }
      next += bName;
  }

  return { next, total, operation };
};
export default calculate;
