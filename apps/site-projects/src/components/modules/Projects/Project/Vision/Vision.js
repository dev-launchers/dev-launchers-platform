import React from "react";
import { useTheme, withTheme } from "styled-components";
import Section from "../Section";
import { Wrapper, ButtonsContainer, Button } from "./StyledVision";
import Link from "next/link";

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
        <Link href="../join" passHref>
          <Button
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-info"></i> Join Now
          </Button>
          <Link href="../support-us" passHref>
            <Button
              style={{ cursor: "pointer" }}
              bgColor={theme?.colors?.ACCENT_2}
            >
              <i className="fas fa-coins"></i> Donate
            </Button>
          </Link>
        </ButtonsContainer>
      </Wrapper>
    }
  />
);
};
export default withTheme(Vision);
