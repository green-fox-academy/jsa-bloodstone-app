import * as Permissions from 'expo-permissions';
import { SERVER_URL } from 'react-native-dotenv';
import { Alert } from 'react-native';

const PUSH_ENDPOINT = `http://${SERVER_URL}/notification/push`;

async function grantPermission() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS,
  );
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  return finalStatus === 'granted';
}

export default async function sendNotification({
  title, body, data = {}, token = '',
}) {
  await grantPermission();
  const content = {
    token, title, body, data,
  };

  return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(content),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('Unexpected status code when sending notification.');
    })
    .catch((error) => Alert.alert('Error', error.message));
}
