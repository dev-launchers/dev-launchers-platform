'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({ strapi }) => ({
    async findOne(ctx) {
        const slug = ctx.request.params.id;
        const entity = await strapi.db.query('api::project.project').findOne({
            where: { slug },
            populate: ['team.leaders.leader.profile', 'team.members.member.profile', 'heroImage', 'images', 'interests', 'subProjects', 'opportunities']
        });

        if (entity?.team) {
            entity.team.leaders = entity.team.leaders.map((leader) => ({
                id: leader.leader?.id,
                username: leader.leader?.username,
                profile: userProfile(leader.leader),
                email: leader.leader?.email,
                role: leader.role,
            }));

            entity.team.members = entity.team.members.map((member) => ({
                id: member.member?.id,
                username: member.member?.username,
                profile: userProfile(member.member),
                role: member.role,
            }));
        }

        const sanitizedResults = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedResults);
    },
}));

// don't return everything from profile
function userProfile(user) {
    return {
        profilePictureUrl: user?.profile?.profilePictureUrl,
        displayName: user?.profile?.displayName,
    }
}