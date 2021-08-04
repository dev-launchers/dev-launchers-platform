/* eslint-disable no-unused-vars */
import axios from "axios";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Project from "../../components/modules/Projects/Project";
import { env } from "../../utils/EnvironmentVariables";
// import { ProjectsDataProvider } from "../../context/ProjectsContext";
export const getStaticPaths = async () => {
  const { data } = await axios(`${env().STRAPI_URL}/projects`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
    },
  });
  const paths = data.map((project) => ({
    params: { slug: project.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const { data: project } = await axios.get(
    `${env().STRAPI_URL}/projects/${slug}`
  );

  return {
    props: {
      project,
    },
    revalidate: 20,
  };
};

const ProjectRoute = ({ project }) => (
  <div>
    <Header />
    <Project project={project || ""} />
    <Footer />
  </div>
);

export default ProjectRoute;
