import React from 'react';
import PropTypes from 'prop-types';


export default class NotificationItem extends React.PureComponent {
  render() {
    const {type, html, value} = this.props;

    return (
      <>
      {
        html
        ? <li data-notification-type={type} dangerouslySetInnerHTML={html} />
        : <li data-notification-type={type}>{value}</li>
      }
      </>
    )
  }
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
