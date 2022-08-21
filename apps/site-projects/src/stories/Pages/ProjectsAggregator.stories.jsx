import React from "react";
import ProjectsAggregator, { getStaticProps } from "../../pages/index.jsx";

export const ProjectsAggregatorPage = (args, { loaded: { projects } }) => (
  <ProjectsAggregator {...args} />
);

ProjectsAggregatorPage.loaders = [
  async () => {
    const data = await getStaticProps();
    return data.props;
  },
];

export default {
  title: "Pages/ProjectsAggregator",
  component: ProjectsAggregator,
  args: {
    projects: [
      {
        id: 1,
        title: "Site Projects",
        catchPhrase:
          "Build the best environment for the projects you see here!",
        commitmentLevel: "2-4 hours a week",
        keywords: [
          {
            id: 54,
            keyword: "Agile Development",
          },
        ],
        heroImage: {
          url: "https://devlaunchersproduction.blob.core.windows.net/strapi/assets/sigmund_4_U_Gmm3_WR_Uo_Q_unsplash_31af2a1998.jpg",
        },
      },
    ],
  },
};
