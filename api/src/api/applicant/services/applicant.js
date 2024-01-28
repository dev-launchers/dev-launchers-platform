'use strict';

/**
 * applicant service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::applicant.applicant');
