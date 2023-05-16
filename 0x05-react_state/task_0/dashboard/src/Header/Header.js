import logo from '../assets/Holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(headerStyle.header)}>
      <div className="App-header">
        <img src={logo} className={css(headerStyle.logo)} alt="Holberton logo" />
        <h1 className={css(headerStyle.h1)}>School dashboard</h1>
      </div>
    </div>
  )
}

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