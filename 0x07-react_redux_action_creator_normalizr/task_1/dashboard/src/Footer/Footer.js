import React from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import AppContext from '../App/AppContext';

function Footer() {
  return (
    <AppContext.Consumer>
      {
        (context) => {
          return (
            <footer className="App-footer">Copyright {getFullYear()} - {getFooterCopy(true)}
            <p> {context.user.isLoggedIn && <a href='#'>Contact us</a>}</p>
            </footer>
          )
        }
      }

    </AppContext.Consumer>
  ) 
}
export default Footer;