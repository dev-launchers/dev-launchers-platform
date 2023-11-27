/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
import { withTheme } from "styled-components";
import { useRouter } from "next/router";
import Button from "../../../common/Button";

import { Wrapper } from "./StyledProject";
// import OpenPositions from "./OpenPositions";
import Team from "./Team";
// import SignUpButton from "./SignUpButton";

import HeroSection from "./HeroSection";
import EditorNotification from "./EditorNotification";
import Tags from "./Tags";
import Vision from "./Vision";
import Description from "./Description/Description";
import Milestones from "./Milestones";
import JoinSupport from "./JoinSupport";
import HelpBuild from "./HelpBuild";
import Sessions from "./Sessions";
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import Role from "./Role/Role";

const Project = ({ project, theme }) => {
  const router = useRouter();
  const roleRef = useRef();
  const donateRef = useRef();

  const excuteScroll = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const userData = useUserDataContext();

  return (
    <Wrapper>
      <div id="background" />
			<EditorNotification project={project}	/>
      <HeroSection
        projectName={project.attributes.title}
        projectCatchPhrase={project.attributes.catchPhrase}
        heroImage={project.attributes?.heroImage}
      />
      <Tags tags={project?.attributes.interests} />
      <Vision
        vision={project?.attributes.vision || ""}
        scrollMethods={{
          scrollToRoles: () => excuteScroll(roleRef),
          scrollToDonate: () => excuteScroll(donateRef),
        }}
      />
      <Description
        description={project?.attributes.description}
        images={project?.attributes.images}
      />
      <Role ref={roleRef} data={project?.attributes?.opportunities?.attributes} projectSlug={project.attributes.slug} />
      <Milestones data={project?.attributes.board?.ProjectMilestone} />
      {<Sessions calendarId={project.attributes.calendarId} />}
      <Team data={project.attributes?.team} />
      <JoinSupport
        ref={donateRef}
        scrollMethods={{
          scrollToRoles: () => excuteScroll(roleRef),
        }}
      />
      <HelpBuild />
    </Wrapper>
  );
};

export default withTheme(Project);
