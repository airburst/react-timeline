import React, { Component, PropTypes } from 'react';
import TimelineElement from './TimelineElement';
import './Timeline.css';

class Timeline extends Component {

  render() {
    const timeline = this.props.timedata.map((d, i) => {
      let isLast = (i === this.props.timedata.length - 1);
      return (
        <TimelineElement 
          key={i}
          date={d.date}
          title={d.title} 
          content={d.body}
          graphicWidth={this.props.graphicWidth}
          lineLeft={this.props.linePosition}
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

Timeline.propTypes = {
    timedata: PropTypes.array.isRequired,
    graphicWidth: PropTypes.number,
    linePosition: PropTypes.number
}

Timeline.defaultProps = {
    graphicWidth: 120,
    linePosition: 104
}

export default Timeline;
