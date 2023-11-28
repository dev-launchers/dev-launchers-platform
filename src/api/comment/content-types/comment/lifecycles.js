module.exports = {

    async afterCreate(event) {

        const ideaCard = event.result.idea_card
        const ideaName = event.result.idea_card.ideaName
        const commentAuthor = event.result.author
        const commentText = event.result.text
        const timeCreated = event.result.createdAt

        await strapi.entityService.create('api::notification.notification', {
            data: {
              Title: commentAuthor + " commented on " + ideaName,
              Content: commentText,
              Tag: "New Comment",
              idea_card: ideaCard.id,
              TimeCreated: timeCreated,
              Read: false,
            },
        });
    }

}