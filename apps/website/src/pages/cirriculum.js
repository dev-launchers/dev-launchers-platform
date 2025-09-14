import queryString from 'query-string';

import Head from 'next/head';
import { useRouter } from 'next/router';
import Create from '../components/modules/Create';
import { render } from 'react-dom';

const renderSection = (title, listItems) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {listItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default function CreateRoute() {
  const router = useRouter();
  // Need to use GET params to get a specific variable
  const params = queryString.parse(router.locale);
  // console.log("router locale", router.locale);

  const rythItems = [
    'Design Collaboration (1 hr): progress review, technique demos (e.g., prototyping, design systems, accessibility), critique, next steps tailored to goals.',
    'Cross-Department Collaboration (1 hr): Design × Research × Product × Dev working session (flows, wireframes, prototypes, implementation reviews).',
    'Async Work (3–8 hrs): issues in GitHub, branch/PR workflow, check-ins on Discord, optional pairing and office hours.',
  ];
  const ryhthm = renderSection('Weekly Rhythm', rythItems);
  return (
    <>
      <Head>
        <title>Create</title>
      </Head>
      <div>{ryhthm}</div>
    </>
  );
}
