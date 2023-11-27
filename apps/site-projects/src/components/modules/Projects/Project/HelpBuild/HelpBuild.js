import React from "react";
import { withTheme } from "styled-components";
import Section from "../Section";
import { Wrapper, ButtonsContainer, Button } from "./StyledHelpBuild";

const HelpBuild = () => (
  <Section
    bgColor="#494949"
    contentStyle={{ paddingBottom: 0 }}
    Title=""
    Content={
      <Wrapper>
        <h3>Join our mission!</h3>
        <p>
          We are looking for sponsors to fund the financial costs of different
          operations, with your help we can build a better product!
        </p>

        <ButtonsContainer>
          <Button
            bgColor="#4A9D48"
            href={process.env.NEXT_PUBLIC_FRONT_END_URL + "/c/sponsorship/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-coins"></i> Become a sponsor
          </Button>
        </ButtonsContainer>
      </Wrapper>
    }
  />
);

export default withTheme(HelpBuild);
