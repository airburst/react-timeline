import React, { Component, PropTypes } from 'react';
import Circle from './Circle';
import './TimelineElement.css';

class TimelineElement extends Component {

    constructor() {
        super();
        this.state = Object.assign({}, this.initialState(), { height: 50 });
    }

    initialState() {
        return {
            hover: false,
            radius: 10,
            fill: 'transparent'
        }
    }

    hoverState() {
        return {
            hover: true,
            radius: 15,
            fill: 'steelBlue'
        }
    }

    handleMouseOver = (e) => {
        this.setState(this.hoverState())
    }

    handleMouseOut = (e) => {
        this.setState(this.initialState())
    }

    componentDidMount() {
        let { offsetHeight } = this.refs.timeline;
        console.log(offsetHeight)
        this.setState({ height: offsetHeight })
    }

    render() {
        const lineLength = (this.state.height / 2) - this.state.radius;
        const topLine = { x1: 50, y1: 0, x2: 50, y2: lineLength };
        const bottomLine = { x1: 50, y1: lineLength + (this.state.radius * 2), x2: 50, y2: this.state.height };

        return (
            <div
                className="timeline-element"
                ref="timeline"
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>

                <div className="timeline">
                    <svg
                        height={this.state.height}
                        width={100}
                        viewBox={`0 0 100 ${this.state.height}`}>
                        <line
                            x1={topLine.x1}
                            y1={topLine.y1}
                            x2={topLine.x2}
                            y2={topLine.y2}
                            strokeWidth={2}
                            stroke="#ccc" />
                        <Circle
                            x={50}
                            y={this.state.height / 2}
                            r={this.state.radius}
                            fill={this.state.fill}
                            stroke="#ccc"
                            strokeWidth={2} />
                        <line
                            x1={bottomLine.x1}
                            y1={bottomLine.y1}
                            x2={bottomLine.x2}
                            y2={bottomLine.y2}
                            strokeWidth={2}
                            stroke="#ccc" />
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
