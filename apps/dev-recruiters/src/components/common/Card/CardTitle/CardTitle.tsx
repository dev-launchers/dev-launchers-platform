import Link from "next/link";
import Image from "next/image";
import React from "react";

import { Heading, Title } from "./StyledCardTitle";

interface Props {
  data?: {
    titleAlignment?: string;
    titleSize?: string;
    titleUnderlineColor?: string;
    titleUnderlineThickness?: string;
    titleUnderlineType?: string;
    href?: string;
    title?: string;
    repoUrl?: string;
  };
  attachment?: boolean;
  isLinkingInside?: boolean;
  pathname?: string;
}

export default function CardTitle({
  data,
  attachment,
  isLinkingInside,
  pathname,
}: Props) {
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
        <Link href={`${pathname}${data.href}`} passHref>
          <Title>{data.title}</Title>
        </Link>
      ) : (
        <Title target="_blank" href={data.href}>
          {data.title}
        </Title>
      )}

      {attachment && (
        <a title="github" href={data.repoUrl} target="_blank" rel="noreferrer">
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
