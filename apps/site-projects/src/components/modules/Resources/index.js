import ProjectResources from "./ProjectResources";
import { MainResourcesContainer } from "./StyledResources";
import YourProjects from "./YourProjects";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useState } from "react";
import OtherResources from "./OtherResourcers/OtherResources";
import TeamResources from "./TeamResources/TeamResources";
import SectionResources from "./SectionResources";

function findUserTeams(userId, dataArray) {
  const userTeams = [];

  for (const data of dataArray) {
    const team = data.team;
    const leaders = team.leaders;
    const members = team.members;

    const leaderMatch = leaders.find(leader => leader.id === userId);

    const memberMatch = members.find(member => member.id === userId);

    if (leaderMatch || memberMatch) {
      userTeams.push(data);
    }
  }

  return userTeams.length > 0 ? userTeams : null;
}

function Resources({ projects }) {
  const { userData } = useUserDataContext();
  const userProjects = findUserTeams(userData.id, projects)
  const [selectedCard, setSelectedCard] = useState(userProjects !== null ? userProjects[0] : null)

    return (
          <MainResourcesContainer
            style={{
              marginRight: 'auto',
              marginLeft: 'auto',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              maxWidth: '80rem',
            }}
          >

            <YourProjects userProjects={userProjects} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />

            <SectionResources>
              <ProjectResources selectedCard={selectedCard} />    
              <TeamResources team={selectedCard.team} />
            </SectionResources>

            <OtherResources />
            
          </MainResourcesContainer>
      );
}

export default Resources;

/**
 * dummy data
 */
