import Head from 'next/head';
import Stars from '../components/modules/Stars/Stars';

export default function StarsRoute() {
  return (
    <>
      <Head>
        <title>Stars</title>
      </Head>
      <div>
        <Stars />
      </div>
    </>
  );
}
