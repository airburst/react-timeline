import React, { Component, PropTypes } from 'react';

class Line extends Component {
    render() {
        return (
            <line 
                x1={this.props.coords.x1} 
                y1={this.props.coords.y1} 
                x2={this.props.coords.x2} 
                y2={this.props.coords.y2} 
                stroke={this.props.stroke} 
                strokeWidth={this.props.strokeWidth}
            />
        )
    }
}

Line.propTypes = {
    coords: PropTypes.object.isRequired,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number
};

Line.defaultProps = {
    stroke: '#ccc',
    strokeWidth: 2
};

export default Line;
