import React from "react";
import {
  HeroSection,
  CategoryTitle,
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

const truncateText = (text, truncateAt, replaceWith) => {
  if (text.length <= truncateAt) return text;
  return text.slice(0, truncateAt) + replaceWith;
};

const Project = (props) => {
  console.log(props);
  return (
    <div>
      <ProjectHero imageURL={props.imageURL}>
        <HeroSection>
          <ProjectTitle>
            <span>Project</span>
            {props.title}
          </ProjectTitle>
          <ProjectDescription>
            {truncateText(props.description, 100, "...")}
          </ProjectDescription>
          <Actions>
            <Button
              rel="noopener noreferrer"
              target="_blank"
              href={props.signupFormURL}
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
            <Tag text={eval(props.keywords)[0]} />
            <Tag text={eval(props.keywords)[1]} />
          </Section>
          <Section position="end" size="3rem">
            {eval(props.projectReferenceURLs).map(({ title, url }) => {
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
      <CategoryTitle /*style={{ marginTop: "clamp(25rem, 25%,35rem)" }}*/>
        Project
      </CategoryTitle>
      <CategoryContainer>
        <h4>Project Vision:</h4>
        <p>{props.vision}</p>
        <h4>Project Description:</h4>
        <p>{props.description}</p>
        <h4>Project Refernces:</h4>
        <ul>
          {eval(props.projectReferenceURLs).map((element, i) => (
            <li key={i}>
              <a href={element.url} rel="noopener noreferrer" target="_blank">
                {element.title}
              </a>
            </li>
          ))}
        </ul>
        <h4>Open Positions</h4>
        <ul>
          {eval(props.openPositions).map((element, i) => (
            <li key={i}>
              {element.title}: {element.description}
            </li>
          ))}
        </ul>
      </CategoryContainer>
      <CategoryTitle>Commitment/Meetings</CategoryTitle>
      <CategoryContainer>
        <h4>Commitment Level:</h4>
        <p>{props.commitmentLevel}</p>

        <h4>Meeting Times:</h4>
        <p>{props.meetingTimes}</p>
        <h4>Meeting Links:</h4>
        <ul>
          {eval(props.meetingLinkURLs).map((url, i) => (
            <li key={i}>
              <a href={url} rel="noopener noreferrer" target="_blank">
                link {++i}
              </a>
            </li>
          ))}
        </ul>
      </CategoryContainer>
      <CategoryTitle>Team</CategoryTitle>
      <CategoryContainer>
        <h4>Leader/s:</h4>
        <MembersContainer>
          {eval(props.leaders).map((leader) => (
            <li>
              <p>{leader.name}</p>
              <p>{leader.role}</p>
              <a href={`mailto:${leader.email}`}>Send Email</a>
            </li>
          ))}
        </MembersContainer>

        <h4>Members:</h4>
        <MembersContainer>
          {eval(props.members).map((member) => (
            <li>
              <p>{member.name}</p>
              <p>{member.role}</p>
            </li>
          ))}
        </MembersContainer>
      </CategoryContainer>
      <br />
    </div>
  );
};

export default withTheme(Project);
