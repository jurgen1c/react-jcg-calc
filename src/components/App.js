import { useState } from 'react';
import calculate from '../logic/calculate';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default function App() {
  const [state, setState] = useState({ total: '', next: '', operation: '' });

  const handleClick = btnName => {
    const { total, next, operation } = calculate(state, btnName);
    setState({ total, next, operation });
  };

  return (
    <>
      <div className="app">
        <Display
          result={String(state.total)}
          next={String(state.next)}
          operation={state.operation}
        />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
}
