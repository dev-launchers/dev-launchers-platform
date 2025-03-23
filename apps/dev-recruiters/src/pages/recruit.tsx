import Head from 'next/head';
import {
  atoms,
  organisms,
  molecules,
} from '@devlaunchers/components/src/components';

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
        <atoms.Typography
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
        </atoms.Typography>
        <atoms.Typography
          style={{
            color: '#000',
            fontFeatureSettings: "'liga' off, 'clig' off",
            marginTop: '10px',
            marginLeft: '25px',
            fontFamily: 'Nunito Sans',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            letterSpacing: '1.28px',
            textTransform: 'uppercase',
          }}
        >
          YOUR TEAM: {'project name here'}
        </atoms.Typography>
      </div>
    </>
  );
};

export default Recruitment;
