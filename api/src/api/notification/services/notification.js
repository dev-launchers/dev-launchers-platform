'use strict';

/**
 * notification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::notification.notification');
