import Head from 'next/head';

import SupportUs from '../components/modules/SupportUs';

export default function SupportUsRoute() {
  return (
    <>
      <Head>
        <title>Support Us</title>
      </Head>
      <main className="flex flex-col justify-center items-center mx-auto min-h-screen bg-black text-white py-16">
        <SupportUs />
      </main>
    </>
  );
}
