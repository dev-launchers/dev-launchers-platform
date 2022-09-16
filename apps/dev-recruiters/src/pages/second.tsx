import Head from "next/head";
import ProductHeader from "../components/modules/DetailedPage/ProductHeader";
import SignUpForm from "../components/modules/FormPage/signUpForm";
import BoxContainer from "../components/common/BoxContainer";
const SecondPage = () => (
  <>
    <Head>
      <title>Second page</title>
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

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta
        property="twitter:url"
        content="https://devlaunchers.org/projects"
      ></meta>
      <meta property="twitter:title" content="Our Projects"></meta>
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
    <h1>hello from page second</h1>
    <BoxContainer bgColor="OuterSpace">
      <SignUpForm />
    </BoxContainer>
  </>
);

export default SecondPage;
