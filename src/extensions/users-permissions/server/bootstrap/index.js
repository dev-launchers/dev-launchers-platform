const getCustomGrantConfig = require('./grant-config');
const _ = require('lodash');
const urljoin = require('url-join');

// This function is mostly copied from node_modules/@strapi/plugin-users-permissions/server/bootstrap/index.js
// The difference is if a provider was in currentGrantConfig but not in getCustomGrantConfig,
// it keeps currentGrantConfig
const overrideGrant = async (pluginStore) => {
    const apiPrefix = strapi.config.get('api.rest.prefix');
    const baseURL = urljoin(strapi.config.server.url, apiPrefix, 'auth');
    console.log("plugin store", pluginStore)

    const customGrantConfig = getCustomGrantConfig(baseURL);

    const currentGrantConfig = (await pluginStore.get({ key: 'grant' })) || {};
    // store grant auth config to db
    // when plugin_users-permissions_grant is not existed in db
    // or we have added/deleted provider here.
    if (!currentGrantConfig || !_.isEqual(_.keys(currentGrantConfig), _.keys(customGrantConfig))) {
        // merge with the previous provider config.
        _.keys(customGrantConfig).forEach((key) => {
            if (key in currentGrantConfig) {
                currentGrantConfig[key] = _.merge(customGrantConfig[key], currentGrantConfig[key]);
            }
        });
        await pluginStore.set({ key: 'grant', value: currentGrantConfig });
    }
};

module.exports = async ({ strapi }) => {
    const pluginStore = strapi.store({ type: 'plugin', name: 'users-permissions' });

    await overrideGrant(pluginStore);
}