import React from "react";
import { openPopupWidget } from "react-calendly";
import { Portal, Title, SignUpButton } from "./StyledLabMember";

export default function LabMember() {
  const openModal = urlPath => {
    openPopupWidget({
      url: `https://calendly.com/devlaunchers/${urlPath}`
    });
  };

  const openTimeCapsuleForm = () => {
    setModalContent(
      <div>
        <form style={{ textAlign: "center" }}>
          <h4>What did you do today?</h4>
          <textarea id="todayaction" name="todayaction" rows="10" cols="75">
            Your answer
          </textarea>
          <br />
          <h4>Is there anything new that you learned today?</h4>
          <textarea id="todaylearn" name="todaylearn" rows="10" cols="75">
            Your answer
          </textarea>
          <br />
          <h4>How useful was the session?</h4>
          <input type="radio" id="vuseful" name="usefulness" value="vuseful" />
          <label for="vuseful">Very useful</label>
          <br />
          <input type="radio" id="useful" name="usefulness" value="useful" />
          <label for="useful">Useful</label>
          <br />
          <input
            type="radio"
            id="nvuseful"
            name="usefulness"
            value="nvuseful"
          />
          <label for="nvuseful">Not very useful</label>
          <br />
          <input type="submit" />
        </form>
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
      ></Modal>
      <Portal>
        <Title>Lab - Members</Title>
        <br />

        <BeginnerAndIntermediateLabSignUp
          onClick={openBeginnerAndIntermediateLabSignUpModal}
        >
          Sign - up for Beginner/Intermediate Labs
        </BeginnerAndIntermediateLabSignUp>

        <AdvancedAndIntermediateLabSignUp
          onClick={openAdvancedAndIntermediateLabSignUpModal}
        >
          Sign - up for Advanced/Intermediate Labs
        </AdvancedAndIntermediateLabSignUp>

        <OneOnOneSignUp onClick={openOneOnOneSignUpModal}>
          Sign - Up for One-on-One's
        </OneOnOneSignUp>

        <SubmitTimeCapsule onClick={openTimeCapsuleForm}>
          Submit Time Capsules
        </SubmitTimeCapsule>

        <ViewTimeCapsule>View Time Capsules</ViewTimeCapsule>
      </Portal>
    </div>
  );
}
