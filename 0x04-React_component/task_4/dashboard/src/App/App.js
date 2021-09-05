import React from 'react';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Hotkeys from 'react-hot-keys';
import BodySection from '../BodySection/BodySection';

import { getFullYear, getFooterCopy, getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';


class App extends React.Component {

  constructor(props) {
    super(props);   
  }

  listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40},
  ]

  listNotifications = [
    {id: 1, type: 'default', value: 'New course available', html: null},
    {id: 2, type: 'urgent', value: 'New course available', html: null},
    {id: 3, type: 'urgent', value: null, html: { __html: getLatestNotification() }},
  ]

  onKeyDown() {
    alert("Logging you out");
    this.props.logOut()
  }

  render() {
    return (
      <Hotkeys
        keyName="ctrl+h"
        onKeyDown={this.onKeyDown.bind(this)}
      >
        <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
          <Notifications listNotifications={this.listNotifications} x={this.props.x}/>
          <Header logo={this.props.logo}/>
        </div>
        <hr />
        <body className = 'App-body' >
          {
            (this.props.isLoggedIn)
            ?
            <BodySectionWithMarginBottom title='Course Title'>
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
            : 
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login />
            </BodySectionWithMarginBottom>
          }
          <BodySection  title='News from the School'>
            <p>lol :) noodle boodle</p>
          </BodySection>
        </body>
        <footer className = 'App-footer'>
          <Footer getFullYear={getFullYear} getFooterCopy={getFooterCopy}/>
        </footer>
      </Hotkeys>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
}

App.propTypes = {
  logOut: PropTypes.func,
}

export default App;