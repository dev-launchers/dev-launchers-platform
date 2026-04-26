import Head from 'next/head';
import React, { useState } from 'react';
import SignUpForm from '../components/modules/TalcommunityPage/TalFormPage/signUpForm';
import { HeaderTalPage } from '../components/modules/TalcommunityPage/HeaderTalPage';

const SecondPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = (): void => {};

  return (
    <>
      {/* Page metadata for talent community signup to improve SEO and consistency */}
      <Head>
        <title>Join Talent Community | Dev Launchers</title>
        <meta
          name="description"
          content="Join the Dev Launchers Talent Community to be notified about new volunteer roles that match your skillset."
        />
      </Head>
      <div className="bg-black min-h-screen">
        <HeaderTalPage />
        <SignUpForm handleCloseModal={handleCloseModal} />
      </div>
    </>
  );
};

export default SecondPage;
