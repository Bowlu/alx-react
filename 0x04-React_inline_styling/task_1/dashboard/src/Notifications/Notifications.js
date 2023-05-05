import React from 'react';
import { getLatestNotification } from '../utils/utils';
import './Notification.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

Notifications.Props = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

class Notifications extends React.component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(newProps) {
        return newProps.listNotifications.length > this.props.listNotifications.length;
    }
    
    render() {
        return (
        <>
            <div className="menuItem">Your notifications</div>
            { this.props.displayDrawer ?
            <div className={css(notificationsStyle.notification)}>
                <p>Here is the list of notifications</p>
                <button style={{ position: 'absolute', right: '8px', top: '7px', border: 'none', outline: 'none', cursor: 'pointer', background: 'none',fontWeight: 'bold', fontSize: '13px', color: 'a9a9a9' }} aria-label="Close" onClick={(e) => {console.log("Close button has been clicked");}}>
                    <img src={closeIcon} alt='close'/> 
                </button>
                { this.props.listNotifications.length != 0 ?
                <p>Here is the list of notifications</p>
                : null }
                <ul>
                    { this.props.listNotifications.length == 0 ?
                    <NotificationItem type="default" value="No new notification for now" />
                    : null }
                    { this.props.listNotifications.map((num, idx) => {
                        return <NotificationItem type={num.type}
                        value={num.value}
                        html={num.html}
                        key={num.id}
                        markAsRead={this.markAsRead}
                        id={num.id}
                        />
                    })}
                </ul>
            </div>
            :
            null}
        </>
        );  
    };
}

const notificationsStyle = StyleSheet.create({
    notification: {
        position: 'relative',
        padding: '7px 13px',
        marginTop: '10px',
        border: '2px dotted #da4257'
    }
})

export default Notification;