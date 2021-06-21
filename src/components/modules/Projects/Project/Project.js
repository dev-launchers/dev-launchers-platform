import React from "react";
import Button from "../../../common/Button";
import { withTheme } from "styled-components";

import {
  Wrapper,
  CategoriesContainer,
  CategoryContainer,
  MembersContainer,
  TeamContentContainer
} from "./StyledProject";
import ProjectHero from "./ProjectHero";



import { useProjectsDataContext } from "../../../../context/ProjectsContext";

const truncateText = (text, truncateAt, replaceWith) => {
  if (text.length <= truncateAt) return text;
  return text.slice(0, truncateAt) + replaceWith;
};

const Project = props => {
  const projectsData = useProjectsDataContext([]);
  const [projectData, setProjectData] = React.useState({
    heroImage: "",
    catchPhrase: "",
    keywords: [],
    projectReferenceURLs: [],
    openPositions: [],
    meetingTimes: [],
    meetingLinkURLs: [],
    team: { members: [], leaders: [] }
  });

  React.useEffect(() => {
    if (!projectsData.length) return;
    setProjectData(
      projectsData.filter(entry => {
        return entry.slug == props.projectId;
      })[0]
    );
  }, [projectsData]);

  return (
    <Wrapper>
      <ProjectHero projectData={projectData} />
      <div
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <div
          style={{
            fontFamily: props.theme.fonts.headline,
            marginTop: "4rem",
            marginBottom: "4rem",
            padding: "1rem",
            fontSize: "2.5rem",
            border: "1px solid black"
          }}
        >
          {projectData?.vision}
        </div>
        <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
          <h3 style={{ display: "inline" }}>Description:</h3>{" "}
          {projectData?.description?.split("\n").map((text, i) => (
            <p key={i}> {text} </p>
          ))}
        </div>
        <CategoriesContainer>
          <div>
            {/*}
            <CategoryTitle>
              Project
            </CategoryTitle>
            {*/}
            <CategoryContainer>
              <h4>Project References</h4>
              {projectData?.projectReferenceURLs.map((element, i) => (
                <p key={i}>
                  <a
                    href={element.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {element.title}
                  </a>
                </p>
              ))}
              <h4>Open Positions</h4>
              {projectData?.openPositions.map((element, i) => (
                <p key={i}>
                  <div>{element.title}</div>
                  <p>{element.description}</p>
                </p>
              ))}
            </CategoryContainer>
          </div>
          <div>
            {/*}
            <CategoryTitle>Commitment/Meetings</CategoryTitle>
            {*/}
            <CategoryContainer>
              <h4>Commitment Level</h4>
              <p>{projectData?.commitmentLevel}</p>

              <h4>Meeting Times</h4>
              {projectData?.meetingTimes.map((meeting, i) => (
                <p key={i}>
                  {meeting.title} {meeting.dateTime}
                </p>
              ))}
              <h4>Meeting Links</h4>
              {projectData?.meetingLinkURLs.map((url, i) => (
                <p key={url.id}>
                  <a href={url.url} rel="noopener noreferrer" target="_blank">
                    {url.roomName}
                  </a>
                </p>
              ))}
            </CategoryContainer>
          </div>
        </CategoriesContainer>
        <br />
      </div>
      <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
        <TeamContentContainer>
          <p style={{ width: "50%" }}>
            <h4>Leader(s)</h4>
            <MembersContainer>
              {projectData?.team.leaders.map(leader => (
                <p key={leader.id}>
                  <p>{leader.name}</p>
                  <p>{leader.role}</p>
                  <p>
                    <a href={`mailto:${leader.email}`}>Send Email</a>
                  </p>
                </p>
              ))}
            </MembersContainer>
          </p>

          <p style={{ width: "50%" }}>
            <h4>Members</h4>
            <MembersContainer>
              {projectData?.team.members.map(member => (
                <p key={member.id}>
                  <p>{member.name}</p>
                  <p>{member.role}</p>
                </p>
              ))}
            </MembersContainer>
          </p>
        </TeamContentContainer>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          color: "white"
        }}
      ></div>

      <div
        style={{
          width: "100%",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Button
          rel="noopener noreferrer"
          target="_blank"
          href={projectData?.signupFormUrl}
          style={{
            fontSize: "3rem",
            paddingLeft: "20vw",
            paddingRight: "20vw"
          }}
        >
          JOIN NOW
        </Button>
      </div>
      <div
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "2rem"
        }}
      >
        <a href="/projects">{"<<"} Back to Projects</a>
      </div>
    </Wrapper>
  );
};

export default withTheme(Project);
