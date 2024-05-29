import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import Loader from './../../common/Loader';
import SideBar from './SideBar';
import Overview from './Overview';
import UserProjects from './UserProjects';
import People from './People';
import RecommendedIdeas from './RecommendedIdeas';
import Opportunities from './Opportunities';

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
  const [opportunities, setOpportunities] = useState([]);
  const [myProjects, setMyProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [ideas, setIdeas] = useState([]);
  const [people, setPeople] = useState([]);
  const [interests, setInterests] = useState([]);
  const router = useRouter();
  const { tab } = router.query;
  const [activeTab, setActiveTab] = useState(tab || 'overview');

  // If user hasn't set a username, redirect them to the signup form
  useEffect(() => {
    if (isAuthenticated && userData.name === '') router.push('/signup');
  }, [isAuthenticated]);

  useEffect(() => {
    const fetchData = async () => {
      await getProjectData();
      await getIdeaData();
      await getPeopleData();
      await getInterests();
    };
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(userData?.id === -1 || publicUserData?.id === -1);
  }, [publicUserData, userData]);

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  const getProjectData = async () => {
    try {
      const { data } = await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`);
      if (data) {
        setProjects(data);
        const tempOpportunities = [];
        data.forEach((project) => {
          if (project.opportunities) {
            project.opportunities.forEach((opportunity) => {
              opportunity.project = project;
              tempOpportunities.push(opportunity);
            });
          }
        });
        setOpportunities(tempOpportunities);
      }
    } catch (error) {
      console.error('Could not fetch project data', error);
    }
  };

  const getIdeaData = async () => {
    try {
      const { data } = await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards`);
      if (data) setIdeas(data);
    } catch (error) {
      console.error('Could not fetch idea data', error);
    }
  };

  const getPeopleData = async () => {
    try {
      const userCount = (await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/count`)).data;
      let randomUserIds = Array.from({ length: 6 }, () => parseInt(Math.random() * userCount));
      let usersData = await Promise.all(randomUserIds.map(async (userId) => {
        return (await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userId}`)).data;
      }));
      setPeople(usersData);
    } catch (error) {
      console.error(`Could not fetch People's data`, error);
    }
  };

  const getInterests = async () => {
    try {
      const { data } = await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/interests`);
      if (data) setInterests(data);
    } catch (error) {
      console.error('Could not fetch interest data', error);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(
      {
        pathname: router.pathname,
        query: { tab },
      },
      undefined,
      { shallow: true }
    );
  };

  return loading ? (
    <Loader />
  ) : (
    <UserProfileView
      publicUserData={publicUserData}
      isPublic={isPublic}
      userData={userData}
      opportunities={opportunities}
      myProjects={myProjects}
      ideas={ideas}
      people={people}
      interests={interests}
      activeTab={activeTab}
      onTabClick={handleTabClick}
    />
  );
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
  interests,
  activeTab,
  onTabClick,
}) {
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'projects':
        return <UserProjects myProjects={myProjects} />;
      case 'profiles':
        return <People people={people} />;
      case 'ideas':
        return <RecommendedIdeas ideas={ideas} />;
      case 'opportunities':
        return <Opportunities opportunities={opportunities} />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex flex-row bg-[#f9f9f9] h-screen">
      <div className="w-72">
        <SideBar
          isPublic={isPublic}
          profilePictureUrl={
            isPublic
              ? publicUserData?.profile?.profilePictureUrl
              : userData?.profilePictureUrl
          }
          displayName={
            isPublic ? publicUserData?.profile?.displayName : userData?.name
          }
          title="Software Developer"
          // title={isPublic ? publicUserData?.profile?.role : userData?.role}
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
      </div>
      <div className="px-20 pb-20 w-full">{renderContent()}</div>
    </div>
  );
}
