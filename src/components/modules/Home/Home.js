import React from "react";

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
import { HomePageBody } from "./StyledHome";

export default function Home() {
  console.log(communityCards);
  return (
    <div>
      <HeroImage />
      <HeroOverlay />
      <PageBody>
        <HomePageBody>
          <Intro />
          <CardGroup
            cards={communityCards}
            titleAlignment="center"
            cardGroupFlexDirection="space-around"
          />
          <hr />
          <CardGroup
            size="large"
            cards={organizationCards}
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
            cards={educationalCards}
            titleAlignment="center"
            cardGroupFlexDirection="space-around"
          />
          <hr />
          <Contribution />
          <hr />
          <Partners />
        </HomePageBody>
      </PageBody>
    </div>
  );
}
