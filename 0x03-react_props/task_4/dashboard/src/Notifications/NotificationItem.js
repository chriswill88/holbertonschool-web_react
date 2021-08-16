import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({type, html, value}) {
  return (
    <>
    {
      html
      ? <li data-notification-type={type} dangerouslySetInnerHTML={html} />
      : <li data-notification-type={type}>{value}</li>
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
