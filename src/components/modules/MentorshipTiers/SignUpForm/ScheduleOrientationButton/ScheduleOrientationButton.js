import React from "react";
import { openPopupWidget } from "react-calendly";

import style from "./ScheduleOrientationButton.module.css";

import Button from "../../../../common/Button";
import Modal from "../../../../common/Modal";

export default function ScheduleOrientationButton(props) {
  // Modal state management
  const [modalContent, setModalContent] = React.useState("content");
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openIntroModal = () => {
    setModalContent(
      <div style={{ height: "70%", textAlign: "center", padding: "10%" }}>
        <div>
          <b>Your application has been automatically approved!</b>
          <br />
          <br /> Please sign up for an orientation with us to begin yor journey.
          If none of these times work for you, feel free to reach out to{" "}
          <a href="mailto:support@devlaunchers.com">labs@devlaunchers.com</a> to
          schedule a different time.
        </div>
        <Button
          style={{ margin: "5%" }}
          onClick={() => {
            closeModal();
            openPopupWidget({
              url: "https://calendly.com/devlaunchers/new-member-orientation"
            });
          }}
        >
          Begin Scheduling
        </Button>
      </div>
    );
    openModal();
  };

  return (
    <div>
      <Modal
        modalContent={modalContent}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Button onClick={openIntroModal}>Schedule Orientation</Button>
    </div>
  );
}
