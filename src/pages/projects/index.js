import axios from "axios";
import Head from "next/head";
import Header from "../../components/common/Header";
import Projects from "../../components/modules/Projects";
import Footer from "../../components/common/Footer";
import { env } from "../../utils/EnvironmentVariables";

export const getStaticProps = async () => {
  const { data: projects } = await axios(`${env().STRAPI_URL}/projects`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
    },
  });

  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects },
    revalidate: 20,
  };
};

const ProjectsList = ({ projects }) => (
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
        content="https://devlaunchers.com/projects"
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
        content="https://devlaunchers.com/projects"
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
    <div>
      <Header />
      <Projects projects={projects || ""} />
      <Footer />
    </div>
  </>
);

export default ProjectsList;
