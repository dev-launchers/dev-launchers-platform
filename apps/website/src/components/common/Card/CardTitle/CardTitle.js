import Link from "next/link";
import Image from "next/legacy/image";
import React from "react";

import { Heading, Title } from "./StyledCardTitle";

export default function CardTitle({
  data,
  attachment,
  isLinkingInside,
  pathname,
}) {
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
        <Link href={`${pathname}/${data.href}`} passHref legacyBehavior>
          <Title>{data.title}</Title>
        </Link>
      ) : (
        <Title target="_blank" href={data.href}>
          {data.title}
        </Title>
      )}

      {attachment && (
        <a href={data.repoUrl} target="_blank" rel="noreferrer">
          <Image
            alt="github"
            height="32"
            width="32"
            src={"images/GitHub-Mark-Light-32px.png?webp"}
          />
        </a>
      )}
    </Heading>
  );
}
