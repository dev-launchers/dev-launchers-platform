import axios from "axios";
import { useRouter } from "next/router";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Project from "../../components/modules/Projects/Project";

export const getStaticPaths = async () => {
  // const { data } = await axios("https://cms-api-staging.devlaunchers.com/projects");
  const res = await fetch("https://cms-api-staging.devlaunchers.com/projects")
  const data = await res.json()
  const paths = data.map((project, i, array) => {
    return {
      params: { Project: project.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const projectSlug = context.params.Project;
  // const { data } = await axios("https://cms-api-staging.devlaunchers.com/projects");
  const res = await fetch("https://cms-api-staging.devlaunchers.com/projects")
  const data = await res.json()

  return {
    props: {
      data: data.filter((element) => element.slug == projectSlug)[0],
    },
    revalidate: 20,
  };
};

const ProjectRoute = ({ data }) => {
  return (
    <div>
      <Header />
      <Project {...data} />
      <Footer />
    </div>
  );
};

export default ProjectRoute;
