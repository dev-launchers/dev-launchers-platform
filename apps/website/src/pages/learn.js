import Head from 'next/head';
import Learn from '../components/modules/Learn/Learn';

export default function LearnRoute() {
  return (
    <>
      <Head>
        <title>Learn</title>
      </Head>
      <div>
        <Learn />
      </div>
    </>
  );
}
