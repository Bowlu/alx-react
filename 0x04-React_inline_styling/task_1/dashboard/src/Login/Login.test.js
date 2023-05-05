import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

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