import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../../../common/Button";
import Card from "../../../common/Card";

import { env } from "../../../../utils/EnvironmentVariables";

import { useUserDataContext } from "../../../../context/UserDataContext";

import { UserProjectsContainer } from "./StyledUserProjects";

const UserProjects = ({ myProjects }) => {
  const noProjectsDisplay = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h3>
        It looks like you&apos;re not currently part of any of our Product Teams...
      </h3>
      <div
        style={{ color: "white", fontSize: "1.3rem", marginBottom: "2rem" }}
      ></div>
      <Button style={{ marginLeft: "auto", marginRight: "auto" }} href="/join">
        Explore Team Openings!
      </Button>
    </div>
  );

  const unique = [...new Map(myProjects.map((m) => [m.catchPhrase, m])).values()];

  const unDuplicatedProject = unique.map(project => (
    <Card
      key={Math.random()}
      size="large"
      // isLinkingInside
      // style={{ margin: 0, width: "100%", height: "100%" }}
      cardData={{
        id: project.id,
        title: project.title,
        secondaryText: `Commitment level: ${project.commitmentLevel}`,
        tags: project.keywords?.map(({ keyword }) => keyword),
        description: project.catchPhrase,
        href: `https://devlaunchers.org/projects/${project.slug}`,
        imageSrc: project.heroImage?.url,
        /*
                          actions: (
                              <>
                              <Link href={`https://devlaunchers.org/projects/${project.slug}`} passHref>
                                  <a>LEARN MORE</a>
                              </Link>
                              <Link href="support-us" passHref>
                                  <a>DONATE</a>
                              </Link>
                              </>
                          ),
                          */
      }}
    />
  ))


  return (
    <UserProjectsContainer myProjects={myProjects}>
      {myProjects?.length > 0 ? (
        <div>
          <h2>My Project Teams</h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {unDuplicatedProject}
          </div>
        </div>
      ) : (
        noProjectsDisplay
      )}
    </UserProjectsContainer>
  );
};

export default UserProjects;
