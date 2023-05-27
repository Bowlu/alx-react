import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';
import AppContext from '../App/AppContext';
import { user, logOut } from '../App/AppContext';
import { mount } from 'enzyme';

describe('<Header />', () => {
  it('checks if it renders', () => {
    const check = shallow(<Footer />);
    expect(check).toBeDefined();
  });
  it('checks for copyright render', () => {
    const check = shallow(<Footer />);
    expect(check.find('p')).equals(Copyright);
  });
  it('checks link not display when user is logged out', () => {
    const check = mount(<AppContext.Provider value={{ user, logOut }}>
      <Footer />
    </AppContext.Provider>);
    expect(check.find('a').exists()).not.toBeTruthy();
  });
  it('check link display when the user is logged in', () => {
    const newUser = {
      email: 'tunrayo@gmail.com',
      isLoggedIn: true,
      password: '456678'
    };
    const check = mount(<AppContext.Provider value={{ user: newUser, logOut }}>
      <Footer />
    </AppContext.Provider>);
    expect(check.find('a').exists()).toBeTruthy();
  });

});