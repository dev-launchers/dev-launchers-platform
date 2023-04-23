import React from "react";

import { useUserDataContext } from '../../context/UserDataContext';

import Head from 'next/head';
import UserProfile from "../../components/modules/UserProfile";
import UserOnboardingModal from "../../components/modules/UserOnboardingModal"

/**
 * @drescription This component renders the User Profile Component. 
 * A Modal is opened when user has not fully completed their onboarding.
 */
export default function UserProfilePage() {
  const { userData } = useUserDataContext();

  /**
   * @description Open modal when user has no username. 
   * More conditions will be applied when modal should be opened in the future.
   */
  const openUserOnboardingModal = () => {
    return !(userData && userData.username)
  }

  return (
    <>
      <Head>
        <title>User Profile</title>
      </Head>
      <div>
        {openUserOnboardingModal() && <UserOnboardingModal/>}
        <UserProfile isPublic={false}/>
      </div>
    </>
  );
}
