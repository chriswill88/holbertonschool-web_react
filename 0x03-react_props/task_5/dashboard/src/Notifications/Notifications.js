import React from 'react';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

import { getLatestNotification } from '../utils/utils'
import PropTypes from 'prop-types';


export default class Notifications extends React.PureComponent {
  shouldComponentUpdate(nextProps) {
    if (nextProps.listNotifications !== this.props.listNotifications) {
      return true;
    } else if (nextProps.displayDrawer !== this.props.displayDrawer) {
      return true;
    } else {
      return true;
    }
  }
  
  render() {
    const {displayDrawer=true, x, listNotifications=[]} = this.props;


    return (
      <div style={{width: '40%'}}>
        <div className="menuItem" style={{textAlign: 'end'}}>
          Your notifications
        </div>
        {
          displayDrawer
          ? <div className="Notifications" style={{
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
                {
                  listNotifications.length
                  ? listNotifications.map((obj) => {
                    return <NotificationItem key={obj.id} type={obj.type} value={obj.value} html={obj.html} />
                  })
                  : <p>No new notifications for now</p>
                }
              </ul>
            </div>
            <button aria-label='Close' onClick={() => {console.log('Close button has been clicked')}} style={{backgroundColor: 'Transparent', border: 'none', height: '0'}}>
              <img src={x} style={{height: '10px'}}/>
            </button>
          </div>
          : <></>
        }
      </div>
    )
  }
  
}


NotificationItem.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

NotificationItem.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}