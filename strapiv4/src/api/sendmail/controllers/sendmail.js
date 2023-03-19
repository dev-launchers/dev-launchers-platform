'use strict';

/**
 *  sendmail controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sendmail.sendmail');
