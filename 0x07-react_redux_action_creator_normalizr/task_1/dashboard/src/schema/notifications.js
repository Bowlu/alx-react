import notificationData from '../../../../notifications.json'; 
import { normalize, schema } from 'normalizr';

export default function getAllNotificationsByUser(userId) {
  return notificationData.filter((notification) => notification.author.id === userId).map((notification) => notification.context);
};

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {
  idAttribute: guid
});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

const normalizedData = normalize(notificationData, [notification]);

export { normalizedData };