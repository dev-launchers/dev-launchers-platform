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
      <SignUpButton onClick={() => openModal("saturday-lab-2")}>
        Sign - up for Beginner/Intermediate Labs
      </SignUpButton>
      <SignUpButton onClick={() => openModal("saturday-lab-1")}>
        Sign - up for Advanced/Intermediate Labs
      </SignUpButton>
      <SignUpButton onClick={() => openModal("60min")}>
        Sign - Up for One-on-One's
      </SignUpButton>
    </Portal>
  );
}
