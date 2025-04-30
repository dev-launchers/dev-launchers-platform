import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { SidebarDataProvider } from '../../context/SidebarDataContext';
import { OnboardingDataProvider } from '../../context/OnboardingDataContext';

import { featureFlags } from '../../utils/featureFlags';

import Head from 'next/head';
import UserProfile from '../../components/modules/UserProfile';
import UserOnboardingModal from '../../components/modules/Onboarding/UserOnboardingModal';
import SignIn from '../../components/modules/UserProfile/SignIn';
import PageBody from '../../components/common/PageBody';

/**
 * UserProfilePage Component
 *
 * This component renders the user profile page. It checks the user's authentication
 * and onboarding status, and conditionally displays the user profile, a sign-in screen,
 * or an onboarding modal.
 *
 * Features:
 * - Redirects unauthenticated users to the sign-in page.
 * - Displays an onboarding modal if the user hasn't completed onboarding.
 * - Wraps the user profile in necessary context providers (e.g., SidebarDataProvider).
 *
 * @return {JSX.Element} The rendered UserProfilePage component.
 */
export default function UserProfilePage() {
  const {
    userData,
    isAuthenticated = false, // Whether the user is authenticated
    isLoading, // Whether the user data is still loading
    error, // Any error related to user data fetching
  } = useUserDataContext();

  const hasCompletedOnboarding = userData?.profile?.user?.completedOnboarding; // Check if onboarding is completed
  const hasAcceptedTermsOfService =
    userData?.profile?.user?.hasAcceptedTermsOfService; // Check if terms of service are accepted

  const router = useRouter(); // Next.js router for navigation

  // Redirects users who are authenticated but haven't set a username to the signup page
  useEffect(() => {
    if (isAuthenticated && userData.name === '') {
      router.push('/signup');
    }

    // Redirects users to onboarding page if they haven't accepted terms of service
    // Uncomment the following lines to enforce terms of service acceptance:
    // else if (!isLoading && isAuthenticated && !hasAcceptedTermsOfService) {
    //   router.push('/onboarding');
    // }
  }, [isAuthenticated]); // Only re-run the effect when `isAuthenticated` changes

  /**
   * Determines whether to open the onboarding modal.
   * Currently, it opens if the user hasn't completed onboarding.
   *
   * @return {JSX.Element|null} The onboarding modal component or null.
   */
  const openUserOnboardingModal = () => {
    return (
      !hasCompletedOnboarding && (
        <OnboardingDataProvider>
          <UserOnboardingModal />
        </OnboardingDataProvider>
      )
    );
  };

  return (
    <>
      <Head>
        <title>User Profile</title> {/* Set the page title */}
      </Head>
      <PageBody loading={isLoading} error={error}>
        {isAuthenticated ? (
          <>
            {openUserOnboardingModal()}
            <SidebarDataProvider>
              <UserProfile isPublic={false} /> {/* Render the user profile */}
            </SidebarDataProvider>
          </>
        ) : (
          <SignIn />
        )}
      </PageBody>
    </>
  );
}
