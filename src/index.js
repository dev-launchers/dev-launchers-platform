import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tabletop from 'tabletop';

import ScrollToTop from "./utils/ScrollToTop.js"
import LandingRoute from "./routes/LandingRoute.js";
import CreateRoute from "./routes/CreateRoute.js";
import LearnRoute from "./routes/LearnRoute.js";
import PlayRoute from "./routes/PlayRoute.js";
import EarnRoute from "./routes/EarnRoute.js";
import SupportUsRoute from "./routes/SupportUsRoute.js";

import "./styles.css";

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
              <Route exact path="/" component={LandingRoute} />
              <Route exact path="/create" component={CreateRoute} />
              <Route exact path="/learn" component={LearnRoute} />
              <Route exact path="/play" component={PlayRoute} />
              <Route exact path="/earn" component={EarnRoute} />
              <Route exact path="/support-us" component={SupportUsRoute} />
            </Switch>
        </Router>
      </div>
    );
  }
}
/*



*/
/*
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
const props = {};

ReactDOM.render(<App {...props} />, document.getElementById("root"));
