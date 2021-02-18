import React from 'react';
import calculate from '../logic/calculate';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const { total, next, operation } = calculate(this.state, btnName);
    this.setState({ total, next, operation });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <div className="app">
          <Display result={String(total)} next={String(next)} operation={operation} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}
