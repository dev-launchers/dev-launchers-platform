import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { featureFlags } from './../../utils/featureFlags';

import Head from 'next/head';
import UserProfile from '../../components/modules/UserProfile';
import UserOnboardingModal from '../../components/modules/UserOnboardingModal';
import SignIn from '../../components/modules/UserProfile/SignIn';
import PageBody from '../../components/common/PageBody';

/**
 * @drescription This component renders the User Profile Component.
 * A Modal is opened when user has not fully completed their onboarding.
 */
export default function UserProfilePage(props) {
  const { isAuthenticated = false } = useUserDataContext();
  const router = useRouter();

  /**
   * @description Open modal when user is coming from the onbaording page.
   * More conditions will be applied when modal should be opened in the future.
   */
  const openUserOnboardingModal = () => {
    if (featureFlags.inDevelopment || featureFlags.inStaging) {
      return true;
    } else {
      // undo comment line 39, once backend fully integrated.
      return false; // userData.hasOnboarded !== true;
    }
  };

  return (
    <>
      <Head>
        <title>User Profile</title>
      </Head>

      <PageBody>
        {isAuthenticated ? (
          <>
            {openUserOnboardingModal() && <UserOnboardingModal />}
            <UserProfile isPublic={false} />
          </>
        ) : (
          <SignIn />
        )}
      </PageBody>
    </>
  );
}
