'use strict';

/**
 * save-idea service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::save-idea.save-idea');
