const PROD = {
  envType: "PROD",
  API_URL: "https://api.devlaunchers.com",
  STRAPI_URL: "https://cms-api.devlaunchers.com",
  GOOGLE_AUTH_URL: "https://cms-api.devlaunchers.com/connect/google",
  DISCORD_AUTH_URL:
    "https://discord.com/api/oauth2/authorize?client_id=709889509864636496&redirect_uri=https%3A%2F%2Fapi.devlaunchers.com%2Fusers%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify",
};

const STAGING = {
  envType: "STAGING",
  API_URL: "https://api.devlaunchers.com",
  STRAPI_URL: "https://cms-api-staging.devlaunchers.com",
  GOOGLE_AUTH_URL: "https://cms-api-staging.devlaunchers.com/connect/google",
  DISCORD_AUTH_URL:
    "https://discord.com/api/oauth2/authorize?client_id=815294711983112194&redirect_uri=https%3A%2F%2Fapi-staging.devlaunchers.com%2Fusers%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify",
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
  return PROD;
};
