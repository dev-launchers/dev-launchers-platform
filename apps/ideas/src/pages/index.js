import "../styles.css";
import WelcomePage from '../components/welcomepage.js';
import React, { useState } from 'react';

import { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps = async (context) => {
    return { props: { } }
};


const IndexPage = (props) => (
    <WelcomePage />
);

export default IndexPage;
