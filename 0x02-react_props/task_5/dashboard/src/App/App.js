import './App.css';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

App.defaultProps = {
  isLoggedIn: false
};

App.Props = {
  isLoggedIn: PropTypes.bool
};

function App({ isLoggedIn }) {
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

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
}

export default App;
