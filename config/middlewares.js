// all Devlaunchers internal projects domains
const DevLaunchersSubdomains = [
  'https://ideaspace.devlaunchers.org',
  'https://ideaspace1.devlaunchers.org',
  'https://ideaspace2.devlaunchers.org',
  'https://projects.devlaunchers.org',
  'https://projects1.devlaunchers.org',
  'https://projects2.devlaunchers.org',
  'https://recruitment.devlaunchers.org',
  'https://recruitment1.devlaunchers.org',
  'https://recruitment2.devlaunchers.org',
  'https://website.devlaunchers.org',
  'https://website1.devlaunchers.org',
  'https://website2.devlaunchers.org',
  'https://user-profile.devlaunchers.org',
  'https://user-profile1.devlaunchers.org',
  'https://user-profile2.devlaunchers.org',
];

module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://devlaunchers.org', 'http://localhost:3000', ...DevLaunchersSubdomains],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'plugin::users-permissions.jwt',
];
