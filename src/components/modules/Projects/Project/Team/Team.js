import React from "react";
import { withTheme } from "styled-components";
import {
  Wrapper,
  TeamContentBlock,
  MembersContainer,
  MemberImage,
} from "./StyledTeam";
// import boyFrontImage from "../../../../../images/people-cutouts/boy-front.png?webp";

const Team = (props) => {
  const { projectData } = props;
  return (
    <Wrapper>
      <h4>
        <u>Team</u>
      </h4>
      <TeamContentBlock>
        <p>
          <h4> Project Leader(s)</h4>
          <MembersContainer>
            {projectData?.team.leaders.map((leader) => (
              <p key={leader.id}>
                <li>
                  <a href="#">
                    <MemberImage
                      // src={boyFrontImage}
                      src={leader.image}
                      alt="Image of Team member"
                    ></MemberImage>
                  </a>
                </li>
                <li>{leader.name}</li>
                <li>Role:{leader.role}</li>
                <li>
                  <a href={`mailto:${leader.email}`}>Send Email</a>
                </li>
              </p>
            ))}
          </MembersContainer>
        </p>
        <p>
          <h4>Team Members</h4>
          <MembersContainer>
            {projectData?.team.members.map((member) => (
              <p key={member.id}>
                <li>
                  <a href="#">
                    <MemberImage
                      //  src={boyFrontImage}
                      src={member.image}
                      alt="Image of Team member"
                    ></MemberImage>
                  </a>
                </li>
                <li>{member.name}</li>
                <li>Role:{member.role}</li>
              </p>
            ))}
          </MembersContainer>
        </p>
      </TeamContentBlock>
    </Wrapper>
  );
};

export default withTheme(Team);
