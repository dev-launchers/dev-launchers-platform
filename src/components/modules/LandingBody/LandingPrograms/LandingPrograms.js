import React from "react";
import ReactDOM from "react-dom";

import style from "./LandingPrograms.module.css";

import Button from "../../../../common/Button";

export default class LandingPrograms extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div className={style.landingBody}>
        <h1>
          Our Programs <span style={{ fontSize: "1rem" }}>(for teens)</span>
        </h1>
        <div class="spark-program-area" style={{ display: "flex" }}>
          <div
            class="program-image"
            style={{
              width: "40%",
              height: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "80%",
                backgroundColor: "#1c1c1c",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src="/images/spark-symbol.png"
                style={{ width: "80%", padding: "5%" }}
              />
              <Button label="Join Spark!" fontSize="2rem" />
            </div>
          </div>
          <div style={{ width: "60%" }}>
            <h2>Spark</h2>
            The Spark Program introduces teen students to the skills needed to
            develop their own games and apps! Come hang out with Dev Launchers
            and learn how to Code or create Digital Art.
            <ul>
              <li>
                Learn computer science and digital design through games and
                apps!
              </li>
              <li>Work alongside professional developers!</li>
              <li>Make friends!</li>
              <li>Eat free snacks!</li>
              <li>Earn levels and prizes!</li>
            </ul>
          </div>
        </div>
        <div
          class="ignition-program-area"
          style={{ display: "flex", marginTop: "5%" }}
        >
          <div
            class="program-image"
            style={{
              width: "40%",
              height: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "80%",
                backgroundColor: "#1c1c1c",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src="/images/launch-symbol.png"
                style={{ width: "80%", padding: "5%" }}
              />
              <Button label="Join Ignition!" fontSize="2rem" />
            </div>
          </div>
          <div style={{ width: "60%" }}>
            <h2>Ignition</h2>
            Our Ignition Program offers an in-depth, rigorous development
            experience for students looking to take a deeper dive into the realm
            of technology and digital creation. We'll work with you to create
            your own unique game or app while preparing you for a highly paid
            career doing something you love!
            <ul>
              <li>Create your own app!</li>
              <li>Eat free snacks!</li>
              <li>Free meals during lab sessions!</li>
              <li>Earn levels and prizes!</li>
              <li>
                Get connected to internship opportunities, code bootcamps, tech
                companies, and schools!
              </li>
            </ul>
            For students who qualify, we also offer:
            <ul>
              <li>Free transportation to sessions</li>
              <li>Free take-home laptop rentals!</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
