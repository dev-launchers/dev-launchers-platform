import React from 'react';
import Head from 'next/head';
// manage styles => write CSS directly within files.
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { OpportunitiesProvider } from '../contexts/SelectRoleContext';

const Recruitment: React.FC = () => {
  // Placeholder for project lead check
  const isProjectLead = false; // Change this to true to simulate a project lead

  if (!isProjectLead) {
    return <div>Access Denied: Only project leads can view this page.</div>;
  }

  return (
    <>
      <Head>
        <title>Recruitment Dashboard</title>
        <meta name="title" content="Recruitment Dashboard"></meta>
        <meta
          name="description"
          content="View and manage applicants for your projects."
        ></meta>
      </Head>

      <ThemeProvider theme={theme}>
        <OpportunitiesProvider>
          <div>
            <h1>Recruitment Dashboard</h1>
            {/* Your recruitment dashboard content */}
          </div>
        </OpportunitiesProvider>
      </ThemeProvider>
    </>
  );
};

export default Recruitment;

// /home/gamze/Development/code/dev-launchers/dev-launchers-platform/apps/dev-recruiters/src/pages/recruitment.js
