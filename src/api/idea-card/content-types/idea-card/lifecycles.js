module.exports = {
    beforeCreate(event) {
        // Set author and ideaOwner to the user sending the request
        const ctx = strapi.requestContext.get();
        event.params.data.author = ctx.state.user;
        event.params.data.ideaOwner = ctx.state.user;
    },
};