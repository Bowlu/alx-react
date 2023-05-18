import App from './App';
import { shallow, mount } from 'enzyme';

describe('<App />', () => {
  it('checks if it renders', () => {
    const check = shallow(<App />);
    expect(check).toBeDefined();
  });
  it('renders Notification Component', () => {
    const check = shallow(<App />);
    expect(check.find('Notification')).to.have.lengthOf(1);
  });
  it('renders Header component', () => {
    const check = shallow(<App />);
    expect(check.find('Header')).to.have.lengthOf(1);
  });
  it('renders Login component', () => {
    const check = shallow(<App />);
    expect(check.find('Login')).to.have.lengthOf(1);
  });
  it('renders Footer component', () => {
    const check = shallow(<App />);
    expect(check.find('Footer')).to.have.lengthOf(1);
  });
});

describe('isLoggedIn test', () => {
  it('isLoggedIn test', () => {
    const check = shallow(<App isLoggedIn={true}/>);
    expect(check).toBeDefined();
  });
  it('checks if Login exists', () => {
    const check = shallow(<App isLoggedIn={true}/>);
    expect(check.find('Login')).to.have.lengthOf(0);
  });
  it('checks if CourseList exists', () => {
    const check = shallow(<App isLoggedIn={true}/>);
    expect(check.find('CourseList').exists());
  });
});

describe('test for keys', () => {
  it('displays logging you out', () => {
    const check = mount(<App />);
    expect(alert).toBeCalledWith('Logging you out');
    expect(logout).toBeCalled();
  });
});

describe('checks for default displayDrawer', () => {
  it('displays default value', () => {
    const check = mount(<App />);
    expect(check.state('displayDrawer')).toBe(false);
  });

  it('shows the state of handleDisplayDrawer', () => {
    const check = mount(<App />);
    check.instance().handleDisplayDrawer();
    expect(check.state('displayDrawer')).toBe(true);
  });

  it('shows the state of handleHideDrawer', () => {
    const check = mount(<App />);
    check.instance().handleHideDrawer();
    expect(check.state('displayDrawer')).toBe(false);
  });
  it('verify updated state', () => {
    const check = mount(<AppContext.Provider value={{ user, logOut }}>
      <App />
    </AppContext.Provider>);
    check.instance().logOut();
    expect(check.state().user).toEqual(user);
  });
  it('verify logIn function update', () => {
    const newUser ={
      email: 'tunrayo@gmail.com',
      isLoggedIn: true,
      password: '456678'
    };
    const check = mount(<AppContext.Provider value={{ user, logOut }}>
      <App />
    </AppContext.Provider>);
    check.instance().logIn('tunrayo@gmail.com', '456678');
    expect(check.state().user).toEqual(newUser);
  });
  it('verify logOut function update', () => {
    const check = mount(<AppContext.Provider value={{ user, logOut }}>
      <App />
    </AppContext.Provider>);
    check.instance().logIn('tunrayo@gmail.com', '456678');
    check.instance().logOut();
    expect(check.state().user).toEqual(user);
  });
  it('check markNotificationAsRead', () => {
    const info = [
      { id: 1, type: 'default', value: 'New course available', },
      { id: 2, type: 'urgent', value: 'New resume available', }
    ];
    const check = mount(<AppContext.Provider value={{ user, logOut }}>
      <App />
    </AppContext.Provider>);
    check.instance().markNotificationAsRead(3);
    expect(check.state().listNotifications).toEqual(notification);
  });
});