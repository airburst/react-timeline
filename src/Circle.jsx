import React, { Component, PropTypes } from 'react';

class Circle extends Component {
    render() {
        return (
            <circle 
                cx={this.props.x} 
                cy={this.props.y} 
                r={this.props.r} 
                fill={this.props.fill} 
                stroke={this.props.stroke} 
                strokeWidth={this.props.strokeWidth}
            />
        )
    }
}

Circle.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    r: PropTypes.number,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number
};

Circle.defaultProps = {
    r: 10,
    fill: 'transparent',
    stroke: 'grey',
    strokeWidth: 2
};

export default Circle;
