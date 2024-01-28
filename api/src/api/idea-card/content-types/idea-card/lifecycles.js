module.exports = {

  beforeCreate(event) {
      // Set author and ideaOwner to the user sending the request
      const ctx = strapi.requestContext.get();
      event.params.data.author = ctx.state.user;
      event.params.data.ideaOwner = ctx.state.user;
      console.log("create idea card ctx", ctx)
  },

  async afterCreate(event) {
    console.log(event.result)

    const { id: id, ideaName: ideaName, createdAt: timeCreated } = event.result;
    
    await strapi.entityService.create('api::notification.notification', {
      data: {
        Title:"A new idea has been created",
        Content: "You created idea " + ideaName,
        Collection: "IdeaCard",
        ObjectID: id,
        TimeCreated: timeCreated,
        Read: false
      },
    });
  }

}


