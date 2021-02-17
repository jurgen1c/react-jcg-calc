import operate from './operate';

const calculate = (data, bName) => {
  if(bName === '+/-') {
    data.total *= -1;
    data.next *= -1
    return data
  } else {
    data.total = operate(data.total, data.next, bName);
    return data
  }
}

export default calculate;