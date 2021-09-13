import React from "react";
import { withTheme } from "styled-components";
import Section from "../Section";
import { Wrapper, ButtonsContainer, Button } from "./StyledVision";

const Vision = ({ Color, theme }) => (
  <Section
    Color={Color}
    Title="Vision"
    Content={
      <Wrapper>
        <p>
          An online platform democratizing access to learning tech-ready skills
          by acting as a one-stop-shop for bootstrapping or joining software
          projects, and helping members to contribute meaningfully while gaining
          industry ready experience.
        </p>
        <ButtonsContainer>
          <Button>
            <i className="fas fa-info"></i> Join Now
          </Button>
          <Button bgColor={theme.colors.ACCENT_2}>
            <i className="fas fa-coins"></i> Donate
          </Button>
        </ButtonsContainer>
      </Wrapper>
    }
  />
);

export default withTheme(Vision);
