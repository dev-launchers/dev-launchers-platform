import Head from "next/head";
import ConfirmationPage from "../components/modules/ConfirmationPage/confirmationPage";
import BoxContainer from "../components/common/BoxContainer";
function confirmation() {
  return (
    <>
      <Head>
        <title>Confirmation</title>
        <meta name="title" content="Dev Discovery" />
        <meta
          name="description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://devlaunchers.org/confirmation"
        />
        <meta
          property="og:image"
          content="/images/DevlaunchersGitHubThumb.png"
        />
        <meta property="og:title" content="Form submission confirmation" />
        <meta
          property="og:description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        />

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
      <BoxContainer bgColor="OuterSpace">
        <ConfirmationPage />
      </BoxContainer>
    </>
  );
}

export default confirmation;
