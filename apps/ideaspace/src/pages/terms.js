// import TermsPage from "@/components/modules/TermsPages/TermsPage";
import TermsConditionPage from '../components/modules/TermsConditionPage/TermsConditionPage';
import Head from 'next/head';

export default function TermsConditionRoute() {
  return (
    <>
      <Head>
        <title>IdeaSpace - Terms and Condition</title>
      </Head>
      <TermsConditionPage />
    </>
  );
}
