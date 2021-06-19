import Header from "../../components/common/Header";
import Projects from "../../components/modules/Projects";
import Footer from "../../components/common/Footer";
import axios from "axios";
import { ProjectsDataProvider } from "../../context/ProjectsContext";
// export const getStaticProps = async () => {
//   let { data: projects } = await axios(
//     "https://cms-api-staging.devlaunchers.com/projects",
//     {
//       headers: {
//         Accept: "application/json, text/plain, */*",
//         "User-Agent": "*"
//       }
//     }
//   );
//   // const res = await fetch("https://cms-api-staging.devlaunchers.com/projects");
//   // const data = await res.json();
//   return {
//     props: { projects },
//     revalidate: 20
//   };
// };

const ProjectsList = ({ projects }) => {
  return (
    <div>
      <Header />
      <ProjectsDataProvider>
        <Projects />
      </ProjectsDataProvider>
      <Footer />
    </div>
  );
};

export default ProjectsList;
