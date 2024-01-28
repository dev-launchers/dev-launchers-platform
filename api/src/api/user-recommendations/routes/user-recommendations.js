'use strict';

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/users/user-recommendations",
      handler: "user-recommendations.recommend"
    }
  ]
}