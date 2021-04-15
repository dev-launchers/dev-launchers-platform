// <START> THIS IS A DISGUSTING HACK TO EMULATE ENVIRONMENT VARIABLES UNTIL WE GET NEXT ENV STUFF WORKING
// Production values by default
let env = {
  GOOGLE_AUTH_URL: "https://api.devlaunchers.com/auth/google",
  DISCORD_AUTH_URL:
    "https://discord.com/api/oauth2/authorize?client_id=709889509864636496&redirect_uri=https%3A%2F%2Fapi.devlaunchers.com%2Fusers%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify"
};
if (typeof window !== "undefined") {
  const currentUrl = window.location.href;
  if (currentUrl.indexOf("staging") != -1) {
    // In staging
    env.GOOGLE_AUTH_URL = "https://api-staging.devlaunchers.com/auth/google";
    env.DISCORD_AUTH_URL =
      "https://discord.com/api/oauth2/authorize?client_id=815294711983112194&redirect_uri=https%3A%2F%2Fapi-staging.devlaunchers.com%2Fusers%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify";
  }
}
// <END> THIS IS A DISGUSTING HACK TO EMULATE ENVIRONMENT VARIABLES UNTIL WE GET NEXT ENV STUFF WORKING

export default env;
