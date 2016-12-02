import React, { Component, PropTypes } from 'react';
import Circle from './Circle';
import Line from './Line';
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
        };
    }

    hoverState() {
        return {
            hover: true,
            radius: 15,
            fill: 'steelBlue'
        };
    }

    handleMouseOver = (e) => {
        this.setState(this.hoverState());
    }

    handleMouseOut = (e) => {
        this.setState(this.initialState());
    }

    componentDidMount() {
        let { offsetHeight } = this.refs.timeline;
        this.setState({ height: offsetHeight });
    }

    render() {
        const lineLength = (this.state.height / 2) - this.state.radius;
        const topLine = { x1: this.props.lineLeft, y1: 0, x2: this.props.lineLeft, y2: lineLength };
        const bottomLine = { x1: this.props.lineLeft, y1: lineLength + (this.state.radius * 2), x2: this.props.lineLeft, y2: this.state.height };
        const dateBoxTop = ((this.state.height - this.props.dateBoxHeight) / 2) - 3;    /* The 3px is magic.. */
        let timelineClassName = 'timeline-element';
        if (this.state.hover) { timelineClassName += ' hover'; }

        return (
            <div
                className={timelineClassName}
                ref="timeline"
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>

                <div className="timeline" width={this.props.graphicWidth}>
                    <svg
                        height={this.state.height}
                        width={this.props.graphicWidth}
                        viewBox={`0 0 ${this.props.graphicWidth} ${this.state.height}`}>
                        <Line coords={topLine} />
                        <Circle
                            x={this.props.lineLeft}
                            y={this.state.height / 2}
                            r={this.state.radius}
                            fill={this.state.fill} />
                        <Line coords={bottomLine} />
                        <path
                            d={`M10,${dateBoxTop} h${this.props.dateBoxWidth} 
                                a3,3 0 0 1 3,3 
                                v${this.props.dateBoxHeight} 
                                a3,3 0 0 1 -3,3 
                                h-${this.props.dateBoxWidth} 
                                a3,3 0 0 1 -3,-3 
                                v-${this.props.dateBoxHeight} 
                                a3,3 0 0 1 3,-3 z`
                            }
                            fill="steelBlue" />
                        <text
                            className="timeline-date"
                            x={15}
                            y={(this.state.height + this.initialState().radius) / 2}
                            fill="white"
                            fontSize={this.props.dateFontSize}>
                            {this.props.date}
                        </text>
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
    date: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    graphicWidth: PropTypes.number,
    lineLeft: PropTypes.number,
    strokeWidth: PropTypes.number,
    dateBoxHeight: PropTypes.number,
    dateBoxWidth: PropTypes.number,
    dateFontSize: PropTypes.number
};

TimelineElement.defaultProps = {
    graphicWidth: 100,
    lineLeft: 75,
    strokeWidth: 2,
    dateBoxHeight: 20,
    dateBoxWidth: 50,
    dateFontSize: 12
}

export default TimelineElement;
