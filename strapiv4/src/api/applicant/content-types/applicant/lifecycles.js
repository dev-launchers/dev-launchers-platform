const { createModuleResolutionCache } = require("typescript");

module.exports = {

    async beforeCreate(event) {
    const project = event.params.data.project;
    const applicantProject = await strapi.db.query('api::project.project').findOne({
        where: {slug: project}
      });
    const projectID = applicantProject.id;
    event.params.data.project = projectID
  },

}