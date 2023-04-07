'use strict';

/**
 * github-repo router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

//module.exports = createCoreRouter('api::github-repo.github-repo');

module.exports = {
    "routes": [
      {
        method: "GET",
        path: "/github-repo/:user/:repo/code_freq",
        handler: "github-repo.listCodeFreq",
        config: {
            "policies": []
        }
      },
      {
        method: "GET",
        path: "/github-repo/:user/:repo/issues",
        handler: "github-repo.listIssues",
        config: {
            "policies": []
        }
      },
      {
        method: "GET",
        path: "/github-repo/:user/:repo/contributors",
        handler: "github-repo.listContributors",
        config: {
            "policies": []
        }
      }
    ]
}