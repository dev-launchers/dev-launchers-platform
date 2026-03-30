import 'react-tabs/style/react-tabs.css';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { EditProfileDataProvider } from './../../../context/EditProfileDataContext';
import { useSidebarDataContext } from './../../../context/SidebarDataContext';

import SideBar from './SideBar';
import Overview from './Overview';
import Chatbot from './Chatbot';
import EditProfileModal from './EditProfileModal';
import { useEffect } from 'react';
import { set } from 'react-ga';

/**
 * This component has been broken down into two,
 * 1. State management component (UserProfile) – initialising states, getting data from backeend.
 * 2. The view component (UserProfileView) – rendering the UI elements.
 * @export
 * @param {*} { publicUserData, isPublic }
 * @return {*}
 */
export default function UserProfile({ publicUserData, isPublic }) {
  const [userData, setUserData] = useState(publicUserData);
  const currentUser = useUserDataContext();
  useEffect(() => {
    if (!isPublic) setUserData(currentUser.userData);
  }, []);

  const { sidebarState } = useSidebarDataContext();

  const { pages } = sidebarState;

  const showPages = () => {
    if (pages?.showOverview) {
      return <Overview userData={userData} />;
    }
    // else if (pages?.showProjects) {
    //   return <UserProjects myProjects={myProjects} />;
    // } else if (pages?.showProfiles) {
    //   return <People people={people} />;
    // } else if (pages?.showIdeas) {
    //   return <RecommendedIdeas ideas={ideas} />;
    // } else if (pages?.showOpportunities) {
    //   return <Opportunities opportunities={opportunities} />;
    // }
    else if (pages?.showChatbot) {
      return <Chatbot />;
    } else {
      return <Overview userData={userData} />;
    }
  };

  const sideBar = isPublic ? null : <SideBar />;

  return (
    <div className="flex flex-row bg-[#f9f9f9]">
      <div className="w-72">{sideBar}</div>
      <div className="px-20 pb-20">
        <EditProfileDataProvider>
          {showPages()}
          <EditProfileModal />
        </EditProfileDataProvider>
      </div>
    </div>
  );
}
