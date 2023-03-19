'use strict';

/**
 * github-repo service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::github-repo.github-repo');
