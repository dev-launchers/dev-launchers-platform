import Head from 'next/head';
import UserOnboarding from '../components/modules/UserOnboarding';

export default function UserOnboardingPage() {
    //
    return (
        <>
            <Head>
                <title>Onboarding</title>
            </Head>
            <div>
                <UserOnboarding />
            </div>
        </>
    );
}
