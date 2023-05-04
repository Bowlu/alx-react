import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

Notifications.Props = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};


function Notifications ({ displayDrawer, listNotifications }) {
    return (
    <>
        <div className="menuItem">Your notifications</div>
        { displayDrawer ?
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button style={{ position: 'absolute', right: '8px', top: '7px', border: 'none', outline: 'none', cursor: 'pointer', background: 'none',fontWeight: 'bold', fontSize: '13px', color: 'a9a9a9' }} aria-label="Close" onClick={(e) => {console.log("Close button has been clicked");}}>
                <img src={closeIcon} alt='close'/> 
            </button>
            { listNotifications.length != 0 ?
            <p>Here is the list of notifications</p>
            : null }
            <ul>
                { listNotifications.length == 0 ?
                <NotificationItem type="default" value="No new notification for now" />
                : null }
                { listNotifications.map((num, idx) => {
                    return <NotificationItem
                    type={num.type}
                    value={num.value}
                    html={num.html}
                    key={num.id}
                    />
                })}
            </ul>
        </div>
        :
        null}
    </>
    )
};

export default Notification;