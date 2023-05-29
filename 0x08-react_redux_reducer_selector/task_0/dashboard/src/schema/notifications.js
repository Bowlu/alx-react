import notificationData from '../../../../notifications.json'; 
import { normalize, schema } from 'normalizr';

export default function getAllNotificationsByUser(userId) {
 const notificationUsers = [];
 const notifications = normalizedData.entities.notifications;
 const messages = normalizedData.entities.messages;

 for (const id in notifications) {
  if (notifications[id].author === userId) {
    notificationUsers.push(messages[notifications[id].context]);
  }
 }
 return notificationUsers;
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