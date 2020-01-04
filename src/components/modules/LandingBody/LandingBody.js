import React from "react";
import ReactDOM from "react-dom";

import style from "./LandingBody.module.css";

import PageBody from "../../../components/common/PageBody";

import LandingHero from "./LandingHero";
import LandingHeroOverlay from "./LandingHeroOverlay";
import LandingBodyContent from "./LandingBodyContent";

export default class LandingBody extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div className={style.landingBody}>
        <LandingHero />
        <LandingHeroOverlay />
        <PageBody>
          <LandingBodyContent />
        </PageBody>
      </div>
    );
  }
}
