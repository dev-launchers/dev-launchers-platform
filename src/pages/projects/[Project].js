import axios from "axios";
import { useRouter } from "next/router";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Project from "../../components/modules/Projects/Project";

export const getStaticPaths = async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/users");
  const { data } = res;

  const paths = data.map((project) => {
    return {
      params: { Project: project.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const project = context.params.Project;
  const res = await axios(
    "https://jsonplaceholder.typicode.com/users/" + project
  );
  const { data } = res;

  return {
    props: { project: data },
  };
};

const ProjectRoute = ({ project }) => {
  return (
    <div>
      <Header />
      <Project {...project} />
      <Footer />
    </div>
  );
};

export default ProjectRoute;
