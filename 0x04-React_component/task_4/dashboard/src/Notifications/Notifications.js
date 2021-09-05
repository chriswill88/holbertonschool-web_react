import React from 'react';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

import { getLatestNotification } from '../utils/utils'
import PropTypes from 'prop-types';


class Notifications extends React.Component {
  constructor(props) {
    super(props)
    this.markAsRead = this.markAsRead.bind(this);
  }
  
  
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  render() {
    return (
      <div style={{width: '40%'}}>
        <div className="menuItem" style={{textAlign: 'end'}}>
          Your notifications
        </div>
        {
          this.props.displayDrawer
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
                  this.props.listNotifications.length
                  ? this.props.listNotifications.map((obj) => {
                    return <NotificationItem key={obj.id} id={obj.id} type={obj.type} value={obj.value} html={obj.html} markAsRead={this.markAsRead} />
                  })
                  : <p>No new notifications for now</p>
                }
              </ul>
            </div>
            <button aria-label='Close' onClick={() => {console.log('Close button has been clicked')}} style={{backgroundColor: 'Transparent', border: 'none', height: '0'}}>
              <img src={this.props.x} style={{height: '10px'}}/>
            </button>
          </div>
          : <></>
        }
      </div>
    )
  }
}


Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: []
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

export default Notifications;