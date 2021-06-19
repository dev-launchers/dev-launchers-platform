import React from "react";
import {
  HeroSection,
  CategoryTitle,
  CategoriesContainer,
  CategoryContainer,
  ProjectHero,
  Section,
  ProjectDescription,
  ProjectTitle,
  MembersContainer,
  Actions,
  InfoBar,
} from "./StyledProject";
import Button from "../../../common/Button";
import Tag from "../../../common/Tag";
import { withTheme } from "styled-components";
import Link from "next/link";

import { useProjectsDataContext } from "../../../../context/ProjectsContext";

const truncateText = (text, truncateAt, replaceWith) => {
  if (text.length <= truncateAt) return text;
  return text.slice(0, truncateAt) + replaceWith;
};

const Project = (props) => {
  const projectsData = useProjectsDataContext([]);
  const [projectData, setProjectData] = React.useState({
    heroImage: "",
    catchPhrase: "",
    keywords: [],
    projectReferenceURLs: [],
    openPositions: [],
    meetingTimes: [],
    meetingLinkURLs: [],
    team: { members: [], leaders: [] },
  });

  React.useEffect(() => {
    if (!projectsData.length) return;
    setProjectData(
      projectsData.filter((entry) => {
        return entry.slug == props.projectId;
      })[0]
    );
  }, [projectsData]);

  return (
    <div>
      <ProjectHero
        imageURL={
          "https://cms-api-staging.devlaunchers.com" + projectData?.heroImage?.url
        }
      >
        <HeroSection>
          <ProjectTitle>
            <span>Project</span>
            {projectData?.title}
          </ProjectTitle>
          <ProjectDescription>
            {projectData?.catchPhrase}
          </ProjectDescription>
          <Actions>
            <Button
              rel="noopener noreferrer"
              target="_blank"
              href={projectData?.signupFormURL}
            >
              JOIN NOW
            </Button>
            <Link
              href={{
                pathname: "/support-us",
              }}
              passHref
            >
              <Button bgColor={props.theme.colors.ACCENT_3}>DONATE</Button>
            </Link>
          </Actions>
        </HeroSection>
        <InfoBar>
          <Section position="start" size="1rem">
            {projectData?.keywords.map(({ keyword, id }) => (
              <Tag key={id} text={keyword}></Tag>
            ))}
          </Section>
          <Section position="end" size="3rem">
            {projectData?.projectReferenceURLs.map(({ title, url }) => {
              if (title == "Github Repo")
                return (
                  <a
                    style={{ color: props.theme.colors.NEUTRAL_2 }}
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                );
              else if (title == "Website")
                return (
                  <a
                    style={{ color: props.theme.NEUTRAL_2 }}
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-globe"></i>
                  </a>
                );
            })}
          </Section>
        </InfoBar>
      </ProjectHero>
      <br />
      <CategoriesContainer>
        <div>
          <CategoryTitle /*style={{ marginTop: "clamp(25rem, 25%,35rem)" }}*/>
            Project
          </CategoryTitle>
          <CategoryContainer>
            <h4>Project Vision:</h4>
            <p>{projectData?.vision}</p>
            <h4>Project Description:</h4>
            <p>{projectData?.description}</p>
            <h4>Project Refernces:</h4>
            <ul>
              {projectData?.projectReferenceURLs.map((element, i) => (
                <li key={i}>
                  <a
                    href={element.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {element.title}
                  </a>
                </li>
              ))}
            </ul>
            <h4>Open Positions</h4>
            <ul>
              {projectData?.openPositions.map((element, i) => (
                <li key={i}>
                  {element.title}: {element.description}
                </li>
              ))}
            </ul>
          </CategoryContainer>
        </div>
        <div>
          <CategoryTitle>Commitment/Meetings</CategoryTitle>
          <CategoryContainer>
            <h4>Commitment Level:</h4>
            <p>{projectData?.commitmentLevel}</p>

            <h4>Meeting Times:</h4>
            {projectData?.meetingTimes.map((meeting) => (
              <p>
                {meeting.title} {meeting.dateTime}
              </p>
            ))}
            <h4>Meeting Links:</h4>
            <ul>
              {projectData?.meetingLinkURLs.map((url, i) => (
                <li key={i}>
                  <a href={url} rel="noopener noreferrer" target="_blank">
                    link {++i}
                  </a>
                </li>
              ))}
            </ul>
          </CategoryContainer>
        </div>
        <div>
          <CategoryTitle>Team</CategoryTitle>
          <CategoryContainer>
            <h4>Leader/s:</h4>
            <MembersContainer>
              {projectData?.team.leaders.map((leader) => (
                <li key={leader.id}>
                  <p>{leader.name}</p>
                  <p>{leader.role}</p>
                  <a href={`mailto:${leader.email}`}>Send Email</a>
                </li>
              ))}
            </MembersContainer>

            <h4>Members:</h4>
            <MembersContainer>
              {projectData?.team.members.map((member) => (
                <li key={member.id}>
                  <p>{member.name}</p>
                  <p>{member.role}</p>
                </li>
              ))}
            </MembersContainer>
          </CategoryContainer>
        </div>
      </CategoriesContainer>
      <br />
    </div>
  );
};

export default withTheme(Project);
