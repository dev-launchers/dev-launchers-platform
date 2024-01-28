'use strict';

/**
 * notification router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::notification.notification');
