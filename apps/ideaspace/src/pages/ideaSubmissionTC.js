import Head from 'next/head';
import IdeaSubmissionTC from "../components/modules/IdeaSubmissionTC/IdeaSubmissionTC"

export default function IdeaSubmissionTCRoute() {
  return (
    <>
      <Head>
        <title>IdeaSpace Dashboard - Dev Launchers</title>
      </Head>
      <IdeaSubmissionTC />
    </>
  );
};