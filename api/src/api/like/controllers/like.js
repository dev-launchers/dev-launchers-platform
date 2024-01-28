'use strict';

/**
 *  like controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::like.like');
