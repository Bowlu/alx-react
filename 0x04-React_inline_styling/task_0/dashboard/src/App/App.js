import React from 'react';
import './App.css';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

App.Props = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

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
    return (
      <React.Fragment>
        <Notification listNotifications={this.listNotifications} />
        <div className="App">
          <Header />
          {this.props.isLoggedIn ?
          <BodySectionWithMarginBottom title='Course list'><CourseList listCourses={this.listCourses}/></BodySectionWithMarginBottom>
          :
          <BodySectionWithMarginBottom title='Log in to continue'>Login</BodySectionWithMarginBottom>  
        }
        <BodySection title='News from the School'>
          <p>Random Text</p>
        </BodySection>
        <Footer />
        </div>
      </React.Fragment>
    );
  }
}


export default App;
