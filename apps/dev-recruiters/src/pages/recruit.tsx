import Head from 'next/head';

const Recruitment: React.FC = () => {
  // Placeholder for project lead check
  // const isProjectLead = false; // Change this to true to simulate a project lead

  // if (!isProjectLead) {
  //   return <div>Access Denied: Only project leads can view this page.</div>;
  // }

  return (
    <>
      <Head>
        <title>Recruitment Dashboard</title>
        <meta name="title" content="Recruitment Dashboard"></meta>
        <meta
          name="description"
          content="View and manage applicants for your projects."
        ></meta>
      </Head>
      <div>
        <h1>Recruitment Dashboard</h1>
        {/* Add debugging to check the content */}
        {console.log('Rendering Recruitment Dashboard')}
      </div>
      {/*  */}
    </>
  );
};

export default Recruitment;
