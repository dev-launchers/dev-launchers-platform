import React from "react";
import PageBody from "../../../components/common/PageBody";

import SpendCardCollection from "./SpendCardCollection";
import EarnPoints from "./EarnPoints";
import CurrentPoints from "./CurrentPoints";

export default function Earn() {
  return (
    <PageBody width="95%">
      <br />
      <h1>Work Hard, Play Hard</h1>
      <h3>
        <b>For members of our programs</b>:
      </h3>
      <ul>
        <li>Create games and apps: earn rewards!</li>
        <li>Become a developer: get paid!</li>
      </ul>
      <hr />
      <h2>Spend points</h2>
      Progress through Dev Launchers and earn points you can spend on prizes!
      <br />
      <br />
      <SpendCardCollection />
      <br />
      {/*}<hr />
      <CurrentPoints />
      <br />
      <br />
      <hr />
      <EarnPoints />
      <br />
      <br />{*/}
    </PageBody>
  );
}
