import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { SidebarDataProvider } from './../../context/SidebarDataContext';
import { OnboardingDataProvider } from './../../context/OnboardingDataContext';

import { featureFlags } from './../../utils/featureFlags';

import Head from 'next/head';
import UserProfile from '../../components/modules/UserProfile';
import UserOnboardingModal from '../../components/modules/Onboarding/UserOnboardingModal';
import SignIn from '../../components/modules/UserProfile/SignIn';
import PageBody from '../../components/common/PageBody';

/**
 * @drescription This component renders the User Profile Component.
 * A Modal is opened when user has not fully completed their onboarding.
 */
export default function UserProfilePage() {
  const {
    userData,
    isAuthenticated = false,
    isLoading,
    error,
  } = useUserDataContext();
  const hasCompletedOnboarding = userData?.profile?.user?.completedOnboarding;
  const hasAcceptedTermsOfService =
    userData?.profile?.user?.hasAcceptedTermsOfService;
  // If user hasn't set a username, redirect them to the signup form
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && userData.name === '') {
      router.push('/signup');
    }
    // this will force people on the onbaording page to accept temps of service
    // else if (!isLoading && isAuthenticated && !hasAcceptedTermsOfService) {
    //   router.push('/onboarding')
    // };
  }, [isAuthenticated]);

  /**
   * @description Open modal when user is coming from the onbaording page.
   * More conditions will be applied when modal should be opened in the future.
   */
  const openUserOnboardingModal = () => {
    return (
      !hasCompletedOnboarding && (
        <OnboardingDataProvider>
          {' '}
          <UserOnboardingModal />{' '}
        </OnboardingDataProvider>
      )
    ); // featureFlags.inDevelopment || featureFlags.inStaging; // userData.hasOnboarded !== true;
  };

  return (
    <>
      <Head>
        <title>User Profile</title>
      </Head>
      <PageBody loading={isLoading} error={error}>
        {isAuthenticated ? (
          <div>
            {openUserOnboardingModal()}
            <SidebarDataProvider>
              <UserProfile isPublic={false} />
            </SidebarDataProvider>
          </div>
        ) : (
          <SignIn />
        )}
      </PageBody>
    </>
  );
}
