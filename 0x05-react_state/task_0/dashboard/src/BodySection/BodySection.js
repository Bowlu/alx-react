import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';



BodySection.defaultProps = {
  children: <React.Fragment />
};

BodySection.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

class BodySection extends Component {
  render() {
    return (
      <div className='bodySection'>
        <h2>{ this.props.title }</h2>
        { this.props.children }
      </div>
    );
  }
}

export default BodySection;