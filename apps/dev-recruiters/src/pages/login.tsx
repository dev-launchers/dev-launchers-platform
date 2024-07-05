import Head from 'next/head';
import LoginPage from '../components/modules/LoginPage/loginPage';
import BoxContainer from '../components/common/BoxContainer';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';
function login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="Login Page" content="Login" />
        <meta
          name="description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_FRONT_END_URL + "/projects"} />
        <meta
          property="og:image"
          content="/images/DevlaunchersGitHubThumb.png"
        />
        <meta property="og:title" content="Dev Discovery" />
        <meta
          property="og:description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={process.env.NEXT_PUBLIC_FRONT_END_URL + "/projects"}
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
        <BoxContainer bgColor="OuterSpace">
          <LoginPage />
        </BoxContainer>
      </ThemeProvider>
    </>
  );
}

export default login;
