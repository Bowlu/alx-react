import './App.css';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';

App.defaultProps = {
  isLoggedIn: false
};

App.Props = {
  isLoggedIn: PropTypes.bool
};

function App({ isLoggedIn }) {
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
