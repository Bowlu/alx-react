import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

Notifications.defaultProps = {
    displayDrawer: false
};

Notifications.Props = {
    displayDrawer: PropTypes.bool
};

function Notification () {
    return (
    <>
        <div className="menuItem">Your notifications</div>
        { displayDrawer ?
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button style={{ position: 'absolute', right: '8px', top: '7px', border: 'none', outline: 'none', cursor: 'pointer', background: 'none',fontWeight: 'bold', fontSize: '13px', color: 'a9a9a9' }} aria-label="Close" onClick={(e) => {console.log("Close button has been clicked");}}>
                <img src={closeIcon} alt='close'/> 
            </button>
            <ul>
                <NotificationItem type='default' value='New course available'></NotificationItem> 
                <NotificationItem type='urgent' value='New resume available'></NotificationItem>
                <NotificationItem type='urgent' html={getLatestNotification()}></NotificationItem>
            </ul>
        </div>
        :
        null}
    </>
    )
};

export default Notification;