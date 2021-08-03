/* eslint-disable no-unused-vars */
import axios from "axios";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Project from "../../components/modules/Projects/Project";
import { env } from "../../utils/EnvironmentVariables";
// import { ProjectsDataProvider } from "../../context/ProjectsContext";
export const getStaticPaths = async () => {
  const { data } = await axios(`${env().STRAPI_URL}/projects`, {
    withCredentials: true,
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
    },
  });
  const paths = data.map((project) => ({
    params: { slug: project.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const { data: project } = await axios.get(
    `${env().STRAPI_URL}/projects/${slug}`,
    {
      withCredentials: true,
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
      },
    }
  );
  const defaultProject = {
    id: 7,
    slug: "dev-launchers-edu",
    catchPhrase: "Who says learning to code can't be fun?! - Nobody",
    title: "Dev Launchers: Base Camp",
    vision:
      "Creating an engaging learning environment by gamifying the experience.",
    Description: null,
    commitmentLevel: "5-15 Hours per Week",
    signupFormUrl: "https://devlaunchers.com/members",
    published_at: "2021-07-09T00:10:53.598Z",
    created_at: "2021-07-08T23:49:47.018Z",
    updated_at: "2021-07-09T21:44:53.227Z",
    description:
      "The Dev Launchers Base Camp project aims to create a platform which hosts various modular programming education courses. These courses will have a gamification aspect to increase user engagement and material retention. The course content will begin with entry level programming topics and build towards more advanced concepts and topics.\n\nLess experienced programmers can contribute to the project in the form of creating an educational module. While more experienced programmers can help create the overall educational platform, as well as work on more advanced aspects of applying gamification to programming education.",
    user: null,
    meetingLinkURLs: [
      {
        id: 3,
        roomName: "DevLaunchers Hangouts Room 4",
        url: "https://devlaunchers.com/hangout",
      },
    ],
    meetingTimes: [
      {
        id: 5,
        title: "Weekly Team Meeting",
        date: null,
        dateTime: "Fridays at 4pm PDT ",
      },
    ],
    keywords: [
      { id: 18, keyword: "All Experience Levels" },
      { id: 13, keyword: "Programming Tutorials" },
      { id: 14, keyword: "Education Gamification" },
      { id: 16, keyword: "Project Experience" },
      { id: 17, keyword: "Creative Freedom" },
    ],
    projectReferenceURLs: [],
    openPositions: [],
    team: { id: 9, leaders: [], members: [] },
    Images: [],
    heroImage: {
      id: 15,
      name: "programming-wallpaper8-1600x900.jpg",
      alternativeText: "",
      caption: "",
      width: 1366,
      height: 768,
      formats: {
        large: {
          ext: ".jpg",
          url: "https://devlaunchersproduction.blob.core.windows.net/strapi/assets/large_programming_wallpaper8_1600x900_845719e0cc.jpg",
          hash: "large_programming_wallpaper8_1600x900_845719e0cc",
          mime: "image/jpeg",
          name: "large_programming-wallpaper8-1600x900.jpg",
          path: null,
          size: 23.78,
          width: 1000,
          height: 562,
        },
        small: {
          ext: ".jpg",
          url: "https://devlaunchersproduction.blob.core.windows.net/strapi/assets/small_programming_wallpaper8_1600x900_845719e0cc.jpg",
          hash: "small_programming_wallpaper8_1600x900_845719e0cc",
          mime: "image/jpeg",
          name: "small_programming-wallpaper8-1600x900.jpg",
          path: null,
          size: 8.42,
          width: 500,
          height: 281,
        },
        medium: {
          ext: ".jpg",
          url: "https://devlaunchersproduction.blob.core.windows.net/strapi/assets/medium_programming_wallpaper8_1600x900_845719e0cc.jpg",
          hash: "medium_programming_wallpaper8_1600x900_845719e0cc",
          mime: "image/jpeg",
          name: "medium_programming-wallpaper8-1600x900.jpg",
          path: null,
          size: 15.4,
          width: 750,
          height: 422,
        },
        thumbnail: {
          ext: ".jpg",
          url: "https://devlaunchersproduction.blob.core.windows.net/strapi/assets/thumbnail_programming_wallpaper8_1600x900_845719e0cc.jpg",
          hash: "thumbnail_programming_wallpaper8_1600x900_845719e0cc",
          mime: "image/jpeg",
          name: "thumbnail_programming-wallpaper8-1600x900.jpg",
          path: null,
          size: 3.05,
          width: 245,
          height: 138,
        },
      },
      hash: "programming_wallpaper8_1600x900_845719e0cc",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 38.9,
      url: "https://devlaunchersproduction.blob.core.windows.net/strapi/assets/programming_wallpaper8_1600x900_845719e0cc.jpg",
      previewUrl: null,
      provider: "azure-storage",
      provider_metadata: null,
      created_at: "2021-07-09T00:08:23.552Z",
      updated_at: "2021-07-09T00:21:03.360Z",
    },
    interests: [],
  };
  return {
    props: {
      project: project || defaultProject,
    },
    revalidate: 20,
  };
};

const ProjectRoute = ({ project }) => (
  <div>
    <Header />
    <Project project={project || ""} />
    <Footer />
  </div>
);

export default ProjectRoute;
