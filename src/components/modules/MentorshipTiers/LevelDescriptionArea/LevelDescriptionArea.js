import React from "react";
import Button from "../../../common/Button";
import Modal from "../../../common/Modal";
import CardGroup from "../../../common/CardGroup";

import style from "./LevelDescriptionArea.module.css";

import progressionLevels from "./../progressionLevels.js";

export default function LevelDescriptionArea(props) {
  const scrollToFormFunc = props.scrollToFormFunc;

  // Add onClick functions to progressionLevels
  [
    ...progressionLevels.beginner,
    ...progressionLevels.intermediate,
    ...progressionLevels.advanced
  ].map(level => {
    return (level.onClick = () => {
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
                scrollToFormFunc();
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
                {level.abilities.map((entry, i) => {
                  return (
                    <li className={style.listEntry} key={i}>
                      {entry}
                    </li>
                  );
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
                {level.expectations.map((entry, i) => {
                  return (
                    <li className={style.listEntry} key={i}>
                      {entry}
                    </li>
                  );
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
                {level.prerequisiteSkills.map((entry, i) => {
                  return <li key={i}>{entry}</li>;
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      );
      setModalIsOpen(true);
    });
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

  const TITLE_ALIGNMENT = "center";
  const GROUP_FLEX_DIRECTION = "center";

  return (
    <div style={{ width: "100%" }}>
      <Modal
        modalContent={modalContent}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      ></Modal>
      <div style={{ width: "100%" }}>
        <CardGroup
          title="Beginner"
          cards={progressionLevels.beginner}
          titleAlignment={TITLE_ALIGNMENT}
          cardGroupFlexDirection={GROUP_FLEX_DIRECTION}
        />
        <CardGroup
          title="Intermediate"
          cards={progressionLevels.intermediate}
          titleAlignment={TITLE_ALIGNMENT}
          cardGroupFlexDirection={GROUP_FLEX_DIRECTION}
        />
        <CardGroup
          title="Advanced"
          cards={progressionLevels.advanced}
          titleAlignment={TITLE_ALIGNMENT}
          cardGroupFlexDirection={GROUP_FLEX_DIRECTION}
        />
      </div>
    </div>
  );
}
