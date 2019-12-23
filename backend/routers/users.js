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
    // console.error(`Push token ${token} is not a valid Expo push token`);
    return;
  }

  messages.push({
    to: token, sound: 'default', title, body, data,
  });

  const chunks = expo.chunkPushNotifications(messages);
  const tickets = [];

  for (let i = 0; i < chunks.length; i += 1) {
    try {
      const ticketChunk = expo.sendPushNotificationsAsync(chunks[i]);
      // console.log(ticketChunk);
      tickets.push(...ticketChunk);
    } catch (error) {
      next(error);
    }
  }
  await Promise.all(tickets);

  const receiptIds = [];
  for (let i = 0; i < tickets.length; i += 1) {
    if (tickets[i].id) {
      receiptIds.push(tickets[i].id);
    }
  }

  const receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);

  for (let i = 0; i < receiptIdChunks.length; i += 1) {
    try {
      expo.getPushNotificationReceiptsAsync(receiptIdChunks[i]);
      // .then((receipts) => {
      // error handling
      // for (let j = 0; j < receipts.length; j += 1) {
      //   if (receipts[j].status === 'error') {
      //     // console.error(`There was an error sending a notification: ${receipt.message}`);
      //     if (receipts[j].details && receipts[j].details.error) {
      //       // console.error(`The error code is ${receipt.details.error}`);
      //     }
      //   }
      // }
      // });
      // console.log(receipts);
    } catch (error) {
      next(error);
    }
  }
  res.sendStatus(200);
}

router.post('/push-token', requestNotification);

module.exports = router;
