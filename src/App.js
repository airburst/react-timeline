import React, { Component } from 'react';
import Timeline from './Timeline/Timeline';
import data from '../data/timelineData.json';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="wrapper">

        <div className="left">
          <div className="left-content">
            <img src="https://placehold.it/600x400" alt="profile" />
          </div>
        </div>

        <div className="right">
          <div className="right-content">
            <Timeline
              timedata={data}
              graphicWidth={120}
              linePosition={104} />
          </div>
        </div>

      </div>
    )
  }
}

export default App;
