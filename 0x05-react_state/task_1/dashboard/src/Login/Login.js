import React from 'react';
import { StyleSheet, css } from 'aphrodite';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    };
  }

  handleLoginSubmit = (i) => {
    i.preventDefault();
    this.setState({ isLoggedIn: true});
  };

  handleChangeEmail = (c) => {
    this.setState({ email: c.target.value });
  };

  handleChangePassword = (p) => {
    this.setState({ password: p.target.value });
  };

  componentDidMount() {
    this.updateSubmitButton();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.email !== this.state.email || prevState.password !== this.state.password) {
      this.updateSubmitButton();
    }
  }

  updateSubmitButton() {
    const{ email, password } = this.state;
    const enableSubmit = email !== '' && password !== '';
    if (this.state.enableSubmit !== enableSubmit) {
      this.setState({ enableSubmit });
    }
  }
  render() {
    const { email, password, enableSubmit } = this.state;
    return (
      <React.Fragment>
        <div className={css(loginStyle.login)}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} className={css(loginStyle.input)} onChange={this.handleChangeEmail}></input>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={password} className={css(loginStyle.input)} onChange={this.handleChangePassword}></input>
            <input type="submit" value="OK" disabled={!enableSubmit}></input>
          </form>
        </div>
      </React.Fragment>
    )
  }
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