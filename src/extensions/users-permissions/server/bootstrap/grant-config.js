'use strict';

// The provider to patch on top of the default providers from the user-permissions plugin
// defined in src/extensions/users-permissions/server/bootstrap/grant-config.js
module.exports = (baseURL) => ({
    google: {
        enabled: false,
        icon: 'google',
        key: '',
        secret: '',
        callback: `${baseURL}/google/callback`,
        scope: ['email', 'profile'], // added profile scope
    },
});
