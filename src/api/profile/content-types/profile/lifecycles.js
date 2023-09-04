module.exports = {

    async afterUpdate(event) {
      const profileId = event.params.data.id
      const currentImageUrl = event.params.data.profilePictureUrl
      const uploadedImageUrl = event.result.profilePicture.url

      // Confirm that a new image has been uploaded, then update the profilePictureUrl field
      if (uploadedImageUrl){
        if (currentImageUrl != uploadedImageUrl){
          await strapi.entityService.update('api::profile.profile', profileId, {
            data: {
              profilePictureUrl: uploadedImageUrl,
            },
            populate: "profilePicture"
          });
        }
      }    
    },
    
}