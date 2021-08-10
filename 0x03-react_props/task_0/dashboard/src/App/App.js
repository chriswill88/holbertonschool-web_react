import React from 'react';
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import { getFullYear, getFooterCopy } from '../utils/utils';


function App({ logo, x }) {
  return (
    <>
      <Notifications x={x}/>
      <div className="App" >
        <Header logo={logo}/>
        <hr />
        <body className = 'App-body' >
          <Login />
        </body>
        <footer className = 'App-footer'>
          <Footer getFullYear={getFullYear} getFooterCopy={getFooterCopy}/>
        </footer>
      </div>
    </>
  );
}

export default App;