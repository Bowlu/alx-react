import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  it('checks if it renders', () => {
    const check = shallow(<Footer />);
    expect(check).toBeDefined();
  });
  it('checks for copyright render', () => {
    const check = shallow(<Footer />);
    expect(check.find('p')).equals(Copyright);
  });
});