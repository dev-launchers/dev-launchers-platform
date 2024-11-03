import Head from 'next/head';
import DashboardPage from "../components/modules/DashboardPage/DashboardPage"

export default function DashboardPageRoute() {
  return (
    <>
      <Head>
        <title>IdeaSpace Dashboard - Dev Launchers</title>
      </Head>
      <DashboardPage />
    </>
  );
};