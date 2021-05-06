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
import {
  HomePageBody,
  ColoredCtaWrapper,
  ColoredCtaEntry,
  ColoredCtaEntryImage,
  ColoredCtaEntryTitle
} from "./StyledHome";
import CtaDescriptionArea from "./CtaDescriptionArea";

import theme from "../../../styles/theme.js";

export default function Home() {
  console.log(communityCards);
  return (
    <div>
      <HeroImage />
      <HeroOverlay />
      <PageBody>
        <HomePageBody>
          <Intro />
          <ColoredCtaWrapper>
            <ColoredCtaEntry backgroundColor={theme.colors.ACCENT_1}>
              <ColoredCtaEntryTitle>LEARN</ColoredCtaEntryTitle>
              <ColoredCtaEntryImage />
            </ColoredCtaEntry>
            <ColoredCtaEntry backgroundColor={theme.colors.ACCENT_2}>
              <ColoredCtaEntryTitle>MENTOR</ColoredCtaEntryTitle>
              <ColoredCtaEntryImage />
            </ColoredCtaEntry>
            <ColoredCtaEntry backgroundColor={theme.colors.ACCENT_4}>
              <ColoredCtaEntryTitle>CREATE</ColoredCtaEntryTitle>
              <ColoredCtaEntryImage />
            </ColoredCtaEntry>
            <ColoredCtaEntry backgroundColor={theme.colors.ACCENT_3}>
              <ColoredCtaEntryTitle>DONATE</ColoredCtaEntryTitle>
              <ColoredCtaEntryImage />
            </ColoredCtaEntry>
          </ColoredCtaWrapper>

          <CtaDescriptionArea
            flexDirection="row"
            title="LEARN"
            descriptionHeadline="This is a headline about learning!"
            descriptionContent="Some content about learning. Some content about learning. Some content about learning. Some content about learning. Some content about learning. "
            titleUnderlineColor={theme.colors.ACCENT_1}
          ></CtaDescriptionArea>
          <CtaDescriptionArea
            flexDirection="row-reverse"
            title="LEAD"
            descriptionHeadline="This is a headline about leading!"
            descriptionContent="Some content about leading. Some content about leading. Some content about leading. Some content about leading. Some content about leading. "
            titleUnderlineColor={theme.colors.ACCENT_2}
          ></CtaDescriptionArea>
          <CtaDescriptionArea
            flexDirection="row"
            title="CREATE"
            descriptionHeadline="This is a headline about creating!"
            descriptionContent="Some content about creating. Some content about creating. Some content about creating. Some content about creating. Some content about creating. "
            titleUnderlineColor={theme.colors.ACCENT_4}
          ></CtaDescriptionArea>
          <CtaDescriptionArea
            flexDirection="row-reverse"
            title="DONATE"
            descriptionHeadline="This is a headline about donating!"
            descriptionContent="Some content about donating. Some content about donating. Some content about donating. Some content about donating. Some content about donating. "
            titleUnderlineColor={theme.colors.ACCENT_1}
          ></CtaDescriptionArea>

          {/*}
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
          {*/}
          {/*}
          <Programs />
          <hr />
          {*/}
          {/*<Organization />*/}
          {/*}
          <CardGroup
            cards={educationalCards}
            titleAlignment="center"
            cardGroupFlexDirection="space-around"
          />
          <hr />
          {*/}
          <Contribution />
          <hr />
          <Partners />
        </HomePageBody>
      </PageBody>
    </div>
  );
}
