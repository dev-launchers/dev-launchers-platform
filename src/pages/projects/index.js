import axios from "axios";
import Header from "../../components/common/Header";
import Projects from "../../components/modules/Projects";
import Footer from "../../components/common/Footer";
// import { env } from "../../utils/EnvironmentVariables";
import { ProjectsDataProvider } from "../../context/ProjectsContext";

export const getStaticProps = async () => {
  const { data: projects } = await axios(
    `https://jsonplaceholder.typicode.com/users`
  );
  // const res = await fetch("https://cms-api-staging.devlaunchers.com/projects");
  // const data = await res.json();
  return {
    props: { projects },
    revalidate: 20,
  };
};

const ProjectsList = ({ projects }) => (
  <div>
    <Header />
    <ProjectsDataProvider>
      <Projects projects={projects || ""} />
    </ProjectsDataProvider>
    <Footer />
  </div>
);

export default ProjectsList;
