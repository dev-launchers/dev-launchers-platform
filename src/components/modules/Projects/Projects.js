import Link from "next/link";
import Card from "../../common/Card";
import { Layout, ProjectContainer } from "./StyledProjects";

const Projects = ({ projects }) => {
  return (
    <Layout>
      {projects.map((project, i) => (
        <ProjectContainer>
          <Card
            isLinkingInside
            style={{ margin: 0, width: "100%", height: "100%" }}
            cardData={{
              id: project.slug,
              title: project.title,
              secondaryText: "Commitment level: " + project.commitmentLevel,
              tags: project.keywords.map(({ keyword }) => keyword),
              description: project.catchPhrase,
              href: project.slug,
              imageSrc:
                "https://cms-api-staging.devlaunchers.com" + project.heroImage.url,
              actions: (
                <>
                  <Link href={`projects/${project.slug}` || ""} passHref>
                    <a>LEARN MORE</a>
                  </Link>
                  <Link href="support-us" passHref>
                    <a>DONATE</a>
                  </Link>
                </>
              ),
            }}
          />
        </ProjectContainer>
      ))}
    </Layout>
  );
};

export default Projects;
