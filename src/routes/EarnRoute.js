import React from "react";
import ReactDOM from "react-dom";

import Tabletop from "tabletop";

//import style from "./HomeRoute.module.css";

import Header from "../components/modules/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/modules/Footer";
import SpendCardCollection from "../components/modules/Earn/SpendCardCollection";
import TaskTable from "../components/modules/Earn/TaskTable";

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
        <SpendCardCollection />
        <br />
        <hr />
        <h2>Earn points</h2>
        <TaskTable />
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
