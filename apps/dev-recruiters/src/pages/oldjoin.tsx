import Head from 'next/head';
import ProductHeader from '../components/modules/DetailedPage/ProductHeader';
import SignUpForm from '../components/modules/TalcommunityPage/TalFormPage/signUpForm';
import BoxContainer from '../components/common/BoxContainer';
import React from 'react';

import TalcommunityPage from '../components/modules/TalcommunityPage';
import { ThankyouPage } from '../components/modules/ThankyouPage';

const IndexPage = () => (
  <>
    <BoxContainer paddingVertical={0}>
      <TalcommunityPage></TalcommunityPage>
    </BoxContainer>
    <BoxContainer paddingVertical={0}>
      <ThankyouPage></ThankyouPage>
    </BoxContainer>
  </>
);

export default IndexPage;
