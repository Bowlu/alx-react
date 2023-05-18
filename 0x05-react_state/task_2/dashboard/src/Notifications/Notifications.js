import React from 'react';
import { getLatestNotification } from '../utils/utils';
import './Notification.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';



class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(newProps) {
        return newProps.listNotifications.length > this.props.listNotifications.length || this.props.displayDrawer != newProps.displayDrawer;
    }
    
    render() {
        return (
        <>
            { this.props.displayDrawer ?
                <div className={css(notificationsStyle.menuItem)} onClick={this.props.handleDisplayDrawer}>Your notifications</div>
                :
            <div className={css(notificationsStyle.notification)}>
                <p>Here is the list of notifications</p>
                <button style={{ position: 'absolute', right: '8px', top: '7px', border: 'none', outline: 'none', cursor: 'pointer', background: 'none',fontWeight: 'bold', fontSize: '13px', color: 'a9a9a9' }} aria-label="Close" onClick={(e) => {console.log("Close button has been clicked");
                this.props.handleHideDrawer();}}>
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
    }
        </>
        );  
    };
}

const notificationsStyle = StyleSheet.create({
    notification: {
        position: 'relative',
        padding: '7px 13px',
        marginTop: '10px',
        border: '2px dotted #da4257',
            '@media (max-width: 900px)': {
                position: 'relative',
                right: '0',
                left: '0',
                padding: '20px',
                width: '100%',
                fontSize: '20px',
                border: 'none'
            }
    },

    menuItem: {
        textAlign: 'right'
    },

    ul: {
        '@media (max-width: 900px)': {
            padding: '0'
        }
    },

    button: {
        '@media (max-width: 900px)': {
            float: 'right',
            position: 'relative'
        }
    }
})

Notifications.defaultProps = {
    displayDrawer: false,
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},    listNotifications: []
};

Notifications.Props = {
    displayDrawer: PropTypes.bool,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notification;