'use strict';

/**
 * github-repo router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::github-repo.github-repo');
