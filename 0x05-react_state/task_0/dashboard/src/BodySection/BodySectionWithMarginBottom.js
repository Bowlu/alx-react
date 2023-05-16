import React from 'react';
import Component from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

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
      <div className={css(bodyStyle.margin)}>
        <BodySection {...this.props} />
      </div>
    );
  };
};

const bodyStyle = StyleSheet.create({
  margin: {
    marginBottom: '40px'
  }
});

export default BodySectionWithMarginBottom;