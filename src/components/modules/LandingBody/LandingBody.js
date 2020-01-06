import React from "react";
import ReactDOM from "react-dom";

import style from "./LandingBody.module.css";

import PageBody from "../../../components/common/PageBody";

import LandingHeroImage from "./LandingHeroImage";
import LandingHeroOverlay from "./LandingHeroOverlay";
import LandingBodyContent from "./LandingBodyContent";

export default class LandingBody extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={style.LandingBody}>
        <LandingHeroImage />
        <LandingHeroOverlay />
        <PageBody>
          <LandingBodyContent />
        </PageBody>
      </div>
    );
  }
}
