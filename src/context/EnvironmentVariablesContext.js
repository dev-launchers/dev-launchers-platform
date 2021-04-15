import React from "react";
import constate from "constate"; // State Context Object Creator
import { useRouter } from "next/router";

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useEnvironmentVariables() {
  const router = useRouter();

  // Production values by default
  const [envData, setEnvData] = React.useState({
    envType: "PROD",
    API_URL: "https://api.devlaunchers.com",
    GOOGLE_AUTH_URL: "https://api.devlaunchers.com/auth/google",
    DISCORD_AUTH_URL:
      "https://discord.com/api/oauth2/authorize?client_id=709889509864636496&redirect_uri=https%3A%2F%2Fapi.devlaunchers.com%2Fusers%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify"
  });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href;
      if (
        currentUrl.indexOf("staging") != -1 ||
        currentUrl.indexOf("localhost") != -1
      ) {
        // In staging
        let env = {
          envType: "STAGING",
          API_URL: "https://api-staging.devlaunchers.com",
          GOOGLE_AUTH_URL: "https://api-staging.devlaunchers.com/auth/google",
          DISCORD_AUTH_URL:
            "https://discord.com/api/oauth2/authorize?client_id=815294711983112194&redirect_uri=https%3A%2F%2Fapi-staging.devlaunchers.com%2Fusers%2Fauth%2Fdiscord%2Fcallback&response_type=code&scope=identify"
        };
        setEnvData(env);
      }
    }
  }, []);

  return { envData };
}

// Step 2: Declare your context state object to share the state with other components
const [EnvironmentVariablesProvider, useEnvironmentVariablesContext] = constate(
  useEnvironmentVariables
);
export { EnvironmentVariablesProvider, useEnvironmentVariablesContext };
