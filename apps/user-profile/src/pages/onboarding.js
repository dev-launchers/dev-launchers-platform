import Head from 'next/head';
import OnboardingLandingPage from '../components/modules/OnboardingLandingPage';

export default function UserOnboardingPage() {
    return (
        <>
            <Head>
                <title>Onboarding</title>
            </Head>
            <div>
                <OnboardingLandingPage />
            </div>
        </>
    );
}
