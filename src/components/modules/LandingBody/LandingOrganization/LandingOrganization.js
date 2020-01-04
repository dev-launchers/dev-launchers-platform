import React from "react";
import ReactDOM from "react-dom";

import style from "./LandingOrganization.module.css";

import Button from "/src/components/common/Button";

export default class LandingOrganization extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div className={style.landingBody}>
        <h1>
          Our Organization
          <span style={{ fontSize: "1rem" }}> (for everyone)</span>
        </h1>
        Dev Launchers is a nonprofit intent on empowering young people from
        diverse communities
        <div>
          <h2>We love what we do. You should too!</h2>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              Your time is valuable, do something you love. Dev Launchers is
              built for people just like you, take a look around and join us!
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Button label="Become a Mentor" />
            </div>
          </div>
        </div>
        <div>
          <h2>Technology should be accessible</h2>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              We seek out individuals from diverse, underserved communities and
              empower them to create. Know a young person who's excited about
              technology? Send them our way!
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Button label="Nominate a Student" />
            </div>
          </div>
        </div>
        <div>
          <h2>We believe in Open Source</h2>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              Everything, from our platform to our curriculum to the projects we
              develop, is released to the open source community. We rely on
              contributors to grow our platform and continue serving our
              students!
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Button label="Find us on GitHub" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
