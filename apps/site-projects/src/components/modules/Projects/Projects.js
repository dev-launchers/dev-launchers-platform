import Fuse from 'fuse.js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Card from '../../common/Card';
import SearchBar from './Project/SearchBar';
import { Layout, ProjectContainer } from './StyledProjects';

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
        <h1>Our Projects - Explore and Collaborate!</h1>
        <SearchBar onChange={searchProject} />
      </div>

      <div>
				Come together to contribute, collaborate, and excel! Access a wealth of resources, tools, and support designed to help you succeed in building projects in the Dev Launchers ecosystem. <Link href="/join">Find a place you fit!</Link>
			</div>
      <Layout>
        {items.map((project, i) => (
          <ProjectContainer key={i}>
            <Card
              isLinkingInside
              style={{ margin: 0, width: '100%', height: '100%' }}
              cardData={{
                id: project.id,
                title: project.title,
                secondaryText: `Commitment level: ${project.commitmentLevel}`,
                tags: project.interests?.map(({ interest }) => interest),
                description: project.catchPhrase,
                href: project.slug,
                imageSrc: project?.heroImage?.url,
                actions: (
                  <>
                    <Link href={`${router?.asPath}/${project.slug}`} passHref>
                      <a>LEARN MORE</a>
                    </Link>
                    <Link href="support-us" passHref>
                      <a>DONATE</a>
                    </Link>
                  </>
                ),
              }}
            />
          </ProjectContainer>
        ))}
      </Layout>
    </div>
  );
};
export default Projects;
