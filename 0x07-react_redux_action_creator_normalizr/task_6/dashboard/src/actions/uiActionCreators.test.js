import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('testing login, logout, displayNotification and hideNotification', () => {
  it('tests login', () => {
    const email = 'awoyemi@gmail.com';
    const password = 'yemi';
    
    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: 'awoyemi@gmail.com', password: 'yemi' }
    });
  });

  it('tests logout', () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it('tests displayNotificationDrawer', () => {
    expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('tests hideNotificationDrawer', () => {
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
})