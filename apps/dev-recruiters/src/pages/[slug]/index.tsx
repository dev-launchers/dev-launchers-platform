('use client');
import { Opportunity } from '@devlaunchers/models/opportunity';
import { Project } from '@devlaunchers/models/project';
import theme from '../../styles/theme';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import ProjectDetails from '../../components/modules/DetailedPage';
import { agent } from '@devlaunchers/utility';

export const getProjectsSlugs = async () => {
  const result = await agent.Projects.list(
    new URLSearchParams('populate=*&publicationState=live')
  );
  //console.log('getProjectsSlugs');
  //console.log(result);
  //const res = await fetch(
  //  `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?_publicationState=live`
  //);
  let projects = result?.filter(
    (p) => p.attributes.opportunities?.data?.length > 0
  );
  //console.log('getProjectsSlugs projects after filter');
  //console.log(projects);

  projects = projects.map((projects) => projects.attributes); // Flatten strapiv4 response
  //console.log('getProjectsSlugs projects after map');
  //console.log(projects);
  const projectsSlugs = projects.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));
  //console.log(projectsSlugs);
  //console.log('getProjectsSlugs projectsSlugs');
  return projectsSlugs;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getProjectsSlugs();
  //console.log(paths);
  //console.log('getStaticPaths before return');
  return {
    paths,
    fallback: 'blocking',
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('getStaticProps');
  console.log(params);
  console.log(params.slug);
  const { attributes: project }: Project = await agent.Projects.get(
    params.slug as string,
    new URLSearchParams(`populate=*&publicationState=live`)
  );
  console.log('projects in getStaticProps');
  console.log(project);
  let opportunities = await agent.Opportunities.list(
    new URLSearchParams(
      `populate=*&filters[projects][slug][$eq]=${params.slug}`
    )
  );
  //console.log('opportunities in getStaticProps');
  //console.log(opportunities);
  // Restructure data returned from the API to flatten and make resemble data returned from old API
  // Any relational data set up in Strapi should be flattened here
  // We could `create a reusable function to handle this more elegantly
  // project = {
  //   ...project,
  //   team: {
  //     leaders: project.team ? project.team?.leaders?.map(leader => leader.leader?.data.attributes) : ``,
  //     members: project.team ? project.team?.members?.map(member => member.member?.data.attributes) : ``
  //   },
  //   interests: project.interests?.data.map(interest => interest.attributes),
  //   opportunities: project.opportunities?.data.map(opportunity => opportunity.attributes)

  // };

  const commitments = project?.opportunities?.data?.map(
    (opp) => opp.attributes.commitmentHoursPerWeek
  );
  const maxCommitment =
    commitments === undefined ? 0 : Math.max(...commitments);
  const minCommitment =
    commitments === undefined ? 0 : Math.min(...commitments);
  //project.commitmentLevel = `${minCommitment} - ${maxCommitment}`;

  opportunities = opportunities.map((opportunity) => opportunity.attributes);
  console.log('getStaticProps before return two values');
  console.log(project);
  console.log(opportunities);
  return project !== undefined
    ? {
        props: {
          project: project,
          opportunites: opportunities,
          maxCommitment,
          minCommitment,
        },
        revalidate: 10,
      }
    : { notFound: true };
};

interface Props {
  project: Project;
  opportunites: Opportunity[];
  maxCommitment: number;
  minCommitment: number;
}

export default function DetailedPage({
  //params,
  project,
  opportunites,
  maxCommitment,
  minCommitment,
}: Props) {
  console.log('appsdev-recruiterssrcpages[slug]index.tsx Detailed page');
  console.log('project in DetailedPage');
  console.log(project);
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
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_FRONT_END_URL + '/projects'}
        />
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
          content={process.env.NEXT_PUBLIC_FRONT_END_URL + '/projects'}
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
      <>
        <ThemeProvider theme={theme}>
          <ProjectDetails
            //params={params}
            maxCommitment={maxCommitment}
            minCommitment={minCommitment}
            project={project}
            opportunites={opportunites}
          />
        </ThemeProvider>
      </>
    </>
  );
}
