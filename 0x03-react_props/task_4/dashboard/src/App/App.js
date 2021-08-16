import React from 'react';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CourseList from '../CourseList/CourseList';

import PropTypes from 'prop-types';

import { getFullYear, getFooterCopy } from '../utils/utils';


function App({ logo, x, isLoggedIn=false }) {
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
        <Notifications x={x}/>
        <Header logo={logo}/>
      </div>
      <hr />
      <body className = 'App-body' >
        {
          (!isLoggedIn)
          ? <CourseList />
          : <Login />
        }
      </body>
      <footer className = 'App-footer'>
        <Footer getFullYear={getFullYear} getFooterCopy={getFooterCopy}/>
      </footer>
    </>
  );
}

export default App;