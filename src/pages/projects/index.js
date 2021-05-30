import Header from "../../components/common/Header";
import Projects from "../../components/modules/Projects";
import Footer from "../../components/common/Footer";
import axios from "axios";

const Tabletop = require("tabletop");

export const getStaticProps = async () => {
  const sheetsDataToPageJSON = (sheetsElements) => {
    /*
     *  Converts data from a row based spreadsheet into a nested JSON object representing our page structure
     *  JSON Format:
     *    {
     *      tabName: {
     *        sectionName: {
     *          groupName: [
     *            entryObject1,
     *            entryObject2,
     *            ...
     *          ]
     *        },
     *        ...
     *      },
     *      ...
     *    }
     */
    let pageData = {};
    sheetsElements.forEach((element, i) => {
      if (element.isActive == "TRUE") {
        const tab = element.tab;
        const section = element.section;
        const group = element.group;
        const entryData = {
          id: element.id,
          title: element.title,
          description: element.description,
          href: element.url,
          imageSrc: element.imageSrc,
          attachments: element.attachments,
        };

        // if tab doesn't exist yet, create it
        if (!(tab in pageData)) pageData[tab] = {};
        // if section in this tab doesn't exist yet, create it
        if (!(section in pageData[tab])) pageData[tab][section] = {};
        // if group in this section doesn't exist yet, create it
        if (!(group in pageData[tab][section]))
          pageData[tab][section][group] = [];

        pageData[tab][section][group].push(entryData);
      }
    });
    return pageData;
  };

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

  let arrayWithData = await getData();

  return {
    props: { projects: arrayWithData },
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
