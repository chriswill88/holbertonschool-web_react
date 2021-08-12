import React from 'react';
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
          <li data-priority='default'>New course available</li>
          <li data-priority='urgent'>New resume available</li>
          <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}/>
        </ul>
      </div>
      <button aria-label='Close' onClick={() => {console.log('Close button has been clicked')}} style={{backgroundColor: 'Transparent', border: 'none', height: '0'}}>
        <img src={props.x} style={{height: '10px'}}/>
      </button>
    </div>
  )
}