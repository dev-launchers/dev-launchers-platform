import React from "react";

import style from "./Home.module.css";

import PageBody from "../../../components/common/PageBody";
import CardGroup from "../../../components/common/CardGroup";

import HeroImage from "./HeroImage";
import HeroOverlay from "./HeroOverlay";
import Intro from "./Intro";
//import Programs from "./Programs";
import Organization from "./Organization";
import Contribution from "./Contribution";
import Partners from "./Partners";

import communityCards from "./communityCards.js";
import educationalCards from "./educationalCards.js";
import organizationCards from "./organizationCards.js";

export default function Home() {
  console.log(communityCards);
  return (
    <div className={style.Home}>
      <HeroImage />
      <HeroOverlay />
      <PageBody>
        <div className={style.HomePageBody}>
          <Intro />
          <CardGroup
            data={communityCards}
            titleAlignment="center"
            cardGroupFlexDirection="space-around"
          />
          <hr />
          <CardGroup
            size="large"
            data={organizationCards}
            titleAlignment="center"
            cardGroupFlexDirection="center"
          />
          <hr />
          {/*}
          <Programs />
          <hr />
          {*/}
          {/*<Organization />*/}
          <CardGroup
            data={educationalCards}
            titleAlignment="center"
            cardGroupFlexDirection="space-around"
          />
          <hr />
          <Contribution />
          <hr />
          <Partners />
        </div>
      </PageBody>
    </div>
  );
}
