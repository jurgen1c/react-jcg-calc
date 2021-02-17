import React from 'react';
import calculate from '../logic/calculate';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  render(){

    return (
      <>
        <div className="app">
          <Display />
          <ButtonPanel calculate={calculate} />
        </div>
      </>
    );
  }
  
}

