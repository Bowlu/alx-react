import React from 'react';
import PropTypes from 'prop-types';

NotificationItem.defaultProps = {
  type: 'default'
};

NotificationItem.Props = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({__html: PropTypes.string})
};

function NotificationItem({ type, html, value}) {
  return(
    <>
    value ?
    <li data-notification-type={type}>{value}</li>
    :
    <li data-notification-type={type} dangerouslySetInnerHTML={{__html: html}}></li>
    </>
  );
}

export default NotificationItem;