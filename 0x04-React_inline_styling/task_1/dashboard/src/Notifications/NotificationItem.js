import React from 'react';
import PropTypes from 'prop-types';

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
  }

  render () {
    return(
      <>
      this.props.value ?
      <li data-notification-type={this.props.type} onClick={() => this.props.markAsRead(this.props.id)}></li>
      :
      <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => {console.log('empty func');}}></li>
      </>
    );
  }
}

export default NotificationItem;