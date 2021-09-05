import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({type, html, value, markAsRead, id}) {
  function onclick() {
    markAsRead(id);
  }

  return (
    <>
    {
      html
      ? <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={onclick}/>
      : <li data-notification-type={type} onClick={onclick}>{value}</li>
    }
    </>
  );
}


NotificationItem.defaultProps = {
  type: 'default'
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default NotificationItem;
