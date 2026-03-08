import Head from 'next/head';
import ProductHeader from '../components/modules/DetailedPage/ProductHeader';
import React, { useState } from 'react';
import SignUpForm from '../components/modules/TalcommunityPage/TalFormPage/signUpForm';
import TalcommunityPage from '../components/modules/TalcommunityPage';
import TalFormPage from '../components/modules/TalcommunityPage/TalFormPage';
import { HeaderTalPage } from '../components/modules/TalcommunityPage/HeaderTalPage';

const SecondPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = (): void => {};

  return (
    <div className="bg-black min-h-screen">
      <HeaderTalPage />
      <SignUpForm handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default SecondPage;
