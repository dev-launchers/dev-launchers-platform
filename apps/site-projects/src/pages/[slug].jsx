import axios from "axios";
import Head from "next/head";
import Project from "../components/modules/Projects/Project";

// const data = require("../components/modules/Projects/data.json");

export const getStaticPaths = async () => {
  const { data } = await axios(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?_publicationState=live`,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
      },
    }
  );

  const paths = data.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const { data: project } = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects/${slug}`,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
      },
    }
  );

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
    revalidate: 20,
  };
};

const ProjectRoute = ({ project }) => {
  const heroImageFormats = project?.heroImage?.formats;
  const heroImage =
    heroImageFormats?.large ||
    heroImageFormats?.medium ||
    heroImageFormats?.small ||
    project?.heroImage?.url;
  return (
    <>
      <Head>
        <title>{project?.title}</title>
        <meta name="title" content={project?.title}></meta>
        <meta name="description" content={project?.description}></meta>

        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content={`https://devlaunchers.org/projects/${project?.slug}`}
        ></meta>
        <meta property="og:image" content={heroImage?.url}></meta>
        <meta property="og:title" content={project?.title}></meta>
        <meta property="og:description" content={project?.description}></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content={`https://devlaunchers.org/projects/${project?.slug}`}
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
