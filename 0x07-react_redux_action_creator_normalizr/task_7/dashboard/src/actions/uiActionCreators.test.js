import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest, loginSuccess, loginFailure } from './uiActionCreators';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

describe('testing loginRequest', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('on success dispatch LOGIN and LOGIN_SUCCESS', async () => {
    const store = mockStore({});
    const mockResponse = { message: 'Success'};
    fetchMock.getOnce('https://localhost:8564/login-success.json', {
      status: 200,
      body: mockResponse,
    });
    await store.dispatch(loginRequest('awoyemi@gmail.com', 'awoyemi'));
    const actions = store.getActions();
    expect(actions).toEqual([expect.objectContaining({ type: 'LOGIN' }), loginSuccess()]);
  });

  it('on failure dispatch LOGIN and LOGIN_FAILURE', async () => {
    const store = mockStore({});
    fetchMock.getOnce('https://localhost:8564/login-success.json', {
      status: 500,
    });

    await store.dispatch(loginRequest('awoyemi@gmail.com', 'awoyemi'));

    const actions = store.getActions();
    expect(actions).toEqual([expect.objectContaining({ type: 'LOGIN'}), loginFailure()]);
  });
});