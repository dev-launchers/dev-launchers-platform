import React, { useEffect } from "react";
import Link from "next/link";
import { withTheme } from "styled-components";
import { useProjectsDataContext } from "../../../context/ProjectsContext";
import {
  FeaturedBar,
  ColorBlock,
  ProjectArea,
  ProjectCard
} from "./StyledFeaturedProjects";
import Card from "../../common/Card";
import { env } from "../../../utils/EnvironmentVariables";

const FeaturedProjects = props => {
  const projects = useProjectsDataContext();

  function randomize(arr, numOfItems = 2) {
    const res = [];
    for (let i = 0; i < numOfItems; ) {
      const random = Math.floor(Math.random() * arr.length);
      if (res.indexOf(arr[random]) !== -1) {
        continue;
      }
      res.push(arr[random]);
      i++;
    }
    return res;
  }

  const arr = randomize(projects, 2);

  return (
    <div>
      <FeaturedBar>
        <ColorBlock
          style={{
            backgroundColor: props.theme.colors.ACCENT_1
          }}
        ></ColorBlock>
        <ColorBlock
          style={{
            backgroundColor: props.theme.colors.ACCENT_2
          }}
        ></ColorBlock>
        <ColorBlock
          style={{
            backgroundColor: props.theme.colors.ACCENT_4
          }}
        ></ColorBlock>
        <ColorBlock
          style={{
            backgroundColor: props.theme.colors.ACCENT_3,
            flex: "13",
            padding: "1rem 1.5rem",
            color: "white",
            fontSize: "2.5rem",
            fontWeight: "bold",
            fontFamily: "'Abel',sans-serif"
          }}
        >
          Featured Projects
        </ColorBlock>
      </FeaturedBar>
      <ProjectArea
        style={{
          backgroundColor: props.theme.colors.NEUTRAL_1
        }}
      >
        <Card
          isLinkingInside
          style={{ flex: "1", margin: "2%" }}
          cardData={{
            id: arr[0]?.id,
            title: arr[0]?.title,
            secondaryText: "Commitment level: " + arr[0]?.commitmentLevel,
            tags: arr[0]?.keywords.map(({ keyword }) => keyword),
            description: arr[0]?.catchPhrase,
            href: arr[0]?.slug,
            imageSrc: env().STRAPI_URL + arr[0]?.heroImage.url,
            actions: (
              <>
                <Link href={`projects/${arr[0]?.slug}` || ""} passHref>
                  <a>LEARN MORE</a>
                </Link>
                <Link href="support-us" passHref>
                  <a>DONATE</a>
                </Link>
              </>
            )
          }}
        />
        <Card
          isLinkingInside
          style={{ flex: "1", margin: "2%" }}
          cardData={{
            id: arr[1]?.id,
            title: arr[1]?.title,
            secondaryText: "Commitment level: " + arr[1]?.commitmentLevel,
            tags: [{ keyword: "hi" }].map(({ keyword }) => keyword),
            description: arr[1]?.catchPhrase,
            href: arr[1]?.slug,
            imageSrc: env().STRAPI_URL + arr[1]?.heroImage.url,
            actions: (
              <>
                <Link href={`projects/${arr[1]?.slug}` || ""} passHref>
                  <a>LEARN MORE</a>
                </Link>
                <Link href="support-us" passHref>
                  <a>DONATE</a>
                </Link>
              </>
            )
          }}
        />
      </ProjectArea>
    </div>
  );
};

export default withTheme(FeaturedProjects);

/*<Card
isLinkingInside
style={{ margin: 0, width: "100%", height: "100%" }}
cardData={{
    id: projects[0].id,
    title: projects[0].title,
    secondaryText:
        "Commitment level: " + projects[0].commitmentLevel,
    tags: projects[0].keywords.map(
        ({ keyword }) => keyword
    ),
    description: projects[0].catchPhrase,
    href: projects[0].slug,
    imageSrc: env().STRAPI_URL + projects[0].heroImage.url,
    actions: (
        <>
            <Link
                href={`projects/${projects[0].slug}` || ""}
                passHref
            >
                <a>LEARN MORE</a>
            </Link>
            <Link href="support-us" passHref>
                <a>DONATE</a>
            </Link>
        </>
    ),
}}
/>*/
