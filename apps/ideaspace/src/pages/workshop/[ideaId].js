import Head from 'next/head';
import WorkshoppingPage from '../../components/modules/WorkshoppingPage/WorkshoppingPage';
import React from 'react';
import { useRouter } from "next/router";

export default function WorkshopIdeaPage() {
  return (
    <>
      <Head>
        <title>Idea Workshop - Dev Launchers</title>
      </Head>
      <WorkshoppingPage />
    </>
  );
};
