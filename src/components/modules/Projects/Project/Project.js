/* eslint-disable no-unused-vars */
import React from "react";
import Link from "next/link";
import { withTheme } from "styled-components";
import { useRouter } from "next/router";
import Button from "../../../common/Button";

import {
  Wrapper,
  CategoriesContainer,
  CategoryContainer,
} from "./StyledProject";
import ProjectHero from "./ProjectHero";
import OpenPositions from "./OpenPositions";
import Team from "./Team";

// eslint-disable-next-line no-unused-vars
const truncateText = (text, truncateAt, replaceWith) => {
  if (text.length <= truncateAt) return text;
  return text.slice(0, truncateAt) + replaceWith;
};

const Project = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Wrapper>
      <ProjectHero projectData={props} />
      <div
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            fontFamily: props.theme.fonts.headline,
            marginTop: "4rem",
            marginBottom: "4rem",
            padding: "1rem",
            fontSize: "2.5rem",
            border: "1px solid black",
          }}
        >
          {props?.vision}
        </div>
        <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
          <h3 style={{ display: "inline" }}>Description:</h3>{" "}
          {props?.description?.split("\n")?.map((text, i) => (
            <p key={i}> {text} </p>
          ))}
        </div>
        <CategoriesContainer>
          <div>
            {/* }
            <CategoryTitle>
              Project
            </CategoryTitle>
            { */}
            <CategoryContainer>
              <h4>Commitment Level</h4>
              <p>{props?.commitmentLevel}</p>

              <h4>Project References</h4>
              {props?.projectReferenceURLs?.map((element, i) => (
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
            </CategoryContainer>
          </div>
          <div>
            {/* }
            <CategoryTitle>Commitment/Meetings</CategoryTitle>
            { */}
            <CategoryContainer>
              <h4>Meeting Times</h4>
              {props?.meetingTimes?.map((meeting, i) => (
                <p key={i}>
                  {meeting.title} {meeting.dateTime}
                </p>
              ))}
              <h4>Meeting Links</h4>
              {props?.meetingLinkURLs?.map((url) => (
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
      {props.openPositions.length ? (
        <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
          <OpenPositions projectData={props} />
        </div>
      ) : (
        ""
      )}
      {props.team.leaders.length || props.team.members.length ? (
        <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
          <Team projectData={props} />
        </div>
      ) : (
        ""
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          color: "white",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          rel="noopener noreferrer"
          target="_blank"
          href={props?.signupFormUrl}
          style={{
            fontSize: "3rem",
            paddingLeft: "20vw",
            paddingRight: "20vw",
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
          marginBottom: "2rem",
        }}
      >
        <Link href="/projects" passHref>
          <a>{"<<"} Back to Projects</a>
        </Link>
      </div>
    </Wrapper>
  );
};

export default withTheme(Project);
