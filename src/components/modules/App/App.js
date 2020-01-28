import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tabletop from 'tabletop';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../../utils/firebaseConfig.js';

import ScrollToTop from "../../../utils/ScrollToTop.js"
import HomeRoute from "../../../routes/HomeRoute.js";
import CreateRoute from "../../../routes/CreateRoute.js";
import LearnRoute from "../../../routes/LearnRoute.js";
import PlayRoute from "../../../routes/PlayRoute.js";
import EarnRoute from "../../../routes/EarnRoute.js";
import SupportUsRoute from "../../../routes/SupportUsRoute.js";
import EventsRoute from "../../../routes/EventsRoute";


const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    Tabletop.init({
      // https://docs.google.com/spreadsheets/d/e/2PACX-1vQfJccD-2qd8eVQ6BPIc3EbbBUcTcxIUAxNub31QrWalpfExtTccMBYORQoFqPcxt_HRDuWLT9KXwN0/pubhtml
      // https://docs.google.com/spreadsheets/d/1ukOl5lCKF8eXiVgjLgFqDzmdudjik5H_rnws8jPFyJ0/edit?usp=sharing
      key: '1ukOl5lCKF8eXiVgjLgFqDzmdudjik5H_rnws8jPFyJ0',
      callback: googleData => {
        console.log('google sheet data --->', googleData)
      },
      simpleSheet: false
    })
  }

  render() {
    const {
      user,
      signOut,
      signInWithGithub,
    } = this.props;
    return (
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
            <Route exact path="/events" component={EventsRoute} />
            <Route exact path="/support-us" component={SupportUsRoute} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  githubProvider: new firebase.auth.GithubAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
