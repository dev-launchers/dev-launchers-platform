import React from "react";

import sparkSymbolImage from "../../../../images/spark-symbol.png";
import ignitionSymbolImage from "../../../../images/ignition-symbol.png";

import Button from "../../../common/Button";
import {
  ProgramArea,
  ProgramDescriptionArea,
  ProgramImage,
  ProgramImageArea,
  ProgramImageContainer
} from "./StyledPrograms";

export default function Programs() {
  return (
    <div className={style.Body}>
      <h1>
        Our Programs <span style={{ fontSize: "1rem" }}>(for teens)</span>
      </h1>
      <ProgramArea>
        <ProgramImageArea>
          <ProgramImageContainer>
            <ProgramImage src={sparkSymbolImage} />
            <Button fontSize="2rem" href="https://forms.gle/ktNmippzfYUTnwgb8">
              Join Spark!
            </Button>
          </ProgramImageContainer>
        </ProgramImageArea>
        <ProgramDescriptionArea>
          <h2>Spark</h2>
          The Spark Program introduces teen students to the skills needed to
          develop their own games and apps! Come hang out with Dev Launchers and
          learn how to Code or create Digital Art.
          <ul>
            <li>
              Learn computer science and digital design through games and apps!
            </li>
            <li>Work alongside professional developers!</li>
            <li>Make friends!</li>
            <li>Eat free snacks!</li>
            <li>Earn levels and prizes!</li>
          </ul>
        </ProgramDescriptionArea>
      </ProgramArea>
      <ProgramArea>
        <ProgramImageArea>
          <ProgramImageContainer>
            <ProgramImage src={ignitionSymbolImage} />
            <Button
              fontSize="2rem"
              toast="Ignition signups aren't open yet, but join the Spark Program to begin working with us until enrollment begins!"
            >
              Join Ignition!
            </Button>
          </ProgramImageContainer>
        </ProgramImageArea>
        <ProgramDescriptionArea>
          <h2>Ignition</h2>
          Our Ignition Program offers an in-depth, rigorous development
          experience for students looking to take a deeper dive into the realm
          of technology and digital creation. We'll work with you to create your
          own unique game or app while preparing you for a highly paid career
          doing something you love!
          <ul>
            <li>Create your own app!</li>
            <li>Eat free snacks!</li>
            <li>Free meals during lab sessions!</li>
            <li>Earn levels and prizes!</li>
            <li>
              Get connected to internship opportunities, code bootcamps, tech
              companies, and schools!
            </li>
          </ul>
          For students who qualify, we also offer:
          <ul>
            <li>Free transportation to sessions</li>
            <li>Free take-home laptop rentals!</li>
          </ul>
        </ProgramDescriptionArea>
      </ProgramArea>
    </div>
  );
}
