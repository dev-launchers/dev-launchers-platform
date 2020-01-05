import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import LandingRoute from "./routes/LandingRoute.js";
//import CreateRoute from "./routes/CreateRoute.js";
//import LearnRoute from "./routes/LearnRoute.js";
//import PlayRoute from "./routes/PlayRoute.js";
//import EarnRoute from "./routes/EarnRoute.js";
//import SupportUsRoute from "./routes/SupportUsRoute.js";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="App">
        <ToastContainer
          className="toast-container"
          toastClassName="toast"
          progressClassName="toast-progress"
        />
      </div>
    );
  }
}
/*

        <Router>
          <Switch>
            <Route exact path="/" component={LandingRoute} />
            <Route path="/create" component={CreateRoute} />
            <Route path="/learn" component={LearnRoute} />
            <Route path="/play" component={PlayRoute} />
            <Route path="/earn" component={EarnRoute} />
            <Route path="/support-us" component={SupportUsRoute} />
          </Switch>
        </Router>

*/
/*
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
const props = {};

ReactDOM.render(<App {...props} />, document.getElementById("root"));
