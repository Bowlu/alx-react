import React from 'react';
import logo from '../assets/Holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { logOut, user } = this.context;
    return (
      <header>
        <div className={css(headerStyle.header)}>
          <div className="App-header">
            <img src={logo} className={css(headerStyle.logo)} alt="Holberton logo" />
            <h1 className={css(headerStyle.h1)}>School dashboard</h1>
          </div>
          {user.isLoggedIn && (
            <h2 id='logOutSection'>Welcome<b>{user.email}</b>
            <span onClick={logOut} className={css(headerStyle.logOutSpanSection)}>(logOut)</span></h2>
          )}
        </div>
      </header>
    );
  }
}

Header.contextType = AppContext;
const headerStyle = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    borderBottom: '2px solid #da4257'
  },
  logo: {
    width: '140px'
  },
  h1: {
    color: 'da4257',
    margin: 'auto auto auto 0'
  }
});

export default Header;