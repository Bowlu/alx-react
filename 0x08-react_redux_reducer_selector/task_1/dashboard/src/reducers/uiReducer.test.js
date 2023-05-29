import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { uiReducer, initialState } from './uiReducer';

describe('verifying uiReducer states', () => {
  it('verifies if the state return equals the initial state when no action is passed', () => {
    const res = uiReducer();
    expect(res).toStrictEqual(initialState);
  });

  it('verifies if the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    const res = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(res).toStrictEqual(initialState);
  });

  it('verifies if the uiReducer function changes correctly when an action is passed', () => {
    const res = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(res).toStrictEqual({ ...initialState, isNotificationDrawerVisible: true });
  });
});