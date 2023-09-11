/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
// import Link from "next/link";
// import Image from "next/image";
import { DateTime } from 'luxon';
import { withTheme } from 'styled-components';
import { useRouter } from 'next/router';
import Button from '../../../common/Button';

import { Wrapper } from './StyledProject';
// import OpenPositions from "./OpenPositions";
import Team from './Team';
// import SignUpButton from "./SignUpButton";

import HeroSection from './HeroSection';
import EditorNotification from './EditorNotification';
import Tags from './Tags';
import Vision from './Vision';
import Role from './Role/Role';
import Description from './Description/Description';
import Milestones from './Milestones';
import JoinSupport from './JoinSupport';
import HelpBuild from './HelpBuild';
import Sessions from './Sessions';
import { useUserDataContext } from "@devlaunchers/components/context/UserDataContext";

function isOnTeam(id, team) {
  const leadersIds = team.leaders.map((leader) => leader.id);
  const membersIds = team.members.map((member) => member.id);

  return leadersIds.includes(id) || membersIds.includes(id);
}

function hasPassedOneMonth(dateString) {
  const currentDate = DateTime.local();
  const completionDate = DateTime.fromISO(dateString);

  const oneMonthLater = completionDate.plus({ months: 1 });

  return currentDate >= oneMonthLater;
}

const Project = ({ project, theme }) => {
  const router = useRouter();
  const roleRef = useRef();
  const donateRef = useRef();

  const excuteScroll = (ref) =>
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const userData = useUserDataContext();

  const checkIfIsOnTeam = isOnTeam(userData.userData.id, project.team);
  const isLogged = userData.userData.id === 0 ? false : true;
  const milestoneIsOutdated = project.board?.ProjectMilestone[0]?.task[0] ? 
                                  hasPassedOneMonth(
                                    project.board?.ProjectMilestone[0]?.task[0]?.completionDate
                                  ) 
                                  : 
                                  false;

  return (
    <Wrapper>
      <div id="background" />
      <EditorNotification project={project} />
      <HeroSection
        projectName={project.attributes.title}
        projectCatchPhrase={project.attributes.catchPhrase}
        heroImage={project.attributes?.heroImage}
      />
      <Tags tags={project?.attributes.interests} />
      <Vision
        vision={project?.vision || ''}
        scrollMethods={{
          scrollToRoles: () => excuteScroll(roleRef),
          scrollToDonate: () => excuteScroll(donateRef),
        }}
      />
      <Description
        description={project?.attributes.description}
        images={project?.attributes.images}
      />

      {/*}<Role ref={roleRef} data={project?.opportunities} projectSlug={project.slug} />{*/}
      {isLogged && checkIfIsOnTeam ? (
        <>
          {!milestoneIsOutdated ? (
            <Milestones data={project?.board?.ProjectMilestone} />
          ) : null}
          <Sessions calendarId={project.calendarId} />
        </>
      ) : null}
      <Team data={project.team} />
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
