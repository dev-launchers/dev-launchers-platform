import Link from "next/link";
import Card from "../../common/Card";
import { Layout, ProjectContainer } from "./StyledProjects";

const Projects = ({ projects }) => {
  return (
    <Layout>
      {projects
        .filter((project) => project.isActive == "TRUE")
        .map((project, i) => (
          <ProjectContainer
          //style={{ justifySelf: (i + 1) % 2 == 0 ? "start" : "end" }}
          >
            <Card
              isLinkingInside
              style={{ margin: 0, width: "100%", height: "100%" }}
              cardData={{
                id: project.slug,
                title: project.title,
                secondaryText: "Commitment level: " + project.commitmentLevel,
                tags: project.keywords,
                description: project.description,
                href: project.slug,
                imageSrc: project.imageURL,
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
