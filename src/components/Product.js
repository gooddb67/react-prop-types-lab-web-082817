import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component{
  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark}</li>
        <li>{this.props.color}</li>
        <li>{this.props.hasWatermark}</li>
        <li>{this.props.weight}</li>
      </ul>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

function rangeCheck(props, propName, componentName){
  if (!props[propName]){
    return new Error('no')
  }else if(typeof props[propName] !== 'number'){
    return new Error('nooo')
  }else if(props[propName] < 80 || props[propName] > 300){
    return new Error('no00000')
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: rangeCheck
}
