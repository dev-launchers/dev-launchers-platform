import Head from 'next/head';
import ProductHeader from '../components/modules/DetailedPage/ProductHeader';
import SignUpForm from '../components/modules/TalcommunityPage/TalFormPage/signUpForm';
import BoxContainer from '../components/common/BoxContainer';
import React from 'react';

import { ThankyouPage } from '../components/modules/ThankyouPage';
import { HeaderTalPage } from '../components/modules/TalcommunityPage/HeaderTalPage';

const IndexPage = () => (
  <>
    <BoxContainer>
      <HeaderTalPage></HeaderTalPage>
      <ThankyouPage></ThankyouPage>
    </BoxContainer>
  </>
);

export default IndexPage;
