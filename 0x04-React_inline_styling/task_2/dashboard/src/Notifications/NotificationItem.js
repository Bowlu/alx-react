import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {console.log('empty func');}
};

NotificationItem.Props = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({__html: PropTypes.string}),
  id: PropTypes.number,
  markAsRead: PropTypes.func
};


class NotificationItem extends React.PureComponent {

  constructor(props) {
    super(props);
    this.style = this.props.type === 'default' ? itemStyles.default : itemStyles.urgent;
  }

  render () {
    return(
      <>
      this.props.value ?
      <li data-notification-type={this.props.type} onClick={() => this.props.markAsRead(this.props.id)} className={css(this.style)}></li>
      :
      <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} className={css(this.tyle)} onClick={() => {console.log('empty func');}}></li>
      </>
    );
  }
}

const itemStyles = StyleSheet.create({
  urgent: {
    color: 'red'
  },

  default: {
    color: 'blue'
  }
});

export default NotificationItem;