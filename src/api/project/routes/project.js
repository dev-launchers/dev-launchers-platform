
'use strict';

//project router.

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    "routes": [
        {
            method: "GET",
            path: "/projects",
            handler: "project.find",
            config: {
              "policies": []
            }
        },
        {
            method: "GET",
            path: "/projects/:slug",
            handler: "project.findOne",
            config: {
                "policies": []
            }
        }
    ]
}

