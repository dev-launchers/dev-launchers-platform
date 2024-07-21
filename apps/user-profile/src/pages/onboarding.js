import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import UserLandingPage from '../components/modules/Onboarding/UserLandingPage';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import PageBody from './../components/common/PageBody';
import SignIn from './../components/modules/UserProfile/SignIn';

export default function UserOnboardingPage() {
  const {
    userData,
    isAuthenticated = false,
    isLoading,
    error,
  } = useUserDataContext();

  const router = useRouter();

  const hasAcceptedTermsOfService =
    userData?.profile?.user?.hasAcceptedTermsOfService;

  useEffect(() => {
    if (!isLoading && isAuthenticated && userData.name === '') {
      router.push('/signup');
    } else if (!isLoading && isAuthenticated && hasAcceptedTermsOfService) {
      router.push('/users/me');
    }
  }, [isAuthenticated]);

  return (
    <>
      <Head>
        <title>Onboarding</title>
      </Head>
      <PageBody loading={isLoading} error={error}>
        {isAuthenticated ? <UserLandingPage /> : <SignIn />}
      </PageBody>
    </>
  );
}
