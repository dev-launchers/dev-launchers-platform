import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HamburgerMenu from "../../common/HamburgerMenu";

import { useAuthContext } from "../../../context/AuthContext";
import { useSheetsContext } from "../../../context/SheetsContext";
import { useRepoContext } from "../../../context/RepoContext";
import { useLeaderboardContext } from "../../../context/LeaderboardContext";

import ScrollToTop from "../../../utils/ScrollToTop.js";

import HomeRoute from "../../../pages/index.js";
import CreateRoute from "../../../pages/create.js";
import LearnRoute from "../../../pages/learn.js";
import PlayRoute from "../../../pages/play.js";
import EarnRoute from "../../../pages/earn.js";
import DynamicPageRoute from "../../../pages/DynamicPageRoute.js";
import BlogRoute from "../../../pages/blog.js";
import SupportUsRoute from "../../../pages/support-us.js";
import StoriesRoute from "../../../pages/stories.js";
import JoinRoute from "../../../pages/members.js";
import CalendarRoute from "../../../pages/members.js";
import PixilartWrapperRoute from "../../../pages/PixilartWrapperRoute";
import HangoutRoute from "../../../pages/hangout.js";

import MentorSignupRoute from "../../../pages/mentor-signup.js";
import MentorshipTiersRoute from "../../../pages/members.js";
import SocialMediaRoute from "../../../pages/check-it.js";

const Wildcard = () => {
  return <Redirect to="/" />;
};

function App(props) {
  // Strip out hash from url (if any) so we can transition from HashRouter to BrowserRouter
  if (window.location.hash.startsWith("#/")) {
    window.location = window.location.hash.replace("#", "");
  }

  return (
    <useAuthContext.Provider>
      <useSheetsContext.Provider>
        <useRepoContext.Provider>
          <useLeaderboardContext.Provider>
            <div className="App">
              <ToastContainer
                className="toast-container"
                toastClassName="toast"
                progressClassName="toast-progress"
              />
              <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop />
                <HamburgerMenu />
                <Switch>
                  <Route exact path="/" component={HomeRoute} />
                  <Route exact path="/create" component={CreateRoute} />
                  <Route exact path="/learn" component={LearnRoute} />
                  <Route exact path="/play" component={PlayRoute} />
                  <Route exact path="/earn" component={EarnRoute} />
                  <Route exact path="/join" component={JoinRoute} />
                  <Route exact path="/calendar" component={CalendarRoute} />
                  <Route
                    exact
                    path="/members"
                    component={MentorshipTiersRoute}
                  />
                  <Route path="/page/:pageId" component={DynamicPageRoute} />
                  <Route
                    path="/blog/:pathType/:authorId/:articleId"
                    component={BlogRoute}
                  />
                  <Route exact path="/support-us" component={SupportUsRoute} />
                  <Route
                    exact
                    path="/pixilart-wrapper"
                    component={PixilartWrapperRoute}
                  />
                  <Route
                    exact
                    path="/(hangout|hangouts)/"
                    component={HangoutRoute}
                  />
                  <Route
                    exact
                    path="/mentor-signup"
                    component={MentorSignupRoute}
                  />
                  <Route exact path="/stories" component={StoriesRoute} />
                  <Route exact path="/check-it" component={SocialMediaRoute} />
                  <Route exact path="/*" component={Wildcard} />
                </Switch>
              </Router>
            </div>
          </useLeaderboardContext.Provider>
        </useRepoContext.Provider>
      </useSheetsContext.Provider>
    </useAuthContext.Provider>
  );
}

export default App;

/*
export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
*/
