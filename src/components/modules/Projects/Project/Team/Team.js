import React from "react";
import { withTheme } from "styled-components";
import { TeamContentBlock, MembersContainer, MemberImage } from "./StyledTeam";
import Section from "../Section";
// import boyFrontImage from "../../../../../images/people-cutouts/boy-front.png?webp";

const Team = () => {
  const team = {
    leaders: [
      {
        id: 1,
        name: "mohammed maqbol",
        role: "React Developer",
        email: "email@email.com",
      },
    ],
    members: [
      {
        id: 1,
        name: "mohammed maqbol",
        role: "React Developer",
        email: "email@email.com",
      },
      {
        id: 1,
        name: "maqbol mohammed ",
        role: "React Developer",
        email: "email@email.com",
      },
    ],
  };
  return (
    <Section
      Color="#494949"
      Title="Team"
      Content={
        <TeamContentBlock>
          <div>
            <h4>Leaders</h4>
            <MembersContainer>
              {team.leaders.map((leader) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  key={leader.id}
                >
                  <span>
                    <a href="#">
                      <MemberImage
                        // src={boyFrontImage}
                        // src={leader.image}
                        src="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
                        width="140"
                        height="140"
                        alt="Image of Team member"
                      ></MemberImage>
                    </a>
                  </span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <span>{leader.name}</span>
                    <span>{leader.role}</span>
                    <span>
                      <a href={`mailto:${leader.email}`}>Send Email</a>
                    </span>
                  </div>
                </div>
              ))}
            </MembersContainer>
          </div>
          <div>
            <h4>Members</h4>
            <MembersContainer>
              {team.members.map((member) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  key={member.id}
                >
                  <span>
                    <a href="#">
                      <MemberImage
                        //  src={boyFrontImage}
                        // src={member.image}
                        src="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
                        width="140"
                        height="140"
                        alt="Image of Team member"
                      ></MemberImage>
                    </a>
                  </span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <span>{member.name}</span>
                    <span>{member.role}</span>
                  </div>
                </div>
              ))}
            </MembersContainer>
          </div>
        </TeamContentBlock>
      }
    />
  );
};

export default withTheme(Team);
