import React from "react";
import FlexPageSection from "../../../../components/common/FlexPageSection";

import { CenteredTitleUnderline, Wrapper } from "./StyledIntro";

import theme from "../../../../styles/theme.js";

export default function Intro() {
  return (
    <FlexPageSection>
      <Wrapper>
        <CenteredTitleUnderline>
          Keeping tech{" "}
          <span
            style={{
              backgroundColor: "#1c1c1c",
              color: "#f0edee",
              fontSize: "5rem",
              paddingLeft: ".3rem",
              paddingRight: ".3rem"
            }}
          >
            human
          </span>
        </CenteredTitleUnderline>
        <div
          style={{
            marginTop: "1rem",
            width: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <div
            style={{
              fontFamily: "Abel",
              width: "20%",
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: theme.colors.NEUTRAL_1,
              color: theme.colors.NEUTRAL_2,
              paddingRight: "1rem",
              fontSize: "1rem"
            }}
          >
            <div>The Dev Launchers formula:</div>
            <div
              style={{
                fontSize: "3rem"
              }}
            >
              <div
                style={{
                  color: theme.colors.ACCENT_2
                }}
              >
                Projects
              </div>
              <div
                style={{
                  color: theme.colors.ACCENT_4
                }}
              >
                +Learners
              </div>
              <div
                style={{
                  color: theme.colors.ACCENT_3
                }}
              >
                +Leaders
              </div>
            </div>
          </div>
          <div style={{ width: "65%", textAlign: "left" }}>
            <ol
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                fontSize: "2rem",
                marginTop: "0"
              }}
            >
              <li>
                Dev Launchers builds open source{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: theme.colors.ACCENT_2,
                    textDecorationThickness: ".4rem",
                    textUnderlineOffset: ".1rem"
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
                    textUnderlineOffset: ".1rem"
                  }}
                >
                  New developers join project teams
                </span>{" "}
                to work and learn in a supportive environment
              </li>
              <li>
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: theme.colors.ACCENT_3,
                    textDecorationThickness: ".4rem",
                    textUnderlineOffset: ".1rem"
                  }}
                >
                  Dev Launchers runs weekly workshops
                </span>{" "}
                to provide experience for leaders and learners while working on
                their projects
              </li>
            </ol>
          </div>
        </div>
      </Wrapper>
    </FlexPageSection>
  );
}
