'use strict';

/**
 *  google-meet controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::google-meet.google-meet', ({strapi}) => ({
    userFacingMeets(internalMeet) {
        console.log(internalMeet);
        return {
            name: internalMeet.name,
            meetingCode: internalMeet.meetingCode,
        };
    }
}));
