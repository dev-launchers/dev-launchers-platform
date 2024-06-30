import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Loader from './../../common/Loader';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import SideBar from './SideBar';
import Overview from './Overview';
import EditProfileModal from './EditProfileModal';
import { useSidebarState } from '../../../context/SidebarContext';
import { editProfileDataContext } from '../../../context/EditProfileDataContext';

export default function UserProfile({ publicUserData, isPublic }) {
  const { userData, isAuthenticated } = useUserDataContext();
  const { editProfileState } = editProfileDataContext();
  const state = useSidebarState();
  const [loading, setLoading] = useState(true);
  const [opportunities, setOpportunities] = useState([]);
  const [myProjects, setMyProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [ideas, setIdeas] = useState([]);
  const [people, setPeople] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && userData.name === '') router.push('/signup');
  }, [isAuthenticated]);

  useEffect(() => {
    const fetchData = async () => {
      await getProjectData();
      await getIdeaData();
      await getPeopleData();
    };
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(userData?.id === -1 || publicUserData?.id === -1);
  }, [publicUserData, userData]);

  const getProjectData = async () => {
    try {
      const { data } = await axios(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`
      );
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
      const { data } = await axios(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards`
      );
      if (data) setIdeas(data);
    } catch (error) {
      console.error('Could not fetch idea data', error);
    }
  };

  const getPeopleData = async () => {
    try {
      const userCount = (
        await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/count`)
      ).data;
      let randomUserIds = Array.from({ length: 6 }, () =>
        parseInt(Math.random() * userCount)
      );
      let usersData = await Promise.all(
        randomUserIds.map(async (userId) => {
          return (
            await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userId}`)
          ).data;
        })
      );
      setPeople(usersData);
    } catch (error) {
      console.error(`Could not fetch People's data`, error);
    }
  };

  const renderContent = () => {
    switch (state.activeTab) {
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

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-row bg-[#f9f9f9]">
      <div className="w-72">
        <SideBar />
      </div>
      <div className="px-20 pb-20 w-full">
        {renderContent()}
        {editProfileState.showEditProfileModal ? <EditProfileModal /> : null}
      </div>
    </div>
  );
}
