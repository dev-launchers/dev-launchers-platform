import Head from "next/head";
import Projects from "../components/modules/Projects";
import agent from "@devlaunchers/utility/agent"
// const projectsData = require("../components/modules/Projects/data.json");

export const getStaticProps = async () => {
  // const projects = projectsData;
  const projects = await agent.Projects.list();
  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects },
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
        content={process.env.FRONT_END_URL + "/projects"}
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
        content={process.env.FRONT_END_URL + "/projects"}
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
