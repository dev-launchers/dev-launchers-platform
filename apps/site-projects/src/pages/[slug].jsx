import axios from "axios";
import Head from "next/head";
import Project from "../components/modules/Projects/Project";
import { env } from "../utils/EnvironmentVariables";
import agent from "@devlaunchers/utility/agent"

// const data = require("../components/modules/Projects/data.json");

export const getStaticPaths = async () => {
  
  const data = await agent.Projects.list({populate: '*', _publicationState: 'live'});

  const paths = data.map((project) => ({
    params: { slug: project.attributes?.slug},
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  console.log(slug);
  const project = await agent.Projects.list({populate: '*', slug: slug});


  return {
    props: {
      project:project[0],
    },
    revalidate: 20,
  };
};

const ProjectRoute = ({ project }) => {
  const heroImageFormats = project?.attributes.heroImage?.attributes?.formats;
  const heroImage =
    heroImageFormats?.large ||
    heroImageFormats?.medium ||
    heroImageFormats?.small ||
    project?.attributes.heroImage?.attributes?.url;
  return (
 
    <>
      <Head>
        <title>{project?.attributes?.title}</title>
        <meta name="title" content={project?.attributes?.title}></meta>
        <meta name="description" content={project?.attributes?.description}></meta>

        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content={`https://devlaunchers.org/projects/${project?.attributes?.slug}`}
        ></meta>
        <meta property="og:image" content={heroImage?.attributes?.url}></meta>
        <meta property="og:title" content={project?.attributes?.title}></meta>
        <meta property="og:description" content={project?.attributes?.description}></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content={`https://devlaunchers.org/projects/${project?.attributes?.slug}`}
        ></meta>
        <meta property="twitter:title" content={project?.attributes?.title}></meta>
        <meta
          property="twitter:description"
          content={project?.attributes?.description}
        ></meta>
        <meta property="twitter:image" content={heroImage?.attributes?.url}></meta>
        <meta property="twitter:image:src" content={heroImage?.attributes?.url}></meta>
        <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
      </Head>
      <Project project={project || ""} />
    </>
  );
};
export default ProjectRoute;
