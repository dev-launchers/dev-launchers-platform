import Head from 'next/head';
import SubmissionForm from '../components/modules/SubmissionForm/SubmissionForm';

export default function SubmissionFormRoute() {
  return (
    <>
      <Head>
        <title>Submit an Idea - Dev Launchers</title>
      </Head>
      <SubmissionForm />
    </>
  );
};