import Head from 'next/head';
import BasicInformationPage from '../components/modules/BasicInformationPage/UserOnboarding/BasicInformationPage';

export default function UserOnboardingRoute() {
    return (
        <>
            <Head>
                <title>User Onboarding</title>
            </Head>
            <div>
                <BasicInformationPage />
            </div>
        </>
    );
}
