import React from 'react';
import BodySection from './BodySection';
import { shallow } from 'enzyme';

describe('BodySection component test', () => {
  it('check that the component is rendered correctly', () => {
    const check  = shallow(<BodySection />);
    expect(check.find('h2').text()).toEqual('test title');
    expect(check.find('p').text()).toEqual('test children node');
    expect(check.containsAllMatchingElements([h2, p])).toEqual(true);
  });
});