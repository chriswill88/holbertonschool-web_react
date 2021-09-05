import React from 'react';


export default function Login() {
  return (
    <>
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
    </>
  )
}