import Head from 'next/head';
import UserOnboarding from '../components/modules/UserOnboardingProcess/UserOnboarding';

export default function UserOnboardingRoute() {
    return (
        <>
            <Head>
                <title>User Onboarding</title>
            </Head>
            <div>
                <UserOnboarding />
            </div>
        </>
    );
}
