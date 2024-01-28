'use strict';

/**
 * newsletter service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newsletter.newsletter');
