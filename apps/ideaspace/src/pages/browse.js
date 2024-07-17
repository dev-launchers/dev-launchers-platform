import Head from 'next/head';
import BrowseIdeas from "../components/modules/BrowseIdeas/BrowseIdeas"

export default function BrowseIdeasRoute() {
  return (
    <>
      <Head>
        <title>Browse Ideas - Dev Launchers</title>
      </Head>
      <BrowseIdeas />
    </>
  );
};