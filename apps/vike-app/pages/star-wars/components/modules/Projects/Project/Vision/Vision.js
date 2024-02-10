import React from "react";
import { useTheme, withTheme } from "styled-components";
import Section from "../Section";
import { Wrapper, ButtonsContainer, Button } from "./StyledVision";

const Vision = ({ scrollMethods,vision }) => {
  const theme = useTheme()
  if (vision === ""){
    return null;
  }
  return(
  <Section
    bgColor="#3A7CA5"
    Title="Vision"
    Content={
      <Wrapper>
        <p>
          {vision}
        </p>
        <ButtonsContainer>
          <Button
            style={{ cursor: "pointer" }}
            onClick={scrollMethods.scrollToRoles}
          >
            <i className="fas fa-info"></i> Join Now
          </Button>
          <Button
            style={{ cursor: "pointer" }}
            onClick={scrollMethods.scrollToDonate}
            bgColor={theme?.colors?.ACCENT_2}
          >
            <i className="fas fa-coins"></i> Donate
          </Button>
        </ButtonsContainer>
      </Wrapper>
    }
  />
);
};
export default withTheme(Vision);
