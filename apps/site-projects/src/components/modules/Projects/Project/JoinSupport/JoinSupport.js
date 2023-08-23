import Link from "next/link";
import React, { forwardRef } from "react";
import { withTheme } from "styled-components";
import Section from "../Section";
import { Wrapper, ButtonsContainer, Button } from "./StyledJoinSupport";

const JoinSupport = ({ theme, scrollMethods }, ref) => (
  <Section
    bgColor="#3A7CA5"
    Title=""
    contentStyle={{ paddingBottom: 0 }}
    ref={ref}
    Content={
      <Wrapper>
        <h3>Join and support this project!</h3>
        <p>
          Our platform is being developed by a core group of our members: a team
          of people from a wide range of backgrounds and skill levels who are
          all learning while building.
        </p>
        <ButtonsContainer>
          <Link href="../join" passHref>
            <Button
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-info"></i> Join Now
            </Button>
          </Link>

          <Link href="../support-us" passHref>

            <Button bgColor={theme?.colors?.YELLOW}>
              <i className="fas fa-coins"></i> Donate
            </Button>
          </Link>
        </ButtonsContainer>
      </Wrapper>
    }
  />
);

export default withTheme(forwardRef(JoinSupport));
