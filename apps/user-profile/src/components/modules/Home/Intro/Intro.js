import React from "react";
import { withTheme } from "styled-components";
import FlexPageSection from "../../../common/FlexPageSection";
import RainbowBar from "../../../common/RainbowBar";

import {
  CenteredTitle,
  CenteredIntro,
  Wrapper,
  IntroDescriptionWrapper,
  IntroSummaryBox,
  IntroDescription,
} from "./StyledIntro";

function Intro({ theme }) {
  return (
    <FlexPageSection>
      <Wrapper>
        <CenteredTitle>
          Keeping tech{" "}
          <span
            style={{
              backgroundColor: "#1c1c1c",
              color: "#f0edee",
              fontSize: "5rem",
              paddingLeft: ".3rem",
              paddingRight: ".3rem",
            }}
          >
            human
          </span>
        </CenteredTitle>
        {/* <CenteredIntro>
          
          Build your foundation with us, a{" "}
          <span
            style={{
              fontWeight: 900,
              fontSize: "1.8rem",
            }}
          >
            nonprofit organization aimed at bridging opportunity gaps in the
            technology industry.
          </span>{" "}
          Every great building begins with a solid foundation. We&apos;ve
          dedicated ourselves to building great people.
          <CenteredIntro />
        </CenteredIntro> */}
        <RainbowBar width="60%" />
        <IntroDescriptionWrapper>
          <IntroSummaryBox>
            <div>The Dev Launchers formula:</div>
            <div
              style={{
                fontSize: "3rem",
              }}
            >
              <div
                style={{
                  color: theme.colors.ACCENT_2,
                }}
              >
                Projects
              </div>
              <div
                style={{
                  color: theme.colors.ACCENT_4,
                }}
              >
                +Learners
              </div>
              <div
                style={{
                  color: theme.colors.ACCENT_3,
                }}
              >
                +Leaders
              </div>
            </div>
          </IntroSummaryBox>
          <IntroDescription>
            <ol
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                fontSize: "2rem",
                marginTop: "0",
              }}
            >
              <li>
                Dev Launchers builds open source{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: theme.colors.ACCENT_2,
                    textDecorationThickness: ".4rem",
                    textUnderlineOffset: ".1rem",
                  }}
                >
                  software projects led by professionals
                </span>
              </li>
              <li>
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: theme.colors.ACCENT_4,
                    textDecorationThickness: ".4rem",
                    textUnderlineOffset: ".1rem",
                  }}
                >
                  New developers join agile teams
                </span>{" "}
                to work and learn in a supportive environment
              </li>
              <li>
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: theme.colors.ACCENT_3,
                    textDecorationThickness: ".4rem",
                    textUnderlineOffset: ".1rem",
                  }}
                >
                  Dev Launchers runs weekly workshops
                </span>{" "}
                to provide experience for leaders and learners while working on
                impactful projects
              </li>
            </ol>
          </IntroDescription>
        </IntroDescriptionWrapper>
      </Wrapper>
    </FlexPageSection>
  );
}
export default withTheme(Intro);
