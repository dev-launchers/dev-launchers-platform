import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Project } from "@devlaunchers/models/project";
import ProjectDetails from "../../components/modules/DetailedPage";
import { Opportunity } from "@devlaunchers/models/opportunity";

export const getProjectsSlugs = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?_publicationState=live`
  );

  const result: Project[] = await res.json();
  const projects = result?.filter((p) => p.opportunities?.length > 0);

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
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectsRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects/${params.slug}`
  );
  const opportuntiesRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/opportunities?projects.slug=${params.slug}`
  );

  const project: any = await projectsRes.json();
  const opportunites: any = await opportuntiesRes.json();

  return {
    props: {
      project: project,
      opportunites: opportunites,
    },
    revalidate: 10,
  };
};

export default function DetailedPage({
  project,
  opportunites,
}: {
  project: Project;
  opportunites: Opportunity[];
}) {
  return (
    <>
      <Head>
        <title>Detailed Page</title>
        <meta name="title" content="Our Projects"></meta>
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
        <meta property="og:title" content="Our Projects" />
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
      <ProjectDetails project={project} opportunites={opportunites} />
    </>
  );
}
