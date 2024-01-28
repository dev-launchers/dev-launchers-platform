'use strict';

const NodeCache = require('node-cache');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const randomUsersCache = new NodeCache({ stdTTL: 60 });

module.exports = {
  async recommend(ctx) {
    const numRecommendations = 6;
    
    let users = randomUsersCache.get('randomUsers');

    // check if cache already has random users
    if (users == undefined) {
      const userCount = await strapi.entityService.count(
        'plugin::users-permissions.user'
      );

      // gets 100 random user ids
      const randomUserIds = Array(100)
        .fill()
        .map(() => Math.floor(Math.random() * userCount) + 1);

      users = await strapi.entityService.findMany(
        'plugin::users-permissions.user',
        {
          filters: {
            id: {$in: randomUserIds},
          },
          populate: 'interests',
        }
      );

      randomUsersCache.set('randomUsers', users);
    }

    const currentUser = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      ctx.state.user.id,
      { populate: 'interests' }
    );

    const currentUserInterests = new Set();

    for (const interest of currentUser.interests) {
      currentUserInterests.add(interest.id);
    }

    // keeps track of the similarity score of each user
    const userScores = new Map();

    for (const user of users) {
      if (user != null) {
        let numMatches = 0;

        for (const interest of user.interests) {
          if (currentUserInterests.has(interest.id)) {
            numMatches++;
          }
        }

        userScores.set(user.id, numMatches);
      }
    }

    // sort greatest to least based on similarity score
    users.sort((a, b) => userScores.get(b.id) - userScores.get(a.id));
    users = users.slice(0, numRecommendations);

    const topScores = [];

    for (const user of users) {
      topScores.push(userScores.get(user.id));
    }

    return { users: users, scores: topScores };
  },
};
