/* eslint-disable no-unused-vars */
import axios from "axios";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Project from "../../components/modules/Projects/Project";
import { env } from "../../utils/EnvironmentVariables";
// import { ProjectsDataProvider } from "../../context/ProjectsContext";
export const getStaticPaths = async () => {
  const { data } = await axios(`https://jsonplaceholder.typicode.com/users`);
  const paths = data.map((project) => ({
    params: { slug: project.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const { data: project } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${slug}`
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
    <Project project={project} />
    <Footer />
  </div>
);

export default ProjectRoute;
