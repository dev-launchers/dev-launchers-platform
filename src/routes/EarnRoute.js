import React from "react";
import ReactDOM from "react-dom";

import Tabletop from "tabletop";

//import style from "./HomeRoute.module.css";

import Header from "../components/modules/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/modules/Footer";

// Get content data
let rewards = require("../content/collections/rewards.json").data;

export default function EarnRoute() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    Tabletop.init({
      // https://docs.google.com/spreadsheets/d/e/2PACX-1vQfJccD-2qd8eVQ6BPIc3EbbBUcTcxIUAxNub31QrWalpfExtTccMBYORQoFqPcxt_HRDuWLT9KXwN0/pubhtml
      // https://docs.google.com/spreadsheets/d/1ukOl5lCKF8eXiVgjLgFqDzmdudjik5H_rnws8jPFyJ0/edit?usp=sharing
      key: "1ukOl5lCKF8eXiVgjLgFqDzmdudjik5H_rnws8jPFyJ0",
      callback: googleData => {
        console.log("google sheet data --->", googleData);
        setStudents(googleData.students.elements);
      },
      simpleSheet: false
    });
  }, []);

  return (
    <div>
      <Header />
      <PageBody>
        <br />
        <h1>Work Hard, Play Hard</h1>
        <h3>
          For students who join the Dev Launchers <b>Ignition Program</b>:
        </h3>
        <ul>
          <li>Create games and apps: earn rewards!</li>
          <li>Become a developer: get paid!</li>
        </ul>
        <span style={{ color: "red", fontWeight: "bold", fontSize: ".9rem" }}>
          * This page is under construction, and the point values and rewards
          listed are NOT final! Point to reward ratios will be adjusted, and new
          ways to earn points are being added
        </span>
        <hr />
        <h2>Spend points</h2>
        Progress through our Ignition Program and earn points you can spend on
        prizes!
        <br />
        <br />
        <div className="collection collection--small-cards">
          {// rendering our prizes
          rewards.prizes.map((entry, i) => {
            //return (<li><b>{entry.cost} Points:</b> {entry.description}</li>)
            return (
              <div
                className="entry"
                style={{ paddingTop: "1%", backgroundColor: "#ecda56" }}
              >
                <div className="entry-title" style={{ fontSize: "1.8rem" }}>
                  <b style={{ fontSize: "2rem" }}>{entry.title}</b>
                </div>
                <div className="entry-content" style={{ padding: "3%" }}>
                  {entry.description}
                  <br />
                  <br />
                  <b
                    style={{
                      fontFamily: "Holtwood One SC",
                      color: "#806400"
                    }}
                  >
                    {entry.cost} <span style={{}}>Points</span>
                  </b>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <hr />
        <h2>Earn points</h2>
        {
          // rendering our task table
          <table
            style={{
              width: "90%",
              boxShadow:
                "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
              marginLeft: "auto",
              marginRight: "auto",
              borderCollapse: "collapse"
            }}
          >
            <tbody>
              <tr style={{ fontWeight: "bold", fontFamily: "Holtwood One SC" }}>
                <td>For Everyone</td>
              </tr>
              {(function() {
                // Group our entries by category first, then output
                let categories = rewards.tasks.reduce((categoryMemo, entry) => {
                  let category = entry.category;
                  if (!categoryMemo[category]) categoryMemo[category] = [];
                  categoryMemo[category].push({
                    description: entry.description,
                    value: entry.value
                  });
                  return categoryMemo;
                }, {});
                console.log("categories", categories);

                // Array full of JSX to render
                let toRender = [];
                for (let category in categories) {
                  let tasks = categories[category];
                  toRender.push(
                    <tr
                      style={{
                        fontSize: ".9rem",
                        borderTop: "2px solid gray"
                      }}
                    >
                      {category}
                    </tr>
                  );
                  toRender.push(
                    tasks.map(task => {
                      console.log(task);
                      return (
                        <tr style={{ borderTop: "1px solid lightgray" }}>
                          <td
                            style={{ paddingLeft: "5%", paddingBottom: "1%" }}
                          >
                            {task.description}
                          </td>
                          <td
                            style={{
                              width: "15%",
                              paddingBottom: "1%",
                              fontFamily: "Holtwood One SC",
                              fontSize: ".8rem",
                              textAlign: "center"
                            }}
                          >
                            {task.value}
                          </td>
                        </tr>
                      );
                    })
                  );
                }
                return toRender;
              })()}
            </tbody>
          </table>
        }
        <br />
        <br />
        <hr />
        <h2>Current Points</h2>
        <table style={{ margin: "5%", width: "75%", textAlign: "center" }}>
          <tbody>
            <tr style={{ fontWeight: "bold" }}>
              <td style={{}}>Name</td>
              <td>Points</td>
              <td>XP</td>
            </tr>
            {students
              .filter(entry => {
                if (entry.isActive == 1) return true;
                return false;
              })
              .map(entry => {
                return (
                  <tr>
                    <td style={{}}>{entry.name}</td>
                    <td style={{}}>{entry.points}</td>
                    <td style={{}}>{entry.xp}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <br />
        <br />
      </PageBody>
      <Footer />
    </div>
  );
}
