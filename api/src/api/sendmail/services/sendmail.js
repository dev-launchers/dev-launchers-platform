'use strict';

/**
 * sendmail service.
 */

const { createCoreService } = require('@strapi/strapi').factories;
const nodemailer = require('nodemailer');
// Create reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'email@gmail.com',
      pass: 'password',
    },
  });


module.exports = createCoreService('api::sendmail.sendmail', ({ strapi }) => ({
    send(to, subject, text) {
      // Setup e-mail data.
      const options = {
        from: 'email@gmail.com', 
        to,
        subject,
        text,
      };
  
      // Return a promise of the function that sends the email.
      return transporter.sendMail(options);
    },
  }));
