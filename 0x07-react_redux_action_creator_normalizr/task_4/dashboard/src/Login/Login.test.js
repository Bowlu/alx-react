import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

describe('<Login />', () => {
  it('checks if it renders', () => {
    const check = shallow(<Login />);
    expect(check).toBeDefined();
  });
  it('renders input tag', () => {
    const check = shallow(<Login />);
    expect(check.find('input')).to.have.lengthOf(2);
  });
  it('renders label tag', () => {
    const check = shallow(<Login />);
    expect(check.find('label')).to.have.lengthOf(2);
  });
});

describe('Login submit', () => {
  it('checks that submit button is disabled by default', () => {
    const check = mount(<App />);
    expect(check.state('enableSubmit')).toBe(false);
  });
  it('button enabled', () => {
    const check = mount(<App />);
    check.instance().handleChangeEmail();
    check.instance().handleChangePassword();
    expect(check.state('enableSubmit')).toBe(true);
  });
})