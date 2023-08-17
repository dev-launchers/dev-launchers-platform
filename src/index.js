'use strict';

const bootstrapUserPermissions = require('./extensions/users-permissions/server/bootstrap')

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  async register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   * called right after the plugin has registered.
   */
  async bootstrap({ strapi }) {
    await bootstrapUserPermissions({ strapi });

    strapi.db.lifecycles.subscribe({
      models: ["plugin::users-permissions.user"],
      // afterCreate lifecycle to create a new team-membership entry when a new user is created
      async afterCreate({ result }) {
        const { projects } = result
        if (projects){
          for (const project of projects) {
            await strapi.service("api::team-membership.team-membership").create({
              data: {
                user: [result.id],
                project: [project.id],
                joinDate: new Date()
              }
            })
          }
        }
      },

      async beforeUpdate({ params }) {
        const joinProject = params.data.projects.connect;
        const leftProject = params.data.projects.disconnect;
        const userId = params.data.id;
        // Find and update the leaveDate field in team-membership collection if a user leaves a project
        if (leftProject.length > 0) {
          for (const projectObj of leftProject) {
            const projectMembership = await strapi.query("api::team-membership.team-membership").findOne({
              where: {
                user: userId,
                project: projectObj.id,
                leaveDate: null // Ensures it is the user's latest membership record for that project
              }
            });
            await strapi.query("api::team-membership.team-membership").update({
              where: {
                id: projectMembership.id
              },
              data: {
                leaveDate: new Date()
              }
            });
          }
        }
        // Create new team-membership entry if a user joins a new project
        if (joinProject.length > 0) {
          for (const projectObj of joinProject) {
            await strapi.service("api::team-membership.team-membership").create({
              data: {
                user: userId,
                project: projectObj.id,
                joinDate: new Date(),
                leaveDate: null
              }
            })
          }
        }
      }
    })
  }
}