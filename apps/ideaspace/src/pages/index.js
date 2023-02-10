import WelcomePage from '../components/modules/WelcomePage/WelcomePage';
import React from 'react';

export const getStaticProps = async (context) => {
    return { props: { } }
};


const IndexPage = (props) => (
    <WelcomePage />
);

export default IndexPage;
