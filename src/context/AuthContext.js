import React from "react";
import constate from "constate";

import Tabletop from "tabletop";

import firebase from "firebase/app";
import "firebase/auth";

// Firebase config data (apparently it's ok to have the key publicly accessible...)
// (If we find out otherwise, let us know know and we'll generate another one ASAP!)
var firebaseConfig = {
  apiKey: "AIzaSyCiIVREMGu0ha7V-cyU23dZ6CclIWDOSJM",
  authDomain: "dev-launchers-bb76e.firebaseapp.com",
  databaseURL: "https://dev-launchers-bb76e.firebaseio.com",
  projectId: "dev-launchers-bb76e",
  storageBucket: "dev-launchers-bb76e.appspot.com",
  messagingSenderId: "944982944616",
  appId: "1:944982944616:web:6896d2d3afafe0312484dd",
  measurementId: "G-R71JK0Z250"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
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
const [AuthProvider, useAuthContext] = constate(useAuth);
export { AuthProvider, useAuthContext };
