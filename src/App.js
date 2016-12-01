import React, { Component } from 'react';
import Circle from './Circle';
import './App.css';

class App extends Component {
  render() {
    return (
      <svg>
        <Circle x={10} y={10} r={10} fill="transparent" stroke="#ccc" strokeWidth={2} />
        <Circle x={90} y={90} r={10} fill="transparent" stroke="#ccc" strokeWidth={2} />
        <Circle x={90} y={10} r={10} fill="transparent" stroke="#ccc" strokeWidth={2} />
        <Circle x={10} y={90} r={10} fill="transparent" stroke="#ccc" strokeWidth={2} />
      </svg>
    )
  }
}

export default App;
