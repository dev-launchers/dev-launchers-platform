import axios from "axios";
import Head from "next/head";
import Projects from "../components/modules/Projects";
import { env } from "../utils/EnvironmentVariables";

// const projectsData = require("../components/modules/Projects/data.json");

export const getStaticProps = async () => {
  const { data: projects } = await axios(
    `${env().STRAPI_URL}/projects?_publicationState=live`,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
      },
    }
  );
  // const projects = projectsData;
  if (!projects) {
    return {
      notFound: true,
    };
  }

  // HACKY WORKAROUND by Kris to make projects work
  // Need to request each project's individual endpoint to get missing data
  const filteredProjects = projects.filter((project) => project.isListed);
  const returnProjects = filteredProjects.map(async (project) => {
    if (!project.isListed) {
      project.heroImage = { url: "" }; // Project isn't listed. Don't waste a request on it
    } else {
      const { data: projectData } = await axios(
        `${env().STRAPI_URL}/projects/${project.slug}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "User-Agent":
              "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
          },
        }
      );

      project.heroImage = projectData.heroImage;
    }

    return project;
  });
  const resolvedProjects = await Promise.all(returnProjects);
  // End hacky workaround

  return {
    props: { projects: resolvedProjects },
    revalidate: 600,
  };
};

const ProjectsList = ({ projects }) => (
  <>
    <Head>
      <title>Our Projects</title>
      <meta name="title" content="Our Projects"></meta>
      <meta
        name="description"
        content="Create, discover, and join an agile team building open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and apps used by real people while learning valuable skills and meeting awesome people!"
      ></meta>

      <meta property="og:type" content="website"></meta>
      <meta
        property="og:url"
        content="https://devlaunchers.com/projects"
      ></meta>
      <meta
        property="og:image"
        content="/images/DevlaunchersGitHubThumb.png"
      ></meta>
      <meta property="og:title" content="Our Projects"></meta>
      <meta
        property="og:description"
        content="Create, discover, and join an agile team building open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and apps used by real people while learning valuable skills and meeting awesome people!"
      ></meta>

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta
        property="twitter:url"
        content="https://devlaunchers.com/projects"
      ></meta>
      <meta property="twitter:title" content="Our Projects"></meta>
      <meta
        property="twitter:description"
        content="Create, discover, and join an agile team building open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and apps used by real people while learning valuable skills and meeting awesome people!"
      ></meta>
      <meta
        property="twitter:image"
        content="/images/DevlaunchersGitHubThumb.png"
      ></meta>
      <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
    </Head>
    <Projects projects={projects || ""} />
  </>
);

export default ProjectsList;
