import { GetStaticProps } from "next";
import Head from "next/head";
import { Opportunity } from "@devlaunchers/models/opportunity";
import { Project } from "@devlaunchers/models/project";
import agent from "@devlaunchers/utility/agent";
import OpportunitiesAggregator from "../components/modules/OpportunitiesAggregator/OpportunitiesAggregator";

export const getStaticProps: GetStaticProps = async (context) => {
  let projects: Project[] = [];
  let opportunities: Opportunity[] = [];
  try {
    const result = await agent.Projects.list(
      new URLSearchParams("_publicationState=live")
    );
    projects = result.filter((p: Project) => p.opportunities.length > 0);
  } catch (error) {
    console.error("An error occurred while fetching Projects", error);
  }

  try {
    const result = await agent.Opportunities.list();
    opportunities = result.filter((o: Opportunity) => o.projects.length > 0);
  } catch (error) {
    console.error("An error occurred while fetching Opportunities", error);
  }

  return {
    props: {
      projects,
      opportunities,
    },
    revalidate: 10,
  };
};

interface Props {
  projects: Project[];
  opportunities: Opportunity[];
}

const IndexPage = ({ projects, opportunities }: Props) => (
  <>
    <Head>
      <title>Our Projects</title>
      <meta name="title" content="Our Projects"></meta>
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
      <meta property="og:title" content="Our Projects"></meta>
      <meta
        property="og:description"
        content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
      ></meta>

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://devlaunchers.org/projects"
      />
      <meta property="twitter:title" content="Our Projects" />
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
    <OpportunitiesAggregator
      projects={projects}
      opportunities={opportunities}
    />
  </>
);

export default IndexPage;
