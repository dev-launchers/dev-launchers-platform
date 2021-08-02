/* eslint-disable no-console */
import axios from "axios";
import Header from "../../components/common/Header";
// import Projects from "../../components/modules/Projects";
import Footer from "../../components/common/Footer";
import { env } from "../../utils/EnvironmentVariables";
// import { ProjectsDataProvider } from "../../context/ProjectsContext";

export async function getStaticProps() {
  // const { data: projects } = await axios(`${env().STRAPI_URL}/projects`);
  const { data: projects } = await axios(`${env().STRAPI_URL}/projects`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });
  if (!projects) {
    return {
      notFound: true,
    };
  }
  console.log(projects);
  return {
    props: { projects },
    revalidate: 20,
  };
}

const ProjectsList = ({ projects }) => (
  <div>
    <Header />
    {projects.map((project) => {
      <div>{project?.title}</div>;
    })}
    <Footer />
  </div>
);

export default ProjectsList;
