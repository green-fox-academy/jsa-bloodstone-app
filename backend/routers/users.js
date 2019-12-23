const { Router } = require('express');
const { Expo } = require('expo-server-sdk');

const router = Router();
const expo = new Expo();

async function requestNotification(req, res, next) {
  const {
    token, title, body, data,
  } = req.body;

  const messages = [];

  if (!Expo.isExpoPushToken(token)) {
    return next(new Error(`Push token ${token} is not a valid Expo push token`));
  }

  messages.push({
    to: token, sound: 'default', title, body, data,
  });

  // push notification
  const chunks = expo.chunkPushNotifications(messages);
  const tickets = [];

  for (let i = 0; i < chunks.length; i += 1) {
    try {
      const ticketChunk = expo.sendPushNotificationsAsync(chunks[i]);
      tickets.push(ticketChunk);
    } catch (error) {
      next(error);
    }
  }
  // get resolved tickets
  const [resolvedTickets] = await Promise.all(tickets);
  return res.send(resolvedTickets);
}

router.post('/push-token', requestNotification);

module.exports = router;
