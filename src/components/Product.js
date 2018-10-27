// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
          <h1>{this.props.name}</h1>
            <h2>{this.props.producer}</h2>
          <h2>{this.props.hasWatermark}</h2>
          <h2>{this.props.color}</h2>
          <h2> {this.props.weight}</h2>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name : PropTypes.string.isRequired,
  producer : PropTypes.string,
  hasWatermark :PropTypes.bool,
  color : PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight : function(props, propName) {
    let value = props[propName];

    if (typeof value === undefined) {
              return new Error("Sorry you must include a number for");
}
    if (isNaN(value)) {
       return ('is a number');
     }

  if (80<value && value<300) {
        return null;
     }

      else return new Error(`${value} weight is not in the specific range`);

  }
};
