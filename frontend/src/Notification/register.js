import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { SERVER_URL } from 'react-native-dotenv';

const PUSH_ENDPOINT = `http://${SERVER_URL}/users/push-token`;

export default async function registerForPushNotificationsAsync(title, body, data) {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS,
  );
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync();

  fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token, title, body, data,
    }),
  });
}
