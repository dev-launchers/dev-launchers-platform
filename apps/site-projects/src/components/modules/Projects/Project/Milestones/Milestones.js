import React from "react";
import { withTheme } from "styled-components";
import Section from "../Section";
import MilestoneSlider from "./MilestoneSlider";

const Milestones = ({ data }) =>
  !!data?.length && (
    <Section
      bgColor="#E5E5E5"
      txtColor
      Title="Milestones"
      Content={
        <MilestoneSlider
          milestones={data}
          slidesToShow={1}
          isCyclic={true}
          isAutoplay={true}
        />
      }
    />
  );

export default withTheme(Milestones);
