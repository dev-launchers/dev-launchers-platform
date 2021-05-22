import React from "react";
import { openPopupWidget } from "react-calendly";
import { Portal, Title, SignUpButton } from "./StyledLabMember";

export default function LabMember() {
  const openModal = urlPath => {
    openPopupWidget({
      url: `https://calendly.com/devlaunchers/${urlPath}`
    });
  };

  return (
    <Portal>
      <Title>Lab - Members</Title>
      <br />
      <SignUpButton onClick={() => openModal("saturday-lab-beginner-devs")}>
        Sign Up for a Beginner Dev Lab Session
      </SignUpButton>
      <SignUpButton onClick={() => openModal("saturday-lab-web-app-dev")}>
        Sign Up for a Dev Launchers Projects Lab Session
      </SignUpButton>
      <SignUpButton onClick={() => openModal("saturday-lab-game-devs")}>
        Sign Up for a Personal Projects Lab Session
      </SignUpButton>
      <SignUpButton onClick={() => openModal("60min")}>
        Sign Up for a One-on-One
      </SignUpButton>
    </Portal>
  );
}
