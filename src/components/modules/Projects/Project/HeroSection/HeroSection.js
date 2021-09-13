import React from "react";
import { withTheme } from "styled-components";
// import Link from "next/link";

import Image from "next/image";
// import Button from "../../../../common/Button";
// import Tag from "../../../../common/Tag";
// import SignUpButton from "../SignUpButton";
import { Wrapper } from "./StyledHeroSection";

// import { env } from "../../../../../utils/EnvironmentVariables";

const HeroSection = () => (
  <Wrapper>
    <h2>Dev Launchers Platform</h2>
    <span>The Dev Launchers mission at scale!</span>
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        marginTop: "2rem",
      }}
    >
      <Image
        src="https://devlaunchersproduction.blob.core.windows.net/strapi/assets/photo_1487014679447_9f8336841d58_c912a4c559.jpg"
        layout="fill"
        alt="project's image"
        objectFit="cover"
      />
    </div>
  </Wrapper>
);

export default withTheme(HeroSection);
