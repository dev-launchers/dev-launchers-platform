import React from "react";
import { withTheme } from "styled-components";
import { Wrapper, TeamContentContainer, MembersContainer } from "./StyledTeam";
// import { env } from "../../../../../utils/EnvironmentVariables";

const Team = (props) => {
  const { projectData } = props;

  return (
    <Wrapper>
      <h4>
        <u>Team</u>
      </h4>
      <TeamContentContainer>
        <p style={{ width: "50%" }}>
          <h4>Leader(s)</h4>
          <MembersContainer>
            {projectData?.team.leaders.map((leader) => (
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
            {projectData?.team.members.map((member) => (
              <p key={member.id}>
                <p>{member.name}</p>
                <p>{member.role}</p>
              </p>
            ))}
          </MembersContainer>
        </p>
      </TeamContentContainer>
    </Wrapper>
  );
};

export default withTheme(Team);
