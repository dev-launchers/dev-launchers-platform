'use strict';

/**
 * team-membership service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::team-membership.team-membership');
