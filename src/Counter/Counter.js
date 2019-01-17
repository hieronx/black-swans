import React, { PureComponent } from 'react';
import './Counter.css';

class Counter extends PureComponent {

  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count} swans</h1>
        <h2>Click on your mouse or press SPACE to add swans, until you find a black one!</h2>
      </div>
    )
  }
}

export default Counter
