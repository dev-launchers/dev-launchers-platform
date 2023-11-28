module.exports = {
<<<<<<< HEAD
    beforeCreate(event) {
        // Set author and ideaOwner to the user sending the request
        const ctx = strapi.requestContext.get();
        event.params.data.author = ctx.state.user;
        event.params.data.ideaOwner = ctx.state.user;
        console.log("create idea card ctx", ctx)
    },
};
=======

    async afterCreate(event) {

        const ideaCard = event.result.id
        const ideaName = event.result.ideaName
        const timeCreated = event.result.createdAt

        await strapi.entityService.create('api::notification.notification', {
            data: {
              Title:"A new idea has been created",
              Content: "You created idea " + ideaName,
              Tag: "New Idea",
              idea_card: ideaCard,
              TimeCreated: timeCreated,
              Read: false,
            },
        });
        
    }
      

}
>>>>>>> 3d3cfb7... feat(oriyomi): Create the notification feature
