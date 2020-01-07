const { Router } = require('express');
const { Expo } = require('expo-server-sdk');
const createError = require('http-errors');

const router = Router();
const expo = new Expo();

async function requestNotification(req, res, next) {
  const {
    token, title, body, data,
  } = req.body;
  const messages = [];

  try {
    if (!Expo.isExpoPushToken(token)) {
      throw createError(400, `Push token ${token} is not a valid Expo push token`);
    }

    messages.push({
      sound: 'default',
      to: token,
      title,
      body,
      data,
    });

    const chunks = expo.chunkPushNotifications(messages);
    const tickets = [];

    for (let i = 0; i < chunks.length; i += 1) {
      const ticketChunk = expo.sendPushNotificationsAsync(chunks[i]);
      tickets.push(ticketChunk);
    }
    const [resolvedTickets] = await Promise.all(tickets);
    res.send(resolvedTickets);
  } catch (error) {
    next(error);
  }
}

router.post('/push', requestNotification);

module.exports = router;
