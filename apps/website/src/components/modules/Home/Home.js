/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import { toast } from 'react-toastify';
import { withTheme } from "styled-components";
import PageBody from "../../common/PageBody";

import HeroImage from "./HeroImage";
import HeroOverlay from "./HeroOverlay";
import Intro from "./Intro";
// import Programs from "./Programs";

import Contribution from "./Contribution";
import Partners from "./Partners";

import {
  HomePageBody,
  ColoredCtaWrapper,
  ColoredCtaEntry,
  ColoredCtaEntryImage,
  ColoredCtaEntryTitle,
} from "./StyledHome";
import CtaDescriptionArea from "./CtaDescriptionArea";

import womanComputerImage from "../../../images/people-cutouts/woman-computer.png?webp";
import manGlassesImage from "../../../images/people-cutouts/man-glasses.png?webp";
import girlSmilingImage from "../../../images/people-cutouts/girl-smiling.png?webp";
import boyFrontImage from "../../../images/people-cutouts/boy-front.png?webp";

// General scroll-to function
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function Home({ theme }) {
  // Scroll-to functions
  const learnRef = useRef(null);
  const leadRef = useRef(null);
  const createRef = useRef(null);
  const donateRef = useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      toast(
        <>
          Hey there! Are you a developer? Want management experience in a friendly, supportive environment? We're currently searching for intermediate and advanced devs to take on <span style={{fontSize:"2rem", textDecoration:"underline"}}>
            <a href={process.env.FRONT_END_URL + "/join"}>leadership positions</a></span> in our product teams!
        </>,
        {
          bodyClassName: "toast-body",
          position: "bottom-right",
          autoClose: 25000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }, 6000)
  }, []);

  return (
    <div>
      <HeroImage />
      <HeroOverlay />
      <PageBody>
        <HomePageBody>
          <ColoredCtaWrapper>
            <ColoredCtaEntry
              onClick={() => {
                scrollToRef(learnRef);
              }}
              backgroundColor={theme.colors.ACCENT_1}
            >
              <ColoredCtaEntryTitle>LEARN</ColoredCtaEntryTitle>
              <ColoredCtaEntryImage src={womanComputerImage} />
            </ColoredCtaEntry>
            <ColoredCtaEntry
              onClick={() => {
                scrollToRef(leadRef);
              }}
              backgroundColor={theme.colors.ACCENT_2}
            >
              <ColoredCtaEntryTitle>LEAD</ColoredCtaEntryTitle>
              <ColoredCtaEntryImage src={manGlassesImage} />
            </ColoredCtaEntry>
            <ColoredCtaEntry
              onClick={() => {
                scrollToRef(createRef);
              }}
              backgroundColor={theme.colors.ACCENT_4}
            >
              <ColoredCtaEntryTitle>CREATE</ColoredCtaEntryTitle>
              <ColoredCtaEntryImage src={girlSmilingImage} />
            </ColoredCtaEntry>
            <ColoredCtaEntry
              onClick={() => {
                scrollToRef(donateRef);
              }}
              backgroundColor={theme.colors.ACCENT_3}
            >
              <ColoredCtaEntryTitle>DONATE</ColoredCtaEntryTitle>
              <ColoredCtaEntryImage src={boyFrontImage} />
            </ColoredCtaEntry>
          </ColoredCtaWrapper>
          <Intro />
          <Contribution />
          <div
            className="scrollToDiv"
            ref={learnRef}
            style={{ height: "0", paddingTop: "5rem" }}
          />
          <CtaDescriptionArea
            flexDirection="row"
            title="LEARN"
            descriptionHeadline="Get trained to become a developer from the ground up while working on real projects!"
            descriptionContent={
              <div>
                Learn at a pace tailored completely to you! You&apos;ll have
                hands on help, starting from{" "}
                <span
                  style={{
                    backgroundColor: theme.colors.NEUTRAL_2,
                    color: theme.colors.NEUTRAL_1,
                  }}
                >
                  square one
                </span>{" "}
                all the way through building complex projects working in agile
                teams. Whether you&apos;re looking to build clean, professional
                apps and sites, or create scalable data-driven solutions, Dev
                Launchers has been crafted for <u>YOU</u>.
              </div>
            }
            titleUnderlineColor={theme.colors.ACCENT_1}
            imageSrc={womanComputerImage}
            imageOutlineColor={theme.colors.NEUTRAL_1}
          />
          <div
            className="scrollToDiv"
            ref={leadRef}
            style={{ height: "0", paddingTop: "5rem" }}
          />
          <CtaDescriptionArea
            flexDirection="row-reverse"
            title="LEAD"
            descriptionHeadline="Evolve your career in the direction you want to go"
            descriptionContent={
              <div>
                <p>
                  Change your life while changing the world! Lead ambitious
                  agile teams designed to engage new learners and solve real
                  problems, all with guidance and support from people who have
                  walked the same path.
                </p>
                <p>
                  You&apos;ll gain the soft skills needed to land more senior
                  roles in your career while managing projects and making
                  lifelong friends. Join a growing network of software
                  professionals working to build something great, together.
                </p>
              </div>
            }
            titleUnderlineColor={theme.colors.ACCENT_2}
            imageSrc={manGlassesImage}
            imageOutlineColor={theme.colors.NEUTRAL_1}
          />
          <div
            className="scrollToDiv"
            ref={createRef}
            style={{ height: "0", paddingTop: "5rem" }}
          />
          <CtaDescriptionArea
            flexDirection="row"
            title="CREATE"
            descriptionHeadline="Build epic products, tools, and apps used by real people!"
            descriptionContent={
              <div>
                <p>
                  We build <u>awesome</u> things, and you can join us!
                </p>{" "}
                <p>The Dev Launchers Project Ethos:</p>
                <ul>
                  <li>Keep it exciting, always</li>
                  <li>
                    Encourage people at all levels and from all backgrounds to
                    learn technical skills
                  </li>
                  <li>
                    When given the chance, experiment with groundbreaking
                    technology.
                  </li>
                  <li>Make the world better</li>
                </ul>
              </div>
            }
            titleUnderlineColor={theme.colors.ACCENT_4}
            imageSrc={girlSmilingImage}
            imageOutlineColor={theme.colors.NEUTRAL_1}
          />
          <div
            className="scrollToDiv"
            ref={donateRef}
            style={{
              height: "0",
              paddingTop: "5rem",
              backgroundColor: theme.colors.NEUTRAL_1,
            }}
          />
          <CtaDescriptionArea
            flexDirection="row-reverse"
            title="DONATE"
            descriptionHeadline="Your donation will create an opportunity for a young learner, preparing them to face the technical challenges of the future head on."
            descriptionContent={
              <div>
                Dev Launchers is a registered 501(c)(3) not-for-profit
                organization. We can’t keep changing lives without your support!
              </div>
            }
            titleUnderlineColor={theme.colors.ACCENT_1}
            imageSrc={boyFrontImage}
            imageOutlineColor={theme.colors.NEUTRAL_2}
            mainBackgroundColor={theme.colors.NEUTRAL_1}
            titleFontColor={theme.colors.NEUTRAL_2}
            descriptionBackgroundColor={theme.colors.NEUTRAL_1}
            descriptionFontColor={theme.colors.NEUTRAL_2}
          />
          <Partners />
        </HomePageBody>
      </PageBody>
    </div>
  );
}

export default withTheme(Home);
