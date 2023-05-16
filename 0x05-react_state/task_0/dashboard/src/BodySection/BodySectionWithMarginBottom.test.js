import React from 'react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { shallow } from 'enzyme';

describe('BodySectionWithMarginBottom component test', () => {
  it('checks it the component renders correctly', () => {
    const check = shallow(<BodySectionWithMarginBottom />);
    expect(check.find('BodySection').exists()).toBe(true);
  });
  it('checks if the children are rendered', () => {
    const check = shallow(<BodySectionWithMarginBottom />);
    expect(check.find('BodySection').props().title).toBe('test title');
  });
});