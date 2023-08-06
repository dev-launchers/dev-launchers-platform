const PROD = {
  envType: "PROD",
  API_URL: "http://localhost:1337",     //<== change to http://localhost:1337 if you wanna test with the strapi aplication running. when you run the strapi, make sure that all permissions are checked on setting / role / public / USERS-Permissions, otherwise you will not be not have the permissions,  you may also have to set data on projects and leaders on strapi in order to be able to render the page properly.
  STRAPI_URL: "http://localhost:1337",   //<== change to http://localhost:1337
  GOOGLE_AUTH_URL: "https://api.devlaunchers.org/connect/google",
  DISCORD_AUTH_URL:
    "https://discord.com/api/oauth2/authorize?client_id=709889509864636496&redirect_uri=https%3A%2F%2Fapi.devlaunchers.org%2Fusers%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify",
};

const STAGING = {
  envType: "STAGING",
  API_URL: "https://api-staging.devlaunchers.org",
  STRAPI_URL: "https://api-staging.devlaunchers.org",
  GOOGLE_AUTH_URL: "https://api-staging.devlaunchers.org/connect/google",
  DISCORD_AUTH_URL:
    "https://discord.com/api/oauth2/authorize?client_id=815294711983112194&redirect_uri=https%3A%2F%2Fapi-staging.devlaunchers.org%2Fusers%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify",
};

export const env = () => {
  if (typeof window !== "undefined") {
    const currentUrl = window.location.href;
    if (
      currentUrl.indexOf("staging") !== -1 ||
      currentUrl.indexOf("localhost") !== -1
    ) {
      return STAGING;
    }
  }
  // Changed to always use production api
  return PROD;
};
