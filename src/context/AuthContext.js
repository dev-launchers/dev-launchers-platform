import React from "react";
import createUseContext from "constate"; // State Context Object Creator

import Tabletop from "tabletop";

import firebase from "firebase/app";
import "firebase/auth";

// Firebase config data (apparently it's ok to have the key publicly accessible...)
// (If we find out otherwise, let us know know and we'll generate another one ASAP!)
const firebaseConfig = {
  apiKey: "AIzaSyCK48yyyfcpGM79oYP3v9S-EcvCvGbSWHA",
  authDomain: "dev-launchers.firebaseapp.com",
  databaseURL: "https://dev-launchers.firebaseio.com",
  projectId: "dev-launchers",
  storageBucket: "dev-launchers.appspot.com",
  messagingSenderId: "522846071272",
  appId: "1:522846071272:web:c7c50dbe55a2ffdf115c5d",
  measurementId: "G-H25GMXJSXB"
};

firebase.initializeApp(firebaseConfig);
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  githubProvider: new firebase.auth.GithubAuthProvider()
};

// Step 1: Create a custom hook that contains your state and actions
function useAuth() {
  const [authUser, setAuthUser] = React.useState(undefined);

  const doAuthRequest = () => {
    firebase
      .auth()
      //.signInWithRedirect(providers.githubProvider) // Works better for mobile, but results in endless loop now
      .signInWithPopup(providers.githubProvider)
      .then(result => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        setAuthUser(user);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return { authUser, doAuthRequest };
}

// Step 2: Declare your context state object to share the state with other components
export const useAuthContext = createUseContext(useAuth);
