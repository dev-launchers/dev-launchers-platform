import Link from "next/link";
import React from "react";
import Tag from "../../Tag";

import { Heading, Title } from "./StyledCardTitle.js";

export default function CardTitle({ data, attachment, isLinkingInside, pathname }) {
  return (
    <Heading
      cardTitleAlignment={data.titleAlignment}
      cardTitleSize={data.titleSize}
      cardTitleUnderline={{
        color: data.titleUnderlineColor,
        thickness: data.titleUnderlineThickness,
        type: data.titleUnderlineType,
      }}
    >
      {isLinkingInside ? (
        <Link href={pathname + "/" + data.href} passHref>
          <Title>{data.title}</Title>
        </Link>
      ) : (
        <Title target="_blank" href={data.href}>
          {data.title}
        </Title>
      )}

      {attachment && (
        <a href={data.repoUrl} target="_blank">
          <img src={"images/GitHub-Mark-Light-32px.png"} />
        </a>
      )}
      {data.tags && (
        <>
          <Tag filled text={eval(data.tags)[0]} />
          <Tag filled text={eval(data.tags)[1]} />
        </>
      )}
    </Heading>
  );
}
