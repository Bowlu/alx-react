import React from 'react';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import { user, logOut } from './AppContext';
import AppContext  from './AppContext';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.handleDownKey = this.handleDownKey.bind(this);
    this.listcourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];

    this.listNotifications = [
      {id: 1, value: 'New course available', type: 'default'},
      {id: 2, value: 'New resume available', type: 'urgent'},
      {id: 3, html: {__html: getLatestNotification()}, type: 'urgent'}
    ];

    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: listNotifications
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {email, password, isLoggedIn:true }
    });
  }

  logOut() {
    this.setState({
      user: user
    });
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(notification => notification.id !== id)
    })
  }

  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    });
  }

  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    });
  }

  handleDownKey(out) {
    out.preventDefault();

    if (out.ctrlKey && out.key === "h") {
      alert("Logging you out");
      this.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleDownKey);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.handleDownKey);
  }

  render () {
    const { displayDrawer, user, logOut, listNotifications } = this.state;
    const value = { user, logOut };
    return (
      <AppContext.Provider value={value}>

        <React.Fragment>
          <Notification listNotifications={this.listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead= {this.markNotificationAsRead} />
          <div className={css(bodyStyle.App)}>
            <Header />
            {this.props.isLoggedIn ?
            <BodySectionWithMarginBottom title='Course list'><CourseList listCourses={this.listCourses}/></BodySectionWithMarginBottom>
            :
            <BodySectionWithMarginBottom title='Log in to continue'>Login</BodySectionWithMarginBottom>  
          }
          <BodySection title='News from the School'>
            <p>Random Text</p>
            </BodySection>
            <div className={css(footerStyle.footer)}>
              < Footer />
            </div>
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

const bodyStyle = StyleSheet.create({
  App: {
    position: 'relative',
    minHeight: '100vh'
  }
});

const footerStyle = StyleSheet.create({
  footer: {
    position: 'absolute',
    width: '100%',
    bottom: '0',
    borderTop: '2px solid #da4257',
    padding: '18px 0',
    textAlign: 'center'
  }
});


export default App;
