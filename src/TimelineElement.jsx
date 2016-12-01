import React, { Component, PropTypes } from 'react';
import Circle from './Circle';
import './TimelineElement.css';

class TimelineElement extends Component {
    render() {
        return (
            <div className="timeline-element">
                <div className="timeline">
                    <svg>
                        <Circle
                            x={50}
                            y={50}
                            r={10}
                            fill="transparent"
                            stroke="#ccc"
                            strokeWidth={2} />
                    </svg>
                </div>
                <div className="timeline-content">
                    <h4 className="timeline-content-title">{this.props.title}</h4>
                    <p className="timeline-content-body">{this.props.content}</p>
                </div>
            </div>
        )
    }
}

TimelineElement.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

export default TimelineElement;
