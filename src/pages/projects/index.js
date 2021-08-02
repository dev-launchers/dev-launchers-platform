/* eslint-disable no-console */
// import axios from "axios";
import Header from "../../components/common/Header";
// import Projects from "../../components/modules/Projects";
import Footer from "../../components/common/Footer";
import { env } from "../../utils/EnvironmentVariables";
// import { ProjectsDataProvider } from "../../context/ProjectsContext";

export const getStaticProps = async () => {
  // const { data: projects } = await axios(`${env().STRAPI_URL}/projects`);
  const res = await fetch(`${env().STRAPI_URL}/projects`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });
  const projects = await res.json();
  console.log(projects);
  return {
    props: { projects },
    revalidate: 20,
  };
};

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
