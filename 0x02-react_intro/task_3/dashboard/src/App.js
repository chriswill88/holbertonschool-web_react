import React from 'react';
import { getFullYear, getFooterCopy } from './utils';


function App({ logo }) {
  return ( 
    <div className="App" >
      <header className = "App-header" >
        <img src = { logo } className = "App-logo" alt = "logo" />
        <h1> School dashboard</h1>
      </header >
      <hr />

      <body className = 'App-body' >
        <p> Login to access the full dashboard </p>
        <form>
          <label onClick={() => {
            document.getElementById('email').select();
        }}>
            Email: 
            <input type="text" name="email" id='email'/>
          </label>
          <label onClick={() => {
            document.getElementById('pass').select();
          }}>
            Password:
            <input type="password" name="password" id='pass'/>
          </label>
          <button>OK</button>
        </form>
      </body>

      <footer className = 'App-footer'>
        <hr />
        <p> Copyright {getFullYear()} - {getFooterCopy(true)} </p>
      </footer> 
    </div>
  );
}

export default App;