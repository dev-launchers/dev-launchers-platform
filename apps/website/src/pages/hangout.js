import Head from 'next/head';
import Hangout from '../components/modules/Hangout/Hangout';

export default function HangoutRoute() {
  return (
    <>
      <Head>
        <title>Hangout</title>
      </Head>
      <div>
        <Hangout />
      </div>
    </>
  );
}
