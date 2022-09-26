import Head from 'next/head';
import Earn from '../components/modules/Earn';

export default function EarnRoute() {
  return (
    <>
      <Head>
        <title>Earn</title>
      </Head>
      <div>
        <Earn />
      </div>
    </>
  );
}
