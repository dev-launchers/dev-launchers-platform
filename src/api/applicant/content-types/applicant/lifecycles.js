const lodash = require('lodash');
const fetch = require('node-fetch');
const { createModuleResolutionCache } = require("typescript");
const { Webhook, MessageBuilder } = require('discord-webhook-node');

const frontend_url_sanitized = process.env.FRONTEND_URL.replace(/["']/g, "");

// use markdown block code to format this as JSON
const formatJSON = (jsonData) => {
  return "```JSON\n" + JSON.stringify(jsonData, null, 1) + "\n```";
};



module.exports = {

  async beforeCreate(event) {
    const appliedProject = event.params.data.project;

    // get the project associated with this applicant from the db
    // If the request comes from the admin UI, the payload will contain the project ID.
    // Otherwise the payload will contain the project slug.
    var project;
    if (appliedProject.slug) {
      project = await strapi.db.query('api::project.project').findOne({
        where: { slug: appliedProject.slug }
      });
    } else {
      project = await strapi.db.query('api::project.project').findOne({
        where: { id: appliedProject.connect[0].id }
      });
    }

    try {
      // insert slug and title into the applicant project obj
      event.model.attributes.project.slug = project.slug;
      event.model.attributes.project.title = project.title;
      event.model.attributes.project.discordWebhookUrl = project.discordWebhookUrl;
    }
    catch (e) {
      console.log(`couldn't find project ${e}`);
    }
  },

  async afterCreate(event) {
    if (event.model.attributes.project.slug == null) {
      // Didn't find project
      return
    }

    if (event.model.attributes.project.discordWebhookUrl == null) {
      // Didn't find discod webhook URL, not all projects have one
      return
    }

    // insert proj title and include only necessary info in message
    event.params.data.project = event.model.attributes.project.title;
    var { name, role, experience, commitment, project, level, skills } = event.params.data;
    var relevantInfo = {
      name: name, role: role, experience: experience, commitment: commitment, project: project, level: level, skills: skills
    }

    // create the discord message
    const newApplicantMsg = new MessageBuilder()
      .setTitle("New Applicant!")
      .setURL(`${frontend_url_sanitized}/projects/${event.model.attributes.project.slug}`)
      .setDescription(
        formatJSON(relevantInfo)
      );

    // create new Webhook
    const hook = new Webhook(
      event.model.attributes.project.discordWebhookUrl
    );

    hook.setUsername("New Applicant Notifier")
      .setAvatar('https://avatars.githubusercontent.com/u/53379976?s=200&v=4');
    hook.send(newApplicantMsg);
  },

}