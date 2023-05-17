import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

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