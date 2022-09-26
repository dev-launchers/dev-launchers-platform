import Head from 'next/head';
import Play from '../components/modules/Play';

export default function PlayRoute() {
  return (
    <>
      <Head>
        <title>Play</title>
      </Head>
      <div>
        <Play />
      </div>
    </>
  );
}
