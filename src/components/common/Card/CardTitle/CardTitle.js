import React from "react";

import { Heading, Title } from "./StyledCardTitle.js";

export default function CardTitle({ data, attachment }) {
  return (
    <Heading
      cardTitleAlignment={data.titleAlignment}
      cardTitleSize={data.titleSize}
      cardTitleUnderline={{
        color: data.titleUnderlineColor,
        thickness: data.titleUnderlineThickness,
        type: data.titleUnderlineType
      }}
    >
      <Title href={data.href}>{data.title}</Title>
      {attachment && (
        <a href={data.repoUrl} target="_blank">
          <img src={"images/GitHub-Mark-Light-32px.png"} />
        </a>
      )}
    </Heading>
  );
}
