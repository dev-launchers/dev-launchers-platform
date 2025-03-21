import Head from 'next/head';
import { Typography } from '@devlaunchers/components/components/atoms';

const Recruitment: React.FC = () => {
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
        <Typography
          type="p"
          style={{
            width: '48px',
            height: '57.6px',
            whiteSpace: 'nowrap',
            marginTop: '30px',
            marginLeft: '25px',
            color: '#000',
            textAlign: 'center',
            fontFamily: 'Oswald',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 200,
            lineHeight: '120%', // 57.6px
            letterSpacing: '1.92px',
          }}
        >
          Recruitment Dashboard
        </Typography>
        {/* Add debugging to check the content */}
        {console.log('Rendering Recruitment Dashboard')}
      </div>
      {/*  */}
    </>
  );
};

export default Recruitment;
