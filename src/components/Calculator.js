import { useState } from 'react';
import calculate from '../logic/calculate';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

const Calculator = () => {
  const [state, setState] = useState({ total: '', next: '', operation: '' });

  const handleClick = btnName => {
    const result = calculate(state, btnName);
    setState(result);
  };

  return (
    <div className="container">
      <div>
        <h2>Lets do some Math!</h2>
      </div>
      <div className="app">
        <Display
          result={String(state.total)}
          next={String(state.next)}
          operation={state.operation}
        />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
