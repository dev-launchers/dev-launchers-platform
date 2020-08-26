import React, { useRef } from "react";

import PageBody from "../../common/PageBody";
import Button from "../../common/Button";
import Modal from "../../common/Modal";
import CardGroup from "../../common/CardGroup";

import style from "./MentorshipTiers.module.css";

import IntroArea from "./IntroArea";
import SignUpForm from "./SignUpForm";
import PhotoHolder from "./PhotoHolder";
import progressionLevels from "./progressionLevels.js";

// General scroll-to function
const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

export default function MentorshipTiers() {
  // Scroll-to functions
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  // Add onClick functions to progressionLevels
  [
    ...progressionLevels.beginner,
    ...progressionLevels.intermediate,
    ...progressionLevels.advanced
  ].map(level => {
    level.onClick = () => {
      setModalContent(
        <div className={style.modalContainer}>
          <div>
            <span
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginRight: "2%"
              }}
            >
              {level.title}
            </span>
            {level.description}
            <Button
              style={{
                display: "block",
                width: "95%",
                marginTop: "2%",
                marginLeft: "auto",
                marginRight: "auto"
              }}
              onClick={() => {
                closeModal();
                executeScroll();
              }}
            >
              Apply Now!
            </Button>
          </div>

          <div className={style.modalBody}>
            <div
              className={style.modalInfoCard}
              style={{ textDecorationColor: "10px solid rgba(72, 125, 90, 0)" }}
            >
              <h4>
                <u>Abilities</u>
              </h4>
              <ul>
                {level.abilities.map(entry => {
                  return <li className={style.listEntry}>{entry}</li>;
                })}
              </ul>
            </div>
            <div
              className={style.modalInfoCard}
              style={{ textDecorationColor: "10px solid rgba(65, 87, 98, 0)" }}
            >
              <h4>
                <u>Expectations</u>
              </h4>
              <ul>
                {level.expectations.map(entry => {
                  return <li className={style.listEntry}>{entry}</li>;
                })}
              </ul>
            </div>
          </div>
          {level.prerequisiteSkills ? (
            <div className={style.prerequisiteSkillCard}>
              <h4>
                <u>Prerequisite Skills</u>
              </h4>
              <ul>
                {level.prerequisiteSkills.map(entry => {
                  return <li>{entry}</li>;
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
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
          <CardGroup title="Beginner" data={progressionLevels.beginner} />
          <CardGroup
            title="Intermediate"
            data={progressionLevels.intermediate}
          />
          <CardGroup title="Advanced" data={progressionLevels.advanced} />
        </div>
      </PageBody>
      <PhotoHolder />
      <div className="scrollToDiv" ref={myRef} style={{ height: "0" }} />
      <SignUpForm />
    </div>
  );
}
