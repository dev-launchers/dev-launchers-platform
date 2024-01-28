'use strict';

/**
 *  newsletter controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::newsletter.newsletter');
