import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import UserLandingPage from '../components/modules/Onboarding/UserLandingPage';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import PageBody from './../components/common/PageBody';
import SignIn from './../components/modules/UserProfile/SignIn';

/**
 * UserOnboardingPage Component
 *
 * This page handles user onboarding, guiding users through necessary steps if they haven't accepted
 * terms of service or completed their onboarding process. It ensures users are redirected appropriately
 * based on their authentication and profile state.
 *
 * Features:
 * - Redirects users without a username to the signup page.
 * - Redirects users who have completed onboarding and accepted terms to their profile page.
 * - Displays either the onboarding landing page or sign-in screen based on authentication status.
 *
 * @return {JSX.Element} The rendered UserOnboardingPage component.
 */
export default function UserOnboardingPage() {
  const {
    userData, // Contains user profile and other details
    isAuthenticated = false, // Whether the user is logged in
    isLoading, // Loading state for user data
    error, // Any error that occurred while fetching user data
  } = useUserDataContext();

  const router = useRouter(); // Next.js router for navigation

  const hasAcceptedTermsOfService =
    userData?.profile?.user?.hasAcceptedTermsOfService; // Check if the user accepted terms of service

  // useEffect(() => {
  //   // Redirect to signup if authenticated but no username is set
  //   if (!isLoading && isAuthenticated && userData.name === '') {
  //     router.push('/signup');
  //   }
  //   // Redirect to the user profile page if terms of service are accepted
  //   else if (!isLoading && isAuthenticated && hasAcceptedTermsOfService) {
  //     router.push('/users/me');
  //   }
  // }, [isAuthenticated]); // Run the effect when `isAuthenticated` changes

  return (
    <>
      <Head>
        <title>Onboarding</title> {/* Set the page title */}
      </Head>
      <PageBody loading={isLoading} error={error}>
        {/* Show the onboarding page or sign-in screen based on authentication status */}
        {isAuthenticated ? <UserLandingPage /> : <SignIn />}
      </PageBody>
    </>
  );
}
