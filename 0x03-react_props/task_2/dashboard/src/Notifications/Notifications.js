import React from 'react';
import NotificationItem from './NotificationItem';

import { getLatestNotification } from '../utils/utils'


export default function Notifications(props) {
  return (
    <div className="Notifications" style={{
      border: '2px dashed red',
      display: 'flex',
      justifyContent: 'space-between'
    }}>     
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        }}>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type='default' value='New course available' />
          <NotificationItem type='urgent' value='New course available' />
          <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
        </ul>
      </div>
      <button aria-label='Close' onClick={() => {console.log('Close button has been clicked')}} style={{backgroundColor: 'Transparent', border: 'none', height: '0'}}>
        <img src={props.x} style={{height: '10px'}}/>
      </button>
    </div>
  )
}