import axios from "axios";
import { useRouter } from "next/router";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Project from "../../components/modules/Projects/Project";
const Tabletop = require("tabletop");

function getData() {
  return new Promise((resolve) => {
    Tabletop.init({
      key: "1QV419fM2DHZM59mFK6eYYbYiq6bs4sBUpTwVZ_dZJNg",
      callback: (data) => {
        resolve(data.exampleProjects.elements);
      },
      simpleSheet: false,
    });
  });
}

export const getStaticPaths = async () => {
  const data = await getData();

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
  const data = await getData();
  return {
    props: {
      data: data.filter((element) => element.slug == projectSlug),
      revalidate: 10,
    },
  };
};

const ProjectRoute = ({ data }) => {
  return (
    <div>
      <Header />
      <Project {...data[0]} />
      <Footer />
    </div>
  );
};

export default ProjectRoute;
