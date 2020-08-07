import React from "react";
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
import progressionLevels from "./progressionLevels.js";

export default function MentorshipTiers() {
  // Format progressionLevel data to fit work with CardGroup component
  var cardGroupData = {
    title: "Levels",
    data: progressionLevels
  };

  return (
    <div>
      <IntroArea />
      <PageBody>
        <div style={{ width: "100%" }}>
          <CardGroup title="Levels" data={progressionLevels} />
          <Button
            style={{
              fontSize: "2rem",
              margin: "2%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            JOIN NOW
          </Button>
        </div>
        <br />
      </PageBody>
    </div>
  );
}
