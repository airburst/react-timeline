import React, { Component } from 'react';
import TimelineElement from './TimelineElement';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TimelineElement
          title={'The Title'}
          content={'Some lorem ipsum type stuff'} />
        <TimelineElement
          title={'Another Title'}
          content={'Some more lorem ipsum type stuff'} />
      </div>
    )
  }
}

export default App;
