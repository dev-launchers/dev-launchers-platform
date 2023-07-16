import React from "react";
import { useEffect, useState } from 'react';
import "react-tabs/style/react-tabs.css";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import { useRouter } from "next/router";

import BioBox from './BioBox';
import Opportunities from './Opportunities';
import ProfileCard from './ProfileCard';
import RecommendedIdeas from './RecommendedIdeas';
import UserProjects from './UserProjects';
import People from './People';
import UserInterests from './UserInterests';

import Loader from './../../common/Loader';
import { Misc, UserInfo, UserSection, Wrapper } from './StyledUserProfile';
import { env } from '../../../utils/EnvironmentVariables';
import { useUserDataContext } from '../../../context/UserDataContext';

// State management component
/**
 * This component has been broken down into two, 
 * 1. State management component (UserProfile) – initialising states, getting data from backeend. 
 * 2. The view component (UserProfileView) – rendering the UI elements.
 * @export 
 * @param {*} { publicUserData, isPublic } 
 * @return {*}  
 */
export default function UserProfile({ publicUserData, isPublic }) {

  const { userData, isAuthenticated } = useUserDataContext();
  const [loading, setLoading] = useState(true);
  const [opportunities, setOpportunities] = React.useState([]);
  const [myProjects, setMyProjects] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
  const [ideas, setIdeas] = React.useState([]);
  const [people, setPeople] = React.useState([]);
  const [interests, setInterests] = React.useState([]);

  // If user hasn't set a username, redirect them to the signup form
  const router = useRouter();
  React.useEffect(() => {
    if (isAuthenticated && userData.name === '')
      router.push("/signup");
  }, [isAuthenticated]);

  // Start Projects/Opportunities
  React.useEffect(() => {
    getProjectData();
  }, []);

  const getProjectData = async () => {
    await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`)
      .then(({ data }) => {
        if (data) {
          setProjects(data);
          const tempOpportunities = [];
          data.map((project) => {
            project.opportunities.map((opportunity) => {
              opportunity.project = project;
              tempOpportunities.push(opportunity);
            });
          });
          setOpportunities(tempOpportunities);
        }
      })
      .catch(() => {
        console.error("Could not fetch project data");
      });
  };

  React.useEffect(() => {
    const myProjects = [];
    projects.map((project) => {
      [...project.team.leaders, ...project.team.members].map((member) => {
        if (member.id == userData.id) myProjects.push(project);
      });
    });
    setMyProjects(myProjects);
  }, [projects, userData]);
  // End Projects/Opportunities


  // Start Ideas
  React.useEffect(() => {
    getIdeaData();
  }, []);
  const getIdeaData = async () => {
    await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards`)
      .then(({ data }) => {
        if (data) {
          setIdeas(data);
        }
      })
      .catch(() => {
        console.error("Could not fetch idea data");
      });
  };
  // End Ideas


  // Start People  
  React.useEffect(() => {
    getPeopleData().catch(() => { console.error(`Could not fetch People's data`) });
  }, []);
  const getPeopleData = async () => {
    const userCount = (await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/count`)).data;
    let randomUserIds = [
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
      parseInt(Math.random() * userCount),
    ];
    let usersData = await Promise.all(randomUserIds.map(async (userId) =>
      (await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userId}`)).data
    ));

    setPeople(usersData);
  }
  // End People

  // Start Interests
  React.useEffect(() => {
    getInterests();
  }, []);
  const getInterests = async () => {
    await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/interests`)
      .then(({ data }) => {
        if (data) {
          setInterests(data);
        }
      })
      .catch(() => {
        console.error("Could not fetch interest data");
      });
  };
  // End Interests


  useEffect(() => {
    setLoading(userData?.id === -1 || publicUserData?.id === -1);
  }, [publicUserData, userData]);

  return loading ? <Loader /> : 
  <UserProfileView
    publicUserData={publicUserData}
    isPublic={isPublic}
    userData={userData}
    opportunities={opportunities}
    myProjects={myProjects}
    ideas={ideas}
    people={people}
    interests={interests}
  />;
}

// View component
export function UserProfileView({
  publicUserData,
  isPublic,
  userData,
  opportunities,
  myProjects,
  ideas,
  people,
  interests
}) {

  return (
        <Wrapper>
          <UserSection>
            <ProfileCard
              img={isPublic ? publicUserData?.profile?.profilePictureUrl : userData.profilePictureUrl}
              name={isPublic ? publicUserData?.profile?.displayName : userData.name}
              username={isPublic ? publicUserData?.username : userData.username}
              created_at={isPublic ? publicUserData?.created_at : userData?.created_at}
            />

            <UserInfo>
              <BioBox
                name={isPublic ? publicUserData?.profile?.displayName : userData.name}
                data={isPublic ? publicUserData?.profile : userData}
                canEdit={!isPublic}
              />
            </UserInfo>
          </UserSection>

          <Misc>
            <Tabs defaultFocus={true} defaultIndex={0} style={{ width: "80vw", maxWidth: "1400px", minHeight: "30rem" }}>
              <TabList style={{ width: "100%", fontSize: "2rem", fontWeight: "bold", display: "flex", justifyContent: "center" }}>
                {
                  // Have to do this hack for some reason (create empty tab if page not loaded)...
                  // otherwise tabs break
                  Object.entries(userData || {}).length === 0 ? <Tab></Tab> : ""
                }
                {
                  // Render tabs from our dynamically built learnPageData object
                  ["Projects", "People", "Interests", "Ideas", "Opportunities"].map((key) => (
                    <Tab key={`tab${key}`}>{key}</Tab>
                  ))
                }
              </TabList>

              <TabPanel>
                <UserProjects myProjects={myProjects} />
              </TabPanel>

              <TabPanel>
                <People people={people} />
              </TabPanel>

              <TabPanel>
                <UserInterests interests={interests} />
              </TabPanel>

              <TabPanel>
                <RecommendedIdeas ideas={ideas} />
              </TabPanel>

              <TabPanel>
                <Opportunities opportunities={opportunities} />
              </TabPanel>

            </Tabs>
          </Misc>
        </Wrapper>
  );
}


