import React from "react";
import FlexPageSection from "../../../../components/common/FlexPageSection";

import { CenteredTitleUnderline, Wrapper } from "./StyledIntro";

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
              justifyContent: "flex-start"
            }}
          >
            <div>The Dev Launchers formula:</div>
            <div style={{ fontSize: "3rem" }}>
              <div>Projects</div>
              <div>+Learners</div>
              <div>+Leaders</div>
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
                Dev Launchers builds open source software projects led by
                professionals
              </li>
              <li>
                New developers join project teams to work and learn in a
                supportive environment
              </li>
              <li>
                Dev Launchers runs weekly workshops to provide experience for
                leaders and learners while working on their projects
              </li>
            </ol>
          </div>
        </div>
      </Wrapper>
    </FlexPageSection>
  );
}
