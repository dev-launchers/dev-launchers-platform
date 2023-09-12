import Head from "next/head";
import agent from "@devlaunchers/utility/agent"
import Button from "../../../../packages/UI/src/components/atoms/Button";
import Button from "@devlaunchers/components";
// const projectsData = require("../components/modules/Projects/data.json");

const ProjectsList = () => (
  <>
    <Head>
      <title>Our Projects</title>
      <meta name="title" content="Our Projects"></meta>
      <meta
        name="description"
        content="Create, discover, and join an agile team building open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and apps used by real people while learning valuable skills and meeting awesome people!"
      ></meta>

      <meta property="og:type" content="website"></meta>
      <meta
        property="og:url"
        content={process.env.NEXT_PUBLIC_FRONT_END_URL + "/projects"}
      ></meta>
      <meta
        property="og:image"
        content="/images/DevlaunchersGitHubThumb.png"
      ></meta>
      <meta property="og:title" content="Our Projects"></meta>
      <meta
        property="og:description"
        content="Create, discover, and join an agile team building open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and apps used by real people while learning valuable skills and meeting awesome people!"
      ></meta>

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta
        property="twitter:url"
        content={process.env.NEXT_PUBLIC_FRONT_END_URL + "/projects"}
      ></meta>
      <meta property="twitter:title" content="Our Projects"></meta>
      <meta
        property="twitter:description"
        content="Create, discover, and join an agile team building open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and apps used by real people while learning valuable skills and meeting awesome people!"
      ></meta>
      <meta
        property="twitter:image"
        content="/images/DevlaunchersGitHubThumb.png"
      ></meta>
      <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
    </Head>
    <div>hello from GPT TEAM</div>
    <Button buttonSize="xl" buttonType="primary">hello</Button>
  </>
);

export default ProjectsList;
