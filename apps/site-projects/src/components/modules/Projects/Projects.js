import Fuse from 'fuse.js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Card from '../../common/Card';
import SearchBar from './Project/SearchBar';
import { Layout, ProjectContainer } from './StyledProjects';
import { atoms } from '@devlaunchers/components/components';

const Projects = ({ projects }) => {
  const [searchValue, setSearchValue] = useState('');

  const options = {
    includeScore: true,
    keys: ['interests?.interest'],
    threshold: 0.3,
    ignoreFieldNorm: true,
  };

  const fuse = new Fuse(projects, options);
  const searchResult = fuse.search(searchValue).map(({ item }) => item);

  const searchProject = (searchQuery) => {
    setSearchValue(searchQuery);
  };

  const router = useRouter();

  if (router?.isFallback) {
    return <div>Loading...</div>;
  }

  const items = searchValue ? searchResult : projects;
  return (
    <div
      style={{
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '3rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <atoms.Typography
          as="h1"
          variant="primary"
          size="xl5"
          textWeight="bold"
        >
          Our Projects - Explore and Collaborate!
        </atoms.Typography>
        <SearchBar onChange={searchProject} />
      </div>

      <atoms.Typography
        as="p"
        variant="secondary"
        size="body_lg"
        style={{ marginBottom: '2rem' }}
      >
        Come together to contribute, collaborate, and excel! Access a wealth of
        resources, tools, and support designed to help you succeed in building
        projects in the Dev Launchers ecosystem.{' '}
        <Link href="/join">Find a place you fit!</Link>
      </atoms.Typography>
      <Layout>
        {items.map((project, i) => {
          const imageUrl =
            process.env.NEXT_PUBLIC_NAME == 'DEVELOPMENT'
              ? process.env.NEXT_PUBLIC_API_BASE_URL +
                project?.attributes?.heroImage?.data?.attributes?.url
              : project?.attributes?.heroImage?.data?.attributes?.url;
          const attributes = project?.attributes;
          return (
            <ProjectContainer key={i}>
              <Card
                isLinkingInside
                style={{ margin: 0, width: '100%', height: '100%' }}
                cardData={{
                  id: attributes.id,
                  title: attributes.title,
                  secondaryText: `Commitment level: ${attributes.commitmentLevel}`,
                  tags: attributes?.interests?.data?.map(
                    ({ attributes }) => attributes.interest
                  ),
                  description: attributes.catchPhrase,
                  href: attributes.slug,
                  imageSrc: imageUrl,
                  actions: (
                    <>
                      <Link
                        href={`${router?.asPath}/${project.attributes.slug}`}
                        passHref
                      >
                        <atoms.Typography
                          as="a"
                          variant="secondary"
                          size="body_base"
                          textWeight="semibold"
                          textCase="uppercase"
                        >
                          LEARN MORE
                        </atoms.Typography>
                      </Link>
                      <Link href="support-us" passHref>
                        <atoms.Typography
                          as="a"
                          variant="secondary"
                          size="body_base"
                          textWeight="semibold"
                          textCase="uppercase"
                        >
                          DONATE
                        </atoms.Typography>
                      </Link>
                    </>
                  ),
                }}
              />
            </ProjectContainer>
          );
        })}
      </Layout>
    </div>
  );
};
export default Projects;
