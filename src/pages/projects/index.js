import Header from "../../components/common/Header";
import Projects from "../../components/modules/Projects";
import Footer from "../../components/common/Footer";
import axios from "axios";

export const getStaticProps = async () => {
  let { data: projects } = await axios(
    "https://cms-api-staging.devlaunchers.com/projects"
  );
  return {
    props: { projects },
    revalidate: 20,
  };
};
const ProjectsList = ({ projects }) => {
  return (
    <div>
      <Header />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
};

export default ProjectsList;
