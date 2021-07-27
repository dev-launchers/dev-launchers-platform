/* eslint-disable no-unused-vars */
import Link from "next/link";
import Card from "../../common/Card";
import { Layout, ProjectContainer } from "./StyledProjects";

const Projects = ({ projects }) => (
  <div
    style={{
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "3rem",
    }}
  >
    <h1>Projects you can join!</h1>
    <div>
      Create, discover, and join open-source software projects! We help members
      to contribute meaningfully and gain industry-ready experience along the
      way. Build epic products, tools, and games used by real people while
      learning valuable skills and meeting awesome people!
    </div>
    <Layout>
      {/* {projects.map((project, i) => (
        <ProjectContainer key={i}>
          <Card
            isLinkingInside
            style={{ margin: 0, width: "100%", height: "100%" }}
            cardData={{
              id: project.id,
              title: project.title,
              secondaryText: `Commitment level: ${project.commitmentLevel}`,
              tags: project.keywords.map(({ keyword }) => keyword),
              description: project.catchPhrase,
              href: project.slug,
              imageSrc: project.heroImage.url,
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
      ))} */}
      <div>projects.map</div>
    </Layout>
  </div>
);
export default Projects;
