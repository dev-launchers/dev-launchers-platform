import Head from 'next/head';
import Resources from '../components/modules/Resources';

const ProjectsList = ({ projects }) => (
  <>
    <Head>
      <title>Our Resources</title>
      <meta name="title" content="Our Projects"></meta>
      <meta
        name="description"
        content="Welcome to DevLaunchers' resource page! Here, we provide you with the tools we've used to build our platform and other websites. Explore a curated list of cutting-edge technologies, coding frameworks, and design assets to power your projects and launch them with confidence. Empower your development journey with these essential resources!"
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
        content="Welcome to DevLaunchers' resource page! Here, we provide you with the tools we've used to build our platform and other websites. Explore a curated list of cutting-edge technologies, coding frameworks, and design assets to power your projects and launch them with confidence. Empower your development journey with these essential resources!"
      ></meta>

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta
        property="twitter:url"
        content="https://devlaunchers.org/projects"
      ></meta>
      <meta property="twitter:title" content="Our Projects"></meta>
      <meta
        property="twitter:description"
        content="Welcome to DevLaunchers' resource page! Here, we provide you with the tools we've used to build our platform and other websites. Explore a curated list of cutting-edge technologies, coding frameworks, and design assets to power your projects and launch them with confidence. Empower your development journey with these essential resources!"
      ></meta>
      <meta
        property="twitter:image"
        content="/images/DevlaunchersGitHubThumb.png"
      ></meta>
      <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
    </Head>
    <Resources />
  </>
);

export default ProjectsList;
