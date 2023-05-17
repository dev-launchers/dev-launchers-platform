'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({ strapi }) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;
        const entity = await strapi.db.query('api::project.project').findOne({
            where: { slug },
            populate: ['team.leaders.leader.profile', 'team.members.member.profile', 'heroImage', 'interests', 'subProjects', 'opportunities']
          });
    
        entity.team.leaders = entity.team.leaders.map((leader) => ({
          id: leader.leader.id,
          username: leader.leader.username,
          profile: leader.leader.profile,
          email: leader.leader.email,
          role: leader.role,
        }));
    
        entity.team.members = entity.team.members.map((member) => ({
          id: member.member.id,
          username: member.member.username,
          profile: member.member.profile,
          role: member.role,
        }));
        return entity;
    },

    
/*
    async recommendProjectToUsers(ctx) {
        try {
            if (!ctx.state){
                return ctx.send("You need to log in to recommend a project")
            }
            const userData = await strapi.entityService.findOne(
                'plugin::users-permissions.user',
                ctx.state.user.id,
                { populate: ['role', 'profile', 'interests'] }
              );
            const { interests } = userData;
        
            const projects = await strapi.db.query('api::project.project').findMany({
            populate: ['team.leaders.leader.profile', 'team.members.member.profile', 'heroImage', 'interests', 'subProjects', 'opportunities']
          });
            console.log("projects!!!!!!!!!")
            console.log(projects)
            const recommendedProjectSlugs = [];
            const recommendedProjects = [];

            const getProjectSlugs = (projects, userCategory) => {
                for(const project of projects){
                    for(const projectInterest of project.interests){
                        for(const projectCategories of projectInterest.categories){
                            if((projectCategories.category === userCategory.category) && (!(recommendedProjectSlugs.includes(project.slug)))){
                                recommendedProjectSlugs.push(project.slug);
                            }
                        }
                    }
                }
            };
           
            for(const interest of interests){
                for(const category of interest.categories){
                    getProjectSlugs(projects, category);
                }
            }
            console.log("Last for loop")
            
            // Using the project slugs, I get the project and add them to the recommendedProjects array

            for(const recommendedProjectSlug of recommendedProjectSlugs){
                const recommendedProject = await strapi.services.project.findOne({slug: recommendedProjectSlug});
                recommendedProjects.push(recommendedProject);
            }
            return ctx.send(recommendedProjects);

        } catch(err){
            console.error(err);
        }
    }
*/

}));