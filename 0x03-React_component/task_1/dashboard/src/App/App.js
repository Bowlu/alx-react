import './App.css';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import CourseList from '../CourseList/CourseList';

App.defaultProps = {
  isLoggedIn: false
};

App.Props = {
  isLoggedIn: PropTypes.bool
};

class App extends React.Component {
  static listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

  static listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];

  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.handleDownKey = this.handleDownKey.bind(this);
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
}
  return (
    <React.Fragment>
      <Notification />
      <div className="App">
        <Header />
        { isLoggedIn ? <CourseList/> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );


export default App;