const dummyData = [
  {
    id: 2,
    slug: 'hello-world',
    catchPhrase: 'Welcome to Dev Launchers!',
    title: 'Hello World',
    vision:
      'Helping new members get oriented with the organization while making meaningful contributions to the Dev Launchers platform!',
    Description: null,
    commitmentLevel: '5+ hours per week',
    signupFormUrl: 'https://devlaunchers.com/',
    published_at: '2022-04-18T18:15:11.008Z',
    created_at: '2021-06-11T18:57:17.285Z',
    updated_at: '2023-07-09T21:12:10.538Z',
    description:
      "New members joining the organization are able to learn while contributing to different areas of our platform based on their interests, building out meaningful features and insights while being introduced to important concepts. This team owns everything on the site/platform that other teams *don't*. After team members are familiar with the platform and our resources, they move on to be placed on existing teams or begin their own!\n\n---\n---\n\n## Resources\n\n#### Getting Started? Check this stuff out!\n - [The Definitive Guide For Team Members](https://docs.google.com/presentation/d/1djZ-fsZVFqtPoFi46kKwSYamI2YgRSAJg3vG6YnWuMs/edit#slide=id.gd7d3f2cac1_0_11)\n\n#### Important Links For Everyone:\n- [Zenhub Team Board](https://app.zenhub.com/workspaces/hello-world-team-644b85772003020cab70d47e/board)\n\n#### For Developers:\n- [Github Repo](https://github.com/dev-launchers/dev-launchers-platform)\n- [Interactive Shared Component Library](https://www.chromatic.com/library?appId=632ca21aeea1618b7fa0bf48)\n\n#### For UX Designers:\n- [Design System Figma](https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/Dev-Launchers-Style-Guide?node-id=2201%3A10665&t=qrFJQUDBf2vyNW1e-0)\n- Personas (coming soon)\n- [Dev Launchers Brand Book](https://docs.google.com/presentation/d/1YJjIfADFS1Gu58NpqtkjKSKwOVNInVdH3GNEY_CoVIU/edit#slide=id.gcf67adfa4e_1_506 )\n- [Interactive Shared Component Library](https://www.chromatic.com/library?appId=632ca21aeea1618b7fa0bf48)\n\n#### For UX Researchers:\n- [Design System Figma](https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/Dev-Launchers-Style-Guide?node-id=2201%3A10665&t=qrFJQUDBf2vyNW1e-0)\n- Personas (coming soon)\n- [Additional Research Drive Link](https://drive.google.com/drive/folders/1-p6FSffXjq9BOPPkrAqaM6iPjyWL8HyQ?usp=share_link)\n- [Interactive Shared Component Library](https://www.chromatic.com/library?appId=632ca21aeea1618b7fa0bf48)\n",
    user: 6,
    calendarId: 'c_28ls1rq1k0pginl79ogdr1a684@group.calendar.google.com',
    isListed: true,
    parentProject: 1,
    google_meet: 7,
    isPlatform: true,
    team: {
      id: 14,
      leaders: [
        {
          id: 740,
          username: null,
          email: 'devanshusenp@gmail.com',
          role: 'Technical Lead',
        },
        {
          id: 753,
          username: null,
          email: 'mdwie.wa@gmail.com',
          role: 'Product Lead',
        },
      ],
      members: [
        {
          id: 55,
          username: 'Jappreet',
          role: 'React Developer',
        },
        {
          id: 741,
          username: null,
          role: 'React Developer',
        },
        {
          id: 749,
          username: null,
          role: 'React Developer',
        },
        {
          id: 737,
          username: null,
          role: 'UX Designer',
        },
        {
          id: 725,
          username: null,
          role: 'UX Designer',
        },
        {
          id: 762,
          username: null,
          role: 'React Developer',
        },
      ],
    },
    Images: [],
    board: null,
    newMeetingTimes: [],
    heroImage: {
      id: 39,
      name: 'alexander-shatov-DHl49oyrn7Y-unsplash.png',
      alternativeText: '',
      caption: '',
      width: 1440,
      height: 748,
      formats: {
        large: {
          ext: '.png',
          url: 'https://devlaunchersproduction.blob.core.windows.net/strapi/assets/large_alexander_shatov_D_Hl49oyrn7_Y_unsplash_4b55f5613a.png',
          hash: 'large_alexander_shatov_D_Hl49oyrn7_Y_unsplash_4b55f5613a',
          mime: 'image/png',
          name: 'large_alexander-shatov-DHl49oyrn7Y-unsplash.png',
          path: null,
          size: 273.59,
          width: 1000,
          height: 519,
        },
        small: {
          ext: '.png',
          url: 'https://devlaunchersproduction.blob.core.windows.net/strapi/assets/small_alexander_shatov_D_Hl49oyrn7_Y_unsplash_4b55f5613a.png',
          hash: 'small_alexander_shatov_D_Hl49oyrn7_Y_unsplash_4b55f5613a',
          mime: 'image/png',
          name: 'small_alexander-shatov-DHl49oyrn7Y-unsplash.png',
          path: null,
          size: 91.01,
          width: 500,
          height: 260,
        },
        medium: {
          ext: '.png',
          url: 'https://devlaunchersproduction.blob.core.windows.net/strapi/assets/medium_alexander_shatov_D_Hl49oyrn7_Y_unsplash_4b55f5613a.png',
          hash: 'medium_alexander_shatov_D_Hl49oyrn7_Y_unsplash_4b55f5613a',
          mime: 'image/png',
          name: 'medium_alexander-shatov-DHl49oyrn7Y-unsplash.png',
          path: null,
          size: 168.82,
          width: 750,
          height: 390,
        },
        thumbnail: {
          ext: '.png',
          url: 'https://devlaunchersproduction.blob.core.windows.net/strapi/assets/thumbnail_alexander_shatov_D_Hl49oyrn7_Y_unsplash_4b55f5613a.png',
          hash: 'thumbnail_alexander_shatov_D_Hl49oyrn7_Y_unsplash_4b55f5613a',
          mime: 'image/png',
          name: 'thumbnail_alexander-shatov-DHl49oyrn7Y-unsplash.png',
          path: null,
          size: 29.89,
          width: 245,
          height: 127,
        },
      },
      hash: 'alexander_shatov_D_Hl49oyrn7_Y_unsplash_4b55f5613a',
      ext: '.png',
      mime: 'image/png',
      size: 410.91,
      url: 'https://devlaunchersproduction.blob.core.windows.net/strapi/assets/alexander_shatov_D_Hl49oyrn7_Y_unsplash_4b55f5613a.png',
      previewUrl: null,
      provider: 'azure-storage',
      provider_metadata: null,
      created_at: '2023-02-27T02:03:51.425Z',
      updated_at: '2023-02-27T02:03:51.555Z',
    },
    interests: [
      {
        id: 25,
        published_at: '2021-08-11T08:18:27.339Z',
        created_at: '2021-08-11T08:18:24.482Z',
        updated_at: '2021-08-11T08:18:27.560Z',
        interest: 'HTML',
        categories: [],
      },
      {
        id: 23,
        published_at: '2021-08-11T08:18:08.028Z',
        created_at: '2021-08-11T08:18:03.320Z',
        updated_at: '2021-08-11T08:18:08.255Z',
        interest: 'Frontend Development',
        categories: [],
      },
      {
        id: 17,
        published_at: '2021-08-11T05:41:33.064Z',
        created_at: '2021-08-11T05:41:28.424Z',
        updated_at: '2021-08-11T05:41:33.478Z',
        interest: 'Node.js',
        categories: [],
      },
      {
        id: 4,
        published_at: '2021-08-11T05:36:30.868Z',
        created_at: '2021-08-11T05:36:25.579Z',
        updated_at: '2021-08-11T05:36:31.097Z',
        interest: 'UI/UX',
        categories: [],
      },
      {
        id: 15,
        published_at: '2021-08-11T05:40:54.513Z',
        created_at: '2021-08-11T05:40:51.568Z',
        updated_at: '2021-08-11T08:22:02.188Z',
        interest: 'JavaScript',
        categories: [],
      },
      {
        id: 22,
        published_at: '2021-08-11T08:15:45.172Z',
        created_at: '2021-08-11T08:15:42.406Z',
        updated_at: '2021-08-11T08:15:45.392Z',
        interest: 'Agile Development',
        categories: [],
      },
      {
        id: 26,
        published_at: '2021-08-11T08:18:43.839Z',
        created_at: '2021-08-11T08:18:40.519Z',
        updated_at: '2021-08-11T08:18:44.071Z',
        interest: 'Social Media',
        categories: [],
      },
      {
        id: 16,
        published_at: '2021-08-11T05:41:14.781Z',
        created_at: '2021-08-11T05:41:11.760Z',
        updated_at: '2021-08-11T05:41:15.012Z',
        interest: 'React',
        categories: [],
      },
      {
        id: 7,
        published_at: '2021-08-11T05:37:11.747Z',
        created_at: '2021-08-11T05:37:07.908Z',
        updated_at: '2021-08-11T05:37:11.973Z',
        interest: 'Web Dev',
        categories: [],
      },
      {
        id: 24,
        published_at: '2021-08-11T08:18:16.280Z',
        created_at: '2021-08-11T08:18:13.488Z',
        updated_at: '2021-08-11T08:18:16.570Z',
        interest: 'Git',
        categories: [],
      },
      {
        id: 27,
        published_at: '2021-08-11T08:18:59.797Z',
        created_at: '2021-08-11T08:18:56.725Z',
        updated_at: '2021-08-11T08:19:00.018Z',
        interest: 'Web Design',
        categories: [],
      },
    ],
    subProjects: [],
    opportunities: [],
  },
  {
    id: 3,
    slug: 'site-backend',
    catchPhrase: 'Design backend systems that allow us to scale to the moon!',
    title: 'Site Backend',
    vision:
      'Design and develop backend systems that allows us to support the different product teams and the overall goal of devlaunchers!',
    Description: null,
    commitmentLevel: '5+ hours per week',
    signupFormUrl: 'https://devlaunchers.com/members',
    published_at: '2021-07-12T19:31:56.133Z',
    created_at: '2021-06-11T18:59:10.027Z',
    updated_at: '2023-06-06T22:59:30.279Z',
    description:
      "Help us create the backend infrastructure for the website you're currently on!\n\nIn this project, you'll be helping develop the backend systems to allow our platform to make a huge impact! We'll be using Strapi which is a headless CMS that will help us develop at rapid speeds! We'll also be using other modern web technologies such as node js, PostgreSQL, Docker and using REST API principles to develop the backend.\n\nWe'll have weekly meetings where we meet with the front-end team to discuss the platform's direction and status and have a special backend-focused meeting where you can get one-on-one help. \n\nWe accept people of all skill levels to come join and make our goals possible!",
    user: null,
    calendarId: 'c_p1n0u758v8cl70e0uarr2qfrho@group.calendar.google.com',
    isListed: true,
    parentProject: 1,
    google_meet: 2,
    isPlatform: true,
    team: {
      id: 10,
      leaders: [
        {
          id: 745,
          username: null,
          email: 'apgotety@gmail.com',
          role: 'Technical Lead',
        },
        {
          id: 724,
          username: null,
          email: 'ria.m@devlaunchers.com',
          role: 'Product Lead',
        },
      ],
      members: [
        {
          id: 739,
          username: null,
          role: 'Backend Developer',
        },
        {
          id: 728,
          username: null,
          role: 'Backend Developer',
        },
        {
          id: 697,
          username: null,
          role: 'Backend Developer',
        },
        {
          id: 727,
          username: null,
          role: 'Backend Developer',
        },
      ],
    },
    Images: [],
    board: null,
    newMeetingTimes: [],
    heroImage: {
      id: 17,
      name: 'cool-backend.jpg',
      alternativeText: '',
      caption: '',
      width: 1250,
      height: 735,
      formats: {
        large: {
          ext: '.jpg',
          url: 'https://devlaunchersproduction.blob.core.windows.net/strapi/assets/large_cool_backend_15d8ed9c9b.jpg',
          hash: 'large_cool_backend_15d8ed9c9b',
          mime: 'image/jpeg',
          name: 'large_cool-backend.jpg',
          path: null,
          size: 57.29,
          width: 1000,
          height: 588,
        },
        small: {
          ext: '.jpg',
          url: 'https://devlaunchersproduction.blob.core.windows.net/strapi/assets/small_cool_backend_15d8ed9c9b.jpg',
          hash: 'small_cool_backend_15d8ed9c9b',
          mime: 'image/jpeg',
          name: 'small_cool-backend.jpg',
          path: null,
          size: 17.92,
          width: 500,
          height: 294,
        },
        medium: {
          ext: '.jpg',
          url: 'https://devlaunchersproduction.blob.core.windows.net/strapi/assets/medium_cool_backend_15d8ed9c9b.jpg',
          hash: 'medium_cool_backend_15d8ed9c9b',
          mime: 'image/jpeg',
          name: 'medium_cool-backend.jpg',
          path: null,
          size: 35.15,
          width: 750,
          height: 441,
        },
        thumbnail: {
          ext: '.jpg',
          url: 'https://devlaunchersproduction.blob.core.windows.net/strapi/assets/thumbnail_cool_backend_15d8ed9c9b.jpg',
          hash: 'thumbnail_cool_backend_15d8ed9c9b',
          mime: 'image/jpeg',
          name: 'thumbnail_cool-backend.jpg',
          path: null,
          size: 5.5,
          width: 245,
          height: 144,
        },
      },
      hash: 'cool_backend_15d8ed9c9b',
      ext: '.jpg',
      mime: 'image/jpeg',
      size: 86.73,
      url: 'https://devlaunchersproduction.blob.core.windows.net/strapi/assets/cool_backend_15d8ed9c9b.jpg',
      previewUrl: null,
      provider: 'azure-storage',
      provider_metadata: null,
      created_at: '2021-07-12T19:35:51.946Z',
      updated_at: '2021-07-12T19:35:52.075Z',
    },
    interests: [
      {
        id: 21,
        published_at: '2021-08-11T08:14:14.867Z',
        created_at: '2021-08-11T08:14:11.706Z',
        updated_at: '2021-08-11T08:14:15.089Z',
        interest: 'Strapi',
        categories: [],
      },
      {
        id: 15,
        published_at: '2021-08-11T05:40:54.513Z',
        created_at: '2021-08-11T05:40:51.568Z',
        updated_at: '2021-08-11T08:22:02.188Z',
        interest: 'JavaScript',
        categories: [],
      },
      {
        id: 17,
        published_at: '2021-08-11T05:41:33.064Z',
        created_at: '2021-08-11T05:41:28.424Z',
        updated_at: '2021-08-11T05:41:33.478Z',
        interest: 'Node.js',
        categories: [],
      },
      {
        id: 20,
        published_at: '2021-08-11T08:12:45.074Z',
        created_at: '2021-08-11T08:12:41.750Z',
        updated_at: '2021-08-11T08:12:45.295Z',
        interest: 'Backend Development',
        categories: [],
      },
      {
        id: 7,
        published_at: '2021-08-11T05:37:11.747Z',
        created_at: '2021-08-11T05:37:07.908Z',
        updated_at: '2021-08-11T05:37:11.973Z',
        interest: 'Web Dev',
        categories: [],
      },
    ],
    subProjects: [],
    opportunities: [
      {
        id: 1,
        title: 'Lead Developer - Backend Team',
        level: 'Advanced',
        commitmentHoursPerWeek: 10,
        description:
          '- Must be able to understand the vision of the project at a high level, and be able to develop and implement a maintainable, flexible, and extendable backend of the platform/product.\n- Must be willing to work closely with the Product Owner, UI/UX Lead, and Frontend Lead to bring platform functionality to life.\n- Go-to person for backend-related needs.\n- Be willing to assist Jr. Backend Developers in understanding their role and deliverables.\n- Be willing to assist with code reviews and Pull Requests related to backend work.\n- Lead roles will probably require at least 10 hours per week to be effective, however, this could be more or less based on experience, organization, and communication ability.',
        isHidden: false,
        published_at: '2022-08-05T20:43:29.330Z',
        created_at: '2022-08-05T19:35:56.289Z',
        updated_at: '2022-10-03T00:32:51.184Z',
        skills: [],
      },
      {
        id: 9,
        title: 'Backend Team Lead',
        level: 'Advanced',
        commitmentHoursPerWeek: 10,
        description:
          '## Importance of The Role\nDev Launchers is building the platform that helps people from diverse backgrounds transition into a technical career. As the backend team lead, you will lead architectural designs and mentor a team of developers.\n\n## Backend Team\nWe use Strapi as our API service and Postgres database to support multiple frontend projects. Currently the team has a product manager and 3 developers. \n\n## What You Will Do\n- Partner with the product manager to build new features\n- Recruit and mentor team members\n- Work with the Platform Enablement team to make it easy for frontend teams to test API integrations\n- Be the driver of technical decisions\n- Collaborate with other project teams\n\n## What You Will Learn\n- Mentor and manage a team\n- Collaborate with people around the world\n- Deliver high quality software\n\n## Who You are\n\n### Required skills:\n- Few years of software development experience\n- Comfortable with making autonomous decisions\n- Excellent communicator\n- Curious to identity new problems and propose solutions\n\n### Bonus skills:\n- Familiar with front-end technologies, such as HTML, CSS and React\n- Familiar with backend technologies, such as REST API and Postgres\n- Experience with Agile development methodology\n\n## About The Organization\nDev Launchers is an international nonprofit organization dedicated to preparing people from diverse backgrounds to tackle future-proof careers. We are made up of people just like you.\nDev Launchers facilitates ambitious open-source software projects, along with other projects centered around communities and products. We use those same projects to train our members in skills in the realm of software, leadership, community management, product development, marketing, and anything else that may be required to launch real-world products.\nWe are dedicated to preparing our members for success!\n\n\n',
        isHidden: false,
        published_at: '2022-12-06T22:00:26.478Z',
        created_at: '2022-12-06T21:59:20.476Z',
        updated_at: '2022-12-06T22:05:32.969Z',
        skills: [
          {
            id: 20,
            published_at: '2021-08-11T08:12:45.074Z',
            created_at: '2021-08-11T08:12:41.750Z',
            updated_at: '2021-08-11T08:12:45.295Z',
            interest: 'Backend Development',
          },
        ],
      },
    ],
  },
];
