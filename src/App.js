import React, { Component } from 'react';
import TimelineElement from './TimelineElement';
import data from '../data/timelineData.json';
import './App.css';

class App extends Component {

  render() {
    const timeline = data.map((d, i) => {
      return (
        <TimelineElement 
          key={i}
          date={d.date}
          title={d.title} 
          content={d.body}
          graphicWidth={120}
          lineLeft={100} />
      )
    });

    return (
      <div className="timeline-component">
        {timeline}
      </div>
    )
  }
}

export default App;
