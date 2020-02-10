import React from "react";

import Header from "../components/modules/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/modules/Footer";
import SpendCardCollection from "../components/modules/Earn/SpendCardCollection";
import TaskTable from "../components/modules/Earn/TaskTable";
import PointsTable from "../components/modules/Earn/PointsTable";

export default function EarnRoute() {
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
        <PointsTable />
        <br />
        <br />
      </PageBody>
      <Footer />
    </div>
  );
}
