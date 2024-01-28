'use strict';

/**
 * time-capsule router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::time-capsule.time-capsule');
