'use strict';

/**
 *  github-repo controller
 */
const { sanitizeEntity } = require('@strapi/utils');

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::github-repo.github-repo' , ({ strapi }) => ({

    async listCodeFreq(ctx) {
      const { user, repo } = ctx.params;
      let freq = await strapi.service('api::github-repo.github-repo').repoCodeFreq(user, repo);
      const entity = {
        url: strapi.service('api::github-repo.github-repo').repoURL(user, repo),
        changes: freq,
      };
      return sanitizeEntity(entity, strapi.getModel('api::github-repo.github-repo'));
    },

    async listIssues(ctx) {
      const { user, repo } = ctx.params;
      let issues = await strapi.service('api::github-repo.github-repo').repoIssues(user, repo);
      const entity = {
        url: strapi.service('api::github-repo.github-repo').repoURL(user, repo),
        issues: issues,
      };
      return sanitizeEntity(entity, { model: strapi.getModel('api::github-repo.github-repo') });
    },

    async listContributors(ctx) {
      const { user, repo } = ctx.params;
      let contributors = await strapi.service('api::github-repo.github-repo').repoContributors(user, repo);
      const entity = {
        url: strapi.service('api::github-repo.github-repo').repoURL(user, repo),
        contributors: contributors,
      };
      return sanitizeEntity(entity, strapi.getModel('api::github-repo.github-repo'));
    }

}));
  
