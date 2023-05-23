// eslint-disable-next-line no-use-before-define
import React from "react";
import CardGroup from "../CardGroup";
// eslint-disable-next-line import/extensions
import { Group, Wrapper } from "./StyledSection";


const Section = (props) => (
  <Wrapper>
    <h2>{props.title}</h2>
    <div key={`collection${props.title}`}>
      {Object.keys(props.data).map((groupTitle, i) => {
        const group = props.data[groupTitle];
        return (
          <Group key={i}>
            <CardGroup cards={group} title={groupTitle} />
          </Group>
        );
      })}
    </div>
  </Wrapper>
);
export default Section;
