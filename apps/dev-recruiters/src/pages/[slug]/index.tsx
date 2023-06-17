import { Opportunity } from '@devlaunchers/models/opportunity';
import { Project } from '@devlaunchers/models/project';
import theme from '../../styles/theme';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import ProjectDetails from '../../components/modules/DetailedPage';
import { agent } from '@devlaunchers/utility';

export const getProjectsSlugs = async () => {

  const result = await agent.Projects.list( new URLSearchParams('populate=deep&publicationState=live'));
  let projects = result?.filter((p) => p.attributes.opportunities?.data?.length > 0);
  projects = projects.map(projects => projects.attributes);	// Flatten strapiv4 response
  const projectsSlugs = projects.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));

  return projectsSlugs;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getProjectsSlugs();
  return {
    paths,
    fallback: 'blocking',
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {

  const projectsRes = await agent.Projects.get(params.slug as string, new URLSearchParams(`populate=deep&[filters][slug][$eq]=${params.slug}`));
  let opportunities = await agent.Opportunities.list(new URLSearchParams(`populate=deep&filters[projects][slug][$eq]=${params.slug}`)
  );

  let project: Project = projectsRes.attributes;

  // Restructure data returned from the API to flatten and make resemble data returned from old API
  // Any relational data set up in Strapi should be flattened here
  // We could `create a reusable function to handle this more elegantly
  project = {
    ...project, 
    team: {
      leaders: project.team ? project.team?.leaders?.map(leader => leader.leader?.data.attributes) : ``,
      members: project.team ? project.team?.members?.map(member => member.member?.data.attributes) : ``
    },
    interests: project.interests?.data.map(interest => interest.attributes),
    opportunities: project.opportunities?.data.map(opportunity => opportunity.attributes)
    
  };

  const commitments = project.opportunities.map(
    (opp) => opp.commitmentHoursPerWeek
  );
  const maxCommitment = Math.max(...commitments);
  const minCommitment = Math.min(...commitments);
  project.commitmentLevel = `${minCommitment} - ${maxCommitment}`;

  
  opportunities = opportunities.map(opportunity => opportunity.attributes);

  return {
    props: {
      project: project,
      opportunites: opportunities,
      maxCommitment,
      minCommitment,
    },
    revalidate: 10,
  };
};

export default function DetailedPage({
  project,
  opportunites,
  maxCommitment,
  minCommitment,
}: {
  project: Project;
  opportunites: Opportunity[];
  maxCommitment: number;
  minCommitment: number;
}) {
  return (
    <>
      <Head>
        <title>Detailed Page</title>
        <meta name="title" content="Dev Discovery"></meta>
        <meta
          name="description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        ></meta>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devlaunchers.org/projects" />
        <meta
          property="og:image"
          content="/images/DevlaunchersGitHubThumb.png"
        />
        <meta property="og:title" content="Dev Discovery" />
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
        <ProjectDetails
          maxCommitment={maxCommitment}
          minCommitment={minCommitment}
          project={project}
          opportunites={opportunites}
        />
      </ThemeProvider>
    </>
  );
}
