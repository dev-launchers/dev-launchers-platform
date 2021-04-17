import React, { useRef } from "react";

import PageBody from "../../common/PageBody";
import Button from "../../common/Button";

import style from "./MentorshipTiers.module.css";

import IntroArea from "./IntroArea";
import ProgramDescriptionArea from "./ProgramDescriptionArea";
import LevelDescriptionArea from "./LevelDescriptionArea";
import MemberProfilesSlideshow from "./MemberProfilesSlideshow";
import SignUpForm from "./SignUpForm";
import PhotoHolder from "./PhotoHolder";

// General scroll-to function
const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

export default function MentorshipTiers() {
  // Scroll-to functions
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <div>
      <IntroArea scrollToFormFunc={executeScroll} />
      <ProgramDescriptionArea />
      <div className="scrollToDiv" ref={myRef} style={{ height: "0" }} />
      <SignUpForm />
      <MemberProfilesSlideshow />
      <LevelDescriptionArea scrollToFormFunc={executeScroll} />
      <PhotoHolder />
    </div>
  );
}
