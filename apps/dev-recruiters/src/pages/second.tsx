import Head from 'next/head';
import ProductHeader from '../components/modules/DetailedPage/ProductHeader';
import React from 'react';
import SignUpForm from '../components/modules/TalcommunityPage/TalFormPage/signUpForm';
import BoxContainer from '../components/common/BoxContainer';
import TalcommunityPage from '../components/modules/TalcommunityPage';
import TalFormPage from '../components/modules/TalcommunityPage/TalFormPage';
import { HeaderTalPage } from '../components/modules/TalcommunityPage/HeaderTalPage';

const SecondPage = () => (
  <>
    <BoxContainer>
      {/* <TalcommunityPage></TalcommunityPage> */}
      <HeaderTalPage></HeaderTalPage>
      <SignUpForm />
      {/* <TalFormPage></TalFormPage> */}
    </BoxContainer>
  </>
);

export default SecondPage;
