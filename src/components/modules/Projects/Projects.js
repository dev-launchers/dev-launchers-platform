import Link from "next/link";
import Card from "../../common/Card";
import { Layout, ProjectContainer } from "./StyledProjects";

import { useProjectsDataContext } from "../../../context/ProjectsContext";

import { env } from "../../../utils/EnvironmentVariables.js";

const Projects = () => {
  const projects = useProjectsDataContext();

  return (
    <Layout>
      {projects.map((project, i) => (
        <ProjectContainer>
          <Card
            isLinkingInside
            style={{ margin: 0, width: "100%", height: "100%" }}
            cardData={{
              id: project.id,
              title: project.title,
              secondaryText: "Commitment level: " + project.commitmentLevel,
              tags: project.keywords.map(({ keyword }) => keyword),
              description: project.catchPhrase,
              href: project.slug,
              imageSrc: env().STRAPI_URL + project.heroImage.url,
              actions: (
                <>
                  <Link href={`projects/${project.slug}` || ""} passHref>
                    <a>LEARN MORE</a>
                  </Link>
                  <Link href="support-us" passHref>
                    <a>DONATE</a>
                  </Link>
                </>
              )
            }}
          />
        </ProjectContainer>
      ))}
    </Layout>
  );
};

export default Projects;
