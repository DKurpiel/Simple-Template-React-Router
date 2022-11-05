import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className='login-box'>
      <label htmlFor="">Login: <input type="text" /></label>
      <label htmlFor="">Password: <input type="password" /></label>
      <button className='form-button'>Log in</button>
    </div>
  )
}

export default LoginPage