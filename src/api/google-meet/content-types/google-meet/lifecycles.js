'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async afterFindOne(ctx) {
    const meet = ctx.result
    const entity = userFacingMeets(meet);
    return sanitizeEntity(entity, { model: strapi.getModel('meeting') });
  }
};

function userFacingMeets(internalMeet) {
  return {
      name: internalMeet.name,
      meetingCode: internalMeet.meetingCode,
  };
}
