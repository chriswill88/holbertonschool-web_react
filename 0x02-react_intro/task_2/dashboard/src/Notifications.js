import React from 'react';
import './Notifications.css';
import x from './close-icon.jpg';

export default function Notifications(props) {
  const getLatestNotification = 'Update requirement = compete by EOD'
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
          <li data-priority='default'>New course available</li>
          <li data-priority='urgent'>New resume available</li>
          <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: props.gln() }}/>
        </ul>
      </div>
      <button aria-label='Close' onClick={() => {console.log('Close button has been clicked')}} style={{backgroundColor: 'Transparent', border: 'none', height: '0'}}
        ><img src={x} style={{height: '10px'}}/></button>
    </div>
  )
}