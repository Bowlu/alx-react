import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsRead, setNotificationFilter } from "./notificationActionCreators";

describe('test all notification action creators', () => {
  it('test markAsRead action', () => {
    expect(markAsRead(1)).toEqual({
      type: MARK_AS_READ,
      index: 1
    });
  });

  it('test setNotificationFilter action', () => {
    expect(setNotificationFilter(NotificationTypeFilters['DEFAULT'])).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT"
    });
  });
});