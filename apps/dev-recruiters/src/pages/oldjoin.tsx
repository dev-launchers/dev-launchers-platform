import Head from 'next/head';
import ProductHeader from '../components/modules/DetailedPage/ProductHeader';
import SignUpForm from '../components/modules/TalcommunityPage/TalFormPage/signUpForm';
import BoxContainer from '../components/common/BoxContainer';
import React from 'react';
import TalcommunityPage from '../components/modules/TalcommunityPage';
import { ThankyouPage } from '../components/modules/ThankyouPage';

const IndexPage = () => (
  <>
    <TalcommunityPage></TalcommunityPage>
    <ThankyouPage></ThankyouPage>
  </>
);

export default IndexPage;
