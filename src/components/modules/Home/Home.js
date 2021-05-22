import React from "react";

import style from "./Home.module.css";

import PageBody from "../../../components/common/PageBody";
import CardGroup from "../../../components/common/CardGroup";

import HeroImage from "./HeroImage";
import HeroOverlay from "./HeroOverlay";
import Carousel from "../../../components/common/Carousel";

import placeholder4 from "../../../images/HeroImages/laptopman.png";
import placeholder5 from "../../../images/HeroImages/laptopman2.png";
import placeholder6 from "../../../images/HeroImages/rocket.png";

import Intro from "./Intro";
1;
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
      <Carousel
        interval={3000}
        callsToAction={[
          <div>
            click the button<button>hello</button>
          </div>,
          <div>
            please<button>hello</button>
          </div>,
          <div>
            hello?<button>hello</button>
          </div>
        ]}
        images={[placeholder4, placeholder5, placeholder6]}
      />

      <PageBody>
        <div className={style.HomePageBody}>
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
        </div>
      </PageBody>
    </div>
  );
}
