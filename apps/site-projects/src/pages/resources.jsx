import Head from 'next/head';
import Resources from '../components/modules/Resources';
import axios from "axios";
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
      <title>Our Resources</title>
      <meta name="title" content="Our Projects"></meta>
      <meta
        name="description"
        content="Welcome to DevLaunchers' resource page! Here, we provide you with the tools we've used to build our platform and other websites. Explore a curated list of cutting-edge technologies, coding frameworks, and design assets to power your projects and launch them with confidence. Empower your development journey with these essential resources!"
      ></meta>

      <meta property="og:type" content="website"></meta>
      <meta
        property="og:url"
        content="https://devlaunchers.org/projects"
      ></meta>
      <meta
        property="og:image"
        content="/images/DevlaunchersGitHubThumb.png"
      ></meta>
      <meta property="og:title" content="Our Projects"></meta>
      <meta
        property="og:description"
        content="Welcome to DevLaunchers' resource page! Here, we provide you with the tools we've used to build our platform and other websites. Explore a curated list of cutting-edge technologies, coding frameworks, and design assets to power your projects and launch them with confidence. Empower your development journey with these essential resources!"
      ></meta>

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta
        property="twitter:url"
        content="https://devlaunchers.org/projects"
      ></meta>
      <meta property="twitter:title" content="Our Projects"></meta>
      <meta
        property="twitter:description"
        content="Welcome to DevLaunchers' resource page! Here, we provide you with the tools we've used to build our platform and other websites. Explore a curated list of cutting-edge technologies, coding frameworks, and design assets to power your projects and launch them with confidence. Empower your development journey with these essential resources!"
      ></meta>
      <meta
        property="twitter:image"
        content="/images/DevlaunchersGitHubThumb.png"
      ></meta>
      <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
    </Head>
    <Resources projects={projects || ""} />
  </>
);

export default ProjectsList;
