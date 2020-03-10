import React from "react";

import { useRepoContext } from "../../../context/RepoContext";

import PageBody from "../../common/PageBody";
import CardGroup from "../../common/CardGroup";

export default function Play() {
  const { repoData } = useRepoContext();

  return (
    <PageBody>
      <br />
      <h1 id="title">We Build Things</h1>
      <div className="page-description">
        These apps are all created by our students! Open up the development
        links to see their latest changes, or the production links for more
        stable versions.
      </div>
      <hr />
      <CardGroup
        data={repoData}
        title={"Projects"}
        size="large"
        attachment={true}
      />
    </PageBody>
  );
}
