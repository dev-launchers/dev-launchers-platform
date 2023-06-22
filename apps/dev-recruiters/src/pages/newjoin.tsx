import Head from 'next/head';
import SignUpForm from '../components/modules/FormPage/signUpForm';
import BoxContainer from '../components/common/BoxContainer';
import { Wrapper } from '@components/modules/OpportunitiesAggregator/StyledOpportunitiesAggregator';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import NewJoinPageComponent from '../components/modules/NewJoinPageComponent';
const NewJoinPage = () => (
  <>
    <Head>
      <title>New Join Page</title>
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

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta
        property="twitter:url"
        content="https://devlaunchers.org/projects"
      ></meta>
      <meta property="twitter:title" content="Dev Discovery"></meta>
      <meta
        property="twitter:description"
        content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
      ></meta>
      <meta
        property="twitter:image"
        content="/images/DevlaunchersGitHubThumb.png"
      ></meta>
      <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
    </Head>

    <ThemeProvider theme={theme}>
      <NewJoinPageComponent />
    </ThemeProvider>
  </>
);

export default NewJoinPage;
