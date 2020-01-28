import React from "react";
import ReactDOM from "react-dom";

import style from "./HomeBody.module.css";

import PageBody from "../../../components/common/PageBody";

import HomeHeroImage from "./HomeHeroImage";
import HomeHeroOverlay from "./HomeHeroOverlay";
import HomeBodyContent from "./HomeBodyContent";

export default class HomeBody extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={style.HomeBody}>
        <HomeHeroImage />
        <HomeHeroOverlay />
        <PageBody>
          <HomeBodyContent />
        </PageBody>
      </div>
    );
  }
}
