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
        projectName={project.title}
        projectCatchPhrase={project.catchPhrase}
        heroImage={project?.heroImage}
      />
      <Tags tags={project?.interests} />
      <Vision
        vision={project?.vision || ""}
        scrollMethods={{
          scrollToRoles: () => excuteScroll(roleRef),
          scrollToDonate: () => excuteScroll(donateRef),
        }}
      />
      <Description
        description={project?.description}
        images={project?.images}
      />
      <Role ref={roleRef} data={project?.opportunities} projectSlug={project.slug} />
      <Milestones data={project?.board?.ProjectMilestone} />
      {<Sessions calendarId={project?.calendarId} />}
      <Team data={project?.team} />
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
