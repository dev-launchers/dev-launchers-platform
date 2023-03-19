'use strict';

/**
 * sendmail router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sendmail.sendmail');
