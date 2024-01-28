module.exports = {

  async afterCreate(event) {
    console.log(event.result)

    const { id: id, idea_card: idea, author: commentAuthor, text: commentText, createdAt: timeCreated } = event.result;
    
    await strapi.entityService.create('api::notification.notification', {
      data: {
        Title: commentAuthor + " commented on " + idea.ideaName,
        Content: commentText,
        Collection: "Comment",
        ObjectID: id,
        TimeCreated: timeCreated,
        Read: false
      },
    });

  }

}

