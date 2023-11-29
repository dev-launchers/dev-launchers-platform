import Head from "next/head";
import Project from "../components/modules/Projects/Project";
import agent from "@devlaunchers/utility/agent"

// const data = require("../components/modules/Projects/data.json");

export const getStaticPaths = async () => {
  const data = await agent.Projects.list({ _publicationState: 'live' });
  const paths = data.map((project) => ({
    params: { slug: project.attributes?.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const project = await agent.Projects.get(slug, { "populate[heroImage][populate]": '*' });

  return {
    props: {
      project,
    },
    revalidate: 20,
  };
};

const ProjectRoute = ({ project }) => {
  const heroImageFormats = project.heroImage?.formats;
  const heroImage =
    heroImageFormats?.large ||
    heroImageFormats?.medium ||
    heroImageFormats?.small ||
    project.heroImage?.url;
  return (

    <>
      <Head>
        <title>{project?.title}</title>
        <meta name="title" content={project?.title}></meta>
        <meta name="description" content={project?.description}></meta>

        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_URL}/projects/${project?.slug}`}
        ></meta>
        <meta property="og:image" content={heroImage?.url}></meta>
        <meta property="og:title" content={project?.title}></meta>
        <meta property="og:description" content={project?.description}></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_END_URL}/projects/${project?.slug}`}
        ></meta>
        <meta property="twitter:title" content={project?.title}></meta>
        <meta
          property="twitter:description"
          content={project?.description}
        ></meta>
        <meta property="twitter:image" content={heroImage?.url}></meta>
        <meta property="twitter:image:src" content={heroImage?.url}></meta>
        <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
      </Head>
      <Project project={project || ""} />
    </>
  );
};
export default ProjectRoute;
