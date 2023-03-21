import Head from 'next/head';
import UserOnboarding from '../components/modules/UserOnboarding';

export default function UserOnboardingRoute() {
    return (
        <>
            <Head>
                <title>Mentorship Tiers</title>
            </Head>
            <div>
                <UserOnboarding />
            </div>
        </>
    );
}
