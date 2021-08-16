import React from 'react';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CourseList from '../CourseList/CourseList';

import { getFullYear, getFooterCopy, getLatestNotification } from '../utils/utils';
import propTypes from 'prop-types';


function App({ logo, x, isLoggedIn=false }) {
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40},
  ]

  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available', html: null},
    {id: 2, type: 'urgent', value: 'New course available', html: null},
    {id: 3, type: 'urgent', value: null, html: { __html: getLatestNotification() }},
  ]

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
        <Notifications listNotifications={listNotifications} x={x}/>
        <Header logo={logo}/>
      </div>
      <hr />
      <body className = 'App-body' >
        {
          (isLoggedIn)
          ? <CourseList listCourses={listCourses} />
          : <Login />
        }
      </body>
      <footer className = 'App-footer'>
        <Footer getFullYear={getFullYear} getFooterCopy={getFooterCopy}/>
      </footer>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;