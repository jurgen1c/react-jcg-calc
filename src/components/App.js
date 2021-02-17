import React from 'react';
import calculate from '../logic/calculate';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <>
      <div className="app">
        <Display />
        <ButtonPanel calculate={calculate} />
      </div>
    </>
  );
}

export default App;
