import Head from 'next/head';
import Learn from '../components/modules/Learn/Learn';
import GlobalStyle from '../styles/globals';

export default function LearnRoute() {
  return (
    <>
      <Head>
        <title>Learn</title>
      </Head>
      <div>
        <GlobalStyle />
        <Learn />
      </div>
    </>
  );
}
