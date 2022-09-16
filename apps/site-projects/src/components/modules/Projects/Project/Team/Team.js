import React from "react";
import { withTheme } from "styled-components";
import {
  TeamContentBlock,
  MembersContainer , MemberImage ,
} from "./StyledTeam";
import Section from "../Section";

const Team = ({ data }) => (
  <Section
    bgColor="#494949"
    Title="Team"
    Content={data.leaders.length && data.members.length ? 
      <TeamContentBlock>
        <div>
          <h4>Leaders</h4>
          <MembersContainer>
            {data.leaders?.map((leader) => (
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
                        src={leader.profile?.profilePictureUrl}
                        // src="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
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
                  <span>{leader.profile?.displayName}</span>
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
            {data.members?.map((member) => (
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
                        src={member.profile?.profilePictureUrl}
                        // src="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
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
                  <span>{member.profile?.displayName}</span>
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </MembersContainer>
        </div>
      </TeamContentBlock>
      : "Currently no members!"
    }
  />
);

export default withTheme(Team);
