import axios from "axios";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Project from "../../components/modules/Projects/Project";
import { env } from "../../utils/EnvironmentVariables";
// import { ProjectsDataProvider } from "../../context/ProjectsContext";
export const getStaticPaths = async () => {
  const { data } = await axios(`${env().STRAPI_URL}/projects`);
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
    `https://cms-api-staging.devlaunchers.com/projects/${slug}`
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
    <Project {...project} />
    <Footer />
  </div>
);

export default ProjectRoute;
