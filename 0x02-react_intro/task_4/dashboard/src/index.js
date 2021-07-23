import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications'

import './App.css';
import './Notifications.css';

import logo from './logo.jpg';
import x from './close-icon.jpg';



ReactDOM.render(
  <React.StrictMode>
    <div className='root-notifications'>
      <Notifications x={x}/>
    </div>
    <App logo={ logo }/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
