import React from "react";
import { withTheme } from "styled-components";
// import Link from "next/link";

import Image from "next/legacy/image";
// import Button from "../../../../common/Button";
// import Tag from "../../../../common/Tag";
// import SignUpButton from "../SignUpButton";
import { Wrapper } from "./StyledHeroSection";

// import { env } from "../../../../../utils/EnvironmentVariables";

const HeroSection = ({ projectName, projectCatchPhrase, heroImage }) => {
  const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  const heroImageConfig = heroImage?.data?.attributes?.formats?.large || heroImage?.data?.attributes;
  const imageUrl = process.env.NEXT_PUBLIC_NAME == "DEVELOPMENT" ? process.env.NEXT_PUBLIC_API_BASE_URL + heroImageConfig.url : heroImageConfig?.url
  return (
    <Wrapper>
      <h2>{projectName}</h2>
      <span>{projectCatchPhrase}</span>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "25rem",
          marginTop: "2rem",
        }}
      >
        <Image
          src={imageUrl}
          // height={heroImageConfig.height}
          // width={heroImageConfig.width}
          layout="fill"
          alt="project's image"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(heroImageConfig?.width, heroImageConfig?.height)
          )}`}
        />
      </div>
    </Wrapper>
  );
};

export default withTheme(HeroSection);
