import React from "react";
import CardGroup from "../CardGroup";
import { Group, Wrapper } from "./StyledSection";

export default function Section(props) {
  return (
    <Wrapper>
      <h2>{props.title}</h2>
      <div key={"collection" + props.title}>
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
}
