import React, { useRef } from "react";

import PageBody from "../../common/PageBody";
import Button from "../../common/Button";
import Modal from "../../common/Modal";
import CardGroup from "../../common/CardGroup";

import style from "./MentorshipTiers.module.css";

import IntroArea from "./IntroArea";
import SignUpForm from "./SignUpForm";
import progressionLevels from "./progressionLevels.js";

// General scroll-to function
const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

export default function MentorshipTiers() {
  // Scroll-to functions
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  // Add onClick functions to progressionLevels
  progressionLevels.map(level => {
    level.onClick = () => {
      setModalContent(
        <div>
          <h3>{level.title}</h3>
          <div>{level.description}</div>
          <h4>Abilities</h4>
          {level.abilities.map(entry => {
            return <li>{entry}</li>;
          })}
          <h4>Expectations</h4>
          {level.expectations.map(entry => {
            return <li>{entry}</li>;
          })}
          <h4>Advancement Criteria</h4>
          {level.advancementCriteria.map(entry => {
            return <li>{entry}</li>;
          })}
        </div>
      );
      setModalIsOpen(true);
    };
  });

  // Modal state management
  const [modalContent, setModalContent] = React.useState("content");
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        modalContent={modalContent}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      ></Modal>
      <IntroArea scrollToFormFunc={executeScroll} />
      <PageBody>
        <div style={{ width: "100%" }}>
          <CardGroup data={progressionLevels} />
        </div>
      </PageBody>
      <div className="scrollToDiv" ref={myRef} style={{ height: "5vh" }} />
      <hr />
      <div className="pusher" style={{ height: "5vh" }} />
      <SignUpForm />
    </div>
  );
}
