import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('renders without crashing', () => {
  it('rendering', () => {
    const check = shallow(<NotificationItem />);
    StyleSheetTestUtils.suppressStyleInjection();
    expect(check).toBeDefined();
  });
  it('renders correct dummy type', () => {
    const check = shallow(<Notifications type='default' value='test' />);
    StyleSheetTestUtils.suppressStyleInjection();
    expect(check.find('li').text()).toBe('test');
    expect(check.find('li').prop('data-notification-type')).toBe('default');
  });
  it('renders correct html prop', () => {
    const check = shallow(<Notifications html='<u>test</u>' />);
    StyleSheetTestUtils.suppressStyleInjection();
    expect(check.find('li').html()).toBe('<li><u>test</u></li>');
  });
});