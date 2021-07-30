import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications'

import './App/App.css';
import './Notifications/Notifications.css';

import logo from '../assets/logo.jpg';
import x from '../assets/close-icon.jpg';



ReactDOM.render(
  <React.StrictMode>
    <div className='root-notifications'>
      <Notifications x={x}/>
    </div>
    <App logo={ logo }/>

  </React.StrictMode>,
  document.body
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
