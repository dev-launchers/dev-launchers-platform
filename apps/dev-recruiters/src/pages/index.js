import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Opportunity } from '@devlaunchers/models/opportunity';
import { Project } from '@devlaunchers/models/project';
import agent from '@devlaunchers/utility/agent';
import OpportunitiesAggregator from '../components/modules/OpportunitiesAggregator/OpportunitiesAggregator';
import OpportunitiesAggregatorWithRoles from '../components/modules/OpportunitiesAggregatorWithRoles/OpportunitiesAggregator';

import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

export const getStaticProps = async (context) => {
  let projects = [];
  let opportunities = [];
  try {
    const result = await agent.Projects.list(
      new URLSearchParams('_publicationState=live')
    );
    projects = result.filter((p) => p.opportunities.length > 0);
    projects.map((project) => {
      const commitments = project.opportunities.map(
        (opp) => opp.commitmentHoursPerWeek
      );
      // console.log(commitments);
      const maxCommitment = Math.max(...commitments);
      const minCommitment = Math.min(...commitments);
      project.commitmentLevel = `${minCommitment} - ${maxCommitment}`;
      return project;
    });
  } catch (error) {
    console.error('An error occurred while fetching Projects', error);
  }

  try {
    const result = await agent.Opportunities.list();
    opportunities = result.filter((o) => o.projects.length > 0);
  } catch (error) {
    console.error('An error occurred while fetching Opportunities', error);
  }

  return {
    props: {
      projects,
      opportunities,
    },
    revalidate: 10,
  };
};



const IndexPage = ({ projects, opportunities }) => {
  const router = useRouter();
  const { format } = router.query;

  return (
    <>
      <Head>
        <title>Dev Discovery</title>
        <meta name="title" content="Dev Discovery"></meta>
        <meta
          name="description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        ></meta>

        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://devlaunchers.org/projects"
        ></meta>
        <meta
          property="og:image"
          content="/images/DevlaunchersGitHubThumb.png"
        ></meta>
        <meta property="og:title" content="Dev Discovery"></meta>
        <meta
          property="og:description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        ></meta>

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://devlaunchers.org/projects"
        />
        <meta property="twitter:title" content="Dev Discovery" />
        <meta
          property="twitter:description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        />
        <meta
          property="twitter:image"
          content="/images/DevlaunchersGitHubThumb.png"
        />
        <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
      </Head>
      {/* TODO: Remove the old theme and standarize the one coming from @devlaunchers/components */}
      <ThemeProvider theme={theme}>
        {format === 'roles' ? (
          <OpportunitiesAggregatorWithRoles
            projects={projects}
            opportunities={opportunities}
          />
        ) : (
          <OpportunitiesAggregator
            projects={projects}
            opportunities={opportunities}
          />
        )}
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
