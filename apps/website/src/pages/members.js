import Head from 'next/head';
import MentorshipTiers from '../components/modules/MentorshipTiers/MentorshipTiers';

export default function MentorshipTiersRoute() {
  return (
    <>
      <Head>
        <title>Mentorship Tiers</title>
      </Head>
      <div>
        <MentorshipTiers />
      </div>
    </>
  );
}
