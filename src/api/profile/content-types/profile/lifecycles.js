module.exports = {

    async afterUpdate(event) {
      const profileId = event.params.data.id
      const currentImageUrl = event.params.data.profilePictureUrl

      // Check if profilePicture is available
      if (!event.result.profilePicture){
        return; 
      }

      const uploadedImageUrl = event.result.profilePicture.url

      // Confirm that a new image has been uploaded, then update the profilePictureUrl field
      if (uploadedImageUrl && currentImageUrl !== uploadedImageUrl){
          await strapi.entityService.update('api::profile.profile', profileId, {
            data: {
              profilePictureUrl: uploadedImageUrl,
            },
            populate: "profilePicture"
          });
        }
      },    
    }