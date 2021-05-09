import Header from "../../components/common/Header";
import Projects from "../../components/modules/Projects"
import Footer from "../../components/common/Footer";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/users");
  const { data } = res;

  return {
    props: { projects: data },
  };
};
const ProjectsList = ({ projects }) => {
  return (
    <div>
      <Header />
      <Projects projects={projects}/>
      <Footer />
    </div>
  );
};

export default ProjectsList;
