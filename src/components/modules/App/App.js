import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tabletop from "tabletop";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../utils/firebaseConfig.js";

import { useSheetsContext } from "../../../context/SheetsContext";

import ScrollToTop from "../../../utils/ScrollToTop.js";
import HomeRoute from "../../../routes/HomeRoute.js";
import CreateRoute from "../../../routes/CreateRoute.js";
import LearnRoute from "../../../routes/LearnRoute.js";
import PlayRoute from "../../../routes/PlayRoute.js";
import EarnRoute from "../../../routes/EarnRoute.js";
import SupportUsRoute from "../../../routes/SupportUsRoute.js";
import StoriesRoute from "../../../routes/StoriesRoute";
import JoinRoute from "../../../routes/JoinRoute";

const firebaseApp = firebase.initializeApp(firebaseConfig);

function App(props) {
  const { user, signOut, signInWithGithub } = props;

  return (
    <useSheetsContext.Provider>
      <div className="App">
        <ToastContainer
          className="toast-container"
          toastClassName="toast"
          progressClassName="toast-progress"
        />
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={HomeRoute} />
            <Route exact path="/create" component={CreateRoute} />
            <Route exact path="/learn" component={LearnRoute} />
            <Route exact path="/play" component={PlayRoute} />
            <Route exact path="/earn" component={EarnRoute} />
            <Route exact path="/support-us" component={SupportUsRoute} />
            <Route exact path="/stories" component={StoriesRoute} />
            <Route exact path="/join" component={JoinRoute} />
          </Switch>
        </Router>
      </div>
    </useSheetsContext.Provider>
  );
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  githubProvider: new firebase.auth.GithubAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
