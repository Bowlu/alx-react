import React from 'react';
import Component from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';

BodySectionWithMarginBottom.defaultProps = {
  children: <React.Fragment />
};

BodySectionWithMarginBottom.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  };
};

export default BodySectionWithMarginBottom;