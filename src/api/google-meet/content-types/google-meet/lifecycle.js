'use strict';
const { sanitizeEntity } = require('@strapi/utils');

module.exports = {
  async afterFindOne(ctx) {
    const { name } = ctx.params;
    const meet = await strapi.services['google-meets'].findOne({ name: name });
    const entity = userFacingMeets(meet);
  
    return sanitizeEntity(entity, { model: strapi.models['google-meets'] });
  }
}; 