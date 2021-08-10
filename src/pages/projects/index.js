import axios from "axios";
import Header from "../../components/common/Header";
// import Projects from "../../components/modules/Projects";
import Footer from "../../components/common/Footer";
import { env } from "../../utils/EnvironmentVariables";

export const getStaticProps = async () => {
  const { data: projects } = await axios(`${env().STRAPI_URL}/projects`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
    },
  });


  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects },
    revalidate: 20,
  };
}

const ProjectsList = ({ projects }) => (
  <div>
    <Header />
    <Projects projects={projects || ""} />
    <Footer />
  </div>
);

export default ProjectsList;
