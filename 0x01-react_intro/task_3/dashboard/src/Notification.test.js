import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Testing Notification Component', () => {
  it('renders without crashin', () => {
    const notification = shallow(<Notifications />);
    expect(notification).toBeDefined();
  });
  it('renders unordered list', () => {
    const notification = shallow(<Notifications />);
    expect(notification.find('ul')).toBeDefined();
  });
  it('renders three list items', () => {
    const notification = shallow(<Notifications />);
    expect(notification.find('li')).toHaveLength(3);
  });
  it('renders right text', () => {
    const notification = shallow(<Notifications />);
    expect(notification.find('p').text()).toBe('Here is the list of notifications');
  });
});