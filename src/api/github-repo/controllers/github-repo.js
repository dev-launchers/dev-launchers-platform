'use strict';

/**
 *  github-repo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::github-repo.github-repo' , ({ strapi }) => ({
    async listCodeFreq(ctx) {
      const { user, repo } = ctx.params;
      let freq = await strapi.services['github'].repoCodeFreq(user, repo);
      const entity = {
        url: strapi.services['github'].repoURL(user, repo),
        changes: freq,
      };
      return sanitizeEntity(entity, { model: strapi.models.repo });
    },
    async listIssues(ctx) {
      const { user, repo } = ctx.params;
      let issues = await strapi.services['github'].repoIssues(user, repo);
      const entity = {
        url: strapi.services['github'].repoURL(user, repo),
        issues: issues,
      };
      return sanitizeEntity(entity, { model: strapi.models.repo });
    },
    async listContributors(ctx) {
      const { user, repo } = ctx.params;
      let contributors = await strapi.services['github'].repoContributors(user, repo);
      const entity = {
        url: strapi.services['github'].repoURL(user, repo),
        contributors: contributors,
      };
      return sanitizeEntity(entity, { model: strapi.models.repo });
    }
}));
  