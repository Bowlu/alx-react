import React from 'react';
import Header from './Header';
import { shallow, mount } from 'enzyme';
import { user, logOut } from '../App/AppContext';

describe('<Header />', () => {
  it('checks if it renders', () => {
    const check = shallow(<Header />);
    expect(check).toBeDefined();
  });
  it('renders img tag', () => {
    const check = shallow(<Header />);
    expect(check.find('img')).toBeDefined();
  });
  it('renders h1 tag', () => {
    const check = shallow(<Header />);
    expect(check.find('h1')).toBeDefined();
  });
});

describe('Header component', () => {
  it('verify logoutSection is not created', () => {
    const check = mount(<Header />);
    expect(check.find('#logoutSection')).toHaveLength(0);
  });
  it('verify logoutSection is created', () => {
    const newUser = {
      email: 'tunrayo@gmail.com',
      isLoggedIn: true
    };
    const check = mount(<Header />, {
      value: { user: newUser, logOut }
    });
    expect(check.find('#logoutSection')).toHaveLength(1);
  });
  it('verify click on the link', () => {
    const spy = jest.fn();
    const newUser = {
      email: 'tunrayo@gmail.com',
      isLoggedIn: true
    };
    const check = mount(<Header />, {
      value: { user: newUser, logOut: spy }
    });
    expect(check.find('#logoutSection').exists()).toBeTruthy();
    check.find('#logoutSection span').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});