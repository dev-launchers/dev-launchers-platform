'use strict';

/**
 *  github-repo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::github-repo.github-repo');
