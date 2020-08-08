import React, { useRef } from "react";
import PageBody from "../../common/PageBody";
import Button from "../../common/Button";
//import Card from "../../common/Card";
import CardGroup from "../../common/CardGroup";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import style from "./MentorshipTiers.module.css";

import IntroArea from "./IntroArea";
import SignUpForm from "./SignUpForm";
import progressionLevels from "./progressionLevels.js";

// General scroll-to function
const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

export default function MentorshipTiers() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <div>
      <IntroArea scrollToFormFunc={executeScroll} />
      <PageBody>
        <div style={{ width: "100%" }}>
          <CardGroup title="Levels" data={progressionLevels} />
        </div>
      </PageBody>
      <div className="scrollToDiv" ref={myRef} />
      <SignUpForm />
    </div>
  );
}
