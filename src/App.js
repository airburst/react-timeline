import React, { Component } from 'react';
import TimelineElement from './TimelineElement';
import data from '../data/timelineData.json';
import './App.css';

class App extends Component {

  render() {
    const timeline = data.map((d, i) => {
      let isLast = (i === data.length - 1);
      return (
        <TimelineElement 
          key={i}
          date={d.date}
          title={d.title} 
          content={d.body}
          graphicWidth={120}
          lineLeft={104}
          showBottomLine={!isLast} />
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
