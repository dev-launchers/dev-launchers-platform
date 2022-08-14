'use strict';

/**
 *  applicant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const isNotEmpty = (team) => {
  if((team) && (!(team.length === 0))) {
    return true;
  }
  return false;
};

module.exports = createCoreController('api::applicant.applicant', ({ strapi }) => ({             
    lifecycles: {
      async afterCreate(result, params) {
          console.log(result);
          const project = result.data.project;
          const applicantProject = await strapi.db.query('api::project.project').findOne({
            where: {slug: project}});
          console.log(applicantProject);
      },
    },
    async create(ctx){ 
        const {
          email,
          name,
          age,
          role,
          zip,
          experience,
          commitment,
          accepted,
          reason,
          createdAt,
          updatedAt,
          publishedAt,
          level,
          project
        } = ctx.request.body.data;
        
        console.log(ctx.request.body.data);
        console.log(publishedAt);

        const requestBody=ctx.request.body.data;
        console.log(">>>>> ctx.params", ctx.params);
        console.log("query", ctx.request.query);
        console.log('before sent mail 2');
        console.log(ctx.request.body);
        console.log("name",requestBody.name);
        console.log('good');
        console.log(project); 

        // console.log(project.data.slug);
        console.log('good2');

        const applicantProject = await strapi.db.query('api::project.project').findOne({
          where: {id: project}, populate: {team: {populate: {leaders: {populate: {email: true}}}}}});
        console.log(applicantProject.team.leaders);

        const entry = await strapi.entityService.findOne('api::project.project', 1, {
          team: {leaders: {populate: "*"}}
        });
        console.log(entry);

        const user1=await strapi.entityService.findOne('plugin::users-permissions.user', 1, {populate: "*"});
        console.log(user1);
        const application = {
          email,
          name,
          age,
          role,
          zip,
          experience,
          commitment,
          accepted,
          reason,
          publishedAt,
          updatedAt,
          createdAt,
          project: applicantProject ? applicantProject : null,
          level
        };
        console.log(application);
        // const entity = await strapi.service('api::applicant.applicant').create(application);  

        // console.log(entity);
        if (applicantProject){
          const team = applicantProject.team;
          console.log(team);
          // const team_db = await strapi.db.query('components_people_people').findOne({where: {id: team.id}});
          // console.log(team_db);
          if(isNotEmpty(team.leaders)){
            // lets leaders join google group
            team.leaders.forEach(async (leader) => {
              try {
                console.log(leader);
                const user=await strapi.entityService.findOne('plugin::users-permissions.user', leader.id, {populate: "*"}); 
                const email = user.email ? user.email: null;
                console.log('leader email')
                console.log(email);
                // Send an email to project lead.
                await strapi.service('api::sendmail.sendmail').send('email@gmail.com',email, 'New applicant notificaton', `Hi Leaders, ${application.name} joined the project of "${applicantProject.title}".`);
                
              } catch(err) {
                console.error('error: can not notify the project leader.', err);
              }
            });
          }
        }

        // return sanitizeEntity(entity, { model: strapi.models.applicant});
        // const sanitizeEntity = await this.sanitizeOutput(entity,ctx);
        // return this.transformResponse(sanitizeEntity);
    },  
}));
