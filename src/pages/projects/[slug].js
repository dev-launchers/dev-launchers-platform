/* eslint-disable no-console */
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
      "User-Agent": "*",
    },
  });
  const paths = data.map((project) => ({
    params: { slug: project.slug },
  }));
  console.log(data);
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const { data: project } = await axios.get(
    `${env().STRAPI_URL}/projects/${slug}`
  );
  console.log(project);
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
    {/* <Project project={project || ""} /> */}
    {project?.title}
    <Footer />
  </div>
);

export default ProjectRoute;
