import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

function Notification () {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button style={{ position: 'absolute', right: '8px', top: '7px', border: 'none', background: 'none', padding: '0' }} aria-label="Close" onClick={console.log("Close button has been clicked")}>
                <img style={{ display: 'inline', marginRight: '6px', marginTop: '6px', padding: '0' }} src={closeIcon} alt='close' width="16px"/> 
            </button>
            <ul>
                <li data='default'>New course available</li>
                <li data='urgent'>New resume available</li>
                <li data='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    )
}

export default Notification;