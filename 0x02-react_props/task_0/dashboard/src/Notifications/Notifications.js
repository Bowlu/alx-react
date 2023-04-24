import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from '../assets/close-icon.png';

function Notification () {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button style={{ position: 'absolute', right: '8px', top: '7px', border: 'none', outline: 'none', cursor: 'pointer', background: 'none',fontWeight: 'bold', fontSize: '13px', color: 'a9a9a9' }} aria-label="Close" onClick={(e) => {console.log("Close button has been clicked");}}>
                <img src={closeIcon} alt='close'/> 
            </button>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    )
}

export default Notification;