'use strict';

/**
 * time-capsule service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::time-capsule.time-capsule');
