import Head from 'next/head'; // Add page metadata for SEO and consistent titles
import RolePage from '../components/modules/NewJoinPageComponent/RolePage';
import React from 'react';

const Role: React.FC = () => {
  return (
    <>
      {/* Page metadata for role details page to improve SEO */}
      <Head>
        <title>Role details | Dev Launchers</title>
        <meta
          name="description"
          content="See the open role details and apply to join the Dev Launchers volunteer team."
        />
      </Head>
      <RolePage />
    </>
  );
};

export default Role;
