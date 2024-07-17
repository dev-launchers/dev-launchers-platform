import Head from 'next/head';
import WelcomePage from "../components/modules/WelcomePage/WelcomePage"

export default function WelcomePageRoute() {
  return (
    <>
      <Head>
        <title>IdeaSpace - Dev Launchers</title>
      </Head>
      <WelcomePage />
    </>
  );
};