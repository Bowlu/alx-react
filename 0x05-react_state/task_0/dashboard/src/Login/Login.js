import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(loginStyle.login)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" className={css(loginStyle.input)}></input>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" className={css(loginStyle.input)}></input>
      <button>OK</button> 
    </div>
  )
}

const loginStyle = StyleSheet.create({
  login: {
    padding: '40px 26px',
      '@media (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column'
    }
  },
  input: {
    margin: '0 18px 0 9px'
  }
});

export default Login;