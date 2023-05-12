import WorkshoppingPage from '../../components/modules/WorkshoppingPage/WorkshoppingPage';
import React from 'react';
import { useRouter } from "next/router";

export default function WorkshopIdeaPage() {
  const router = useRouter();
  const { idea } = router.query;

  // https://github.com/vercel/next.js/discussions/11484
  // if (!idea) {
  //   return null;
  // }

  // // path is an array of path after ideaId
  // const ideaId = idea[1];
  // console.log(`square bracket file ideaId=${ideaId}`);
  // return (
  //   <div>
  //     <Header>
  //     <WorkshoppingPage ideaId={ideaId} />
  //     </Header>
  //   </div>
  // );

  return (
    <WorkshoppingPage />
  );
}
