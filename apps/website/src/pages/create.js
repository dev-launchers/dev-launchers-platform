import queryString from 'query-string';

import Head from 'next/head';
import { useRouter } from 'next/router';
import Create from '../components/modules/Create';

export default function CreateRoute() {
  const router = useRouter();
  // Need to use GET params to get a specific variable
  const params = queryString.parse(router.locale);
  // console.log("router locale", router.locale);
  return (
    <>
      <Head>
        <title>Create</title>
      </Head>
      <div>
        <Create templateId={params.template} />
      </div>
    </>
  );
}
