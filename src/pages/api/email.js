//require('dotenv').config();
import 'dotenv/config';
import Mailgun from 'mailgun-js';
import { env } from '../../../next.config';

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  let API_KEY = process.env.API_KEY;
  let DOMAIN = process.env.DOMAIN;

  console.log(API_KEY, DOMAIN);

  const mailgun = Mailgun({
    apiKey: API_KEY,
    domain: DOMAIN,
  });

  function getMessage() {
    //const body = 'This is a test email using Mailgun from Node.js';
    return {
      to: 'robin.bergstrand@gmail.com',
      from: body.email,
      subject: body.subject,
      text: body.name,
      html: `<strong>${body.name}</strong><br/>${body.message}`,
    };
  }

  try {
    await mailgun.messages().send(getMessage(), function (error, body) {
      if (error) console.log(error);
      else console.log(body);
    });
  } catch (error) {
    console.error('Error sending test email');
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }

  res.status(200).send('Ok');
}
