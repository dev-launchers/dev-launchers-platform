import React from "react";

import PageBody from "../../../components/common/PageBody";
import EntryCardCollection from "../../common/EntryCardCollection/EntryCardCollection";

// Get content data
let projectTemplates = require("../../../content/collections/projectTemplates.json")
  .data;

export default function Create() {
  return (
    <PageBody>
      <br />
      <h1 id="title">Create Games and Apps</h1>
      <div className="page-description">
        These templates are where projects begin. They provide the generic
        structure and base logic, so you can focus on what makes your app
        special!
      </div>
      <hr />
      <div className="games-area">
        <h2>Game Templates</h2>
        <EntryCardCollection data={projectTemplates.games} />
      </div>
      <hr />
      <div className="apps-area">
        <h2>App Templates</h2>
        <EntryCardCollection data={projectTemplates.apps} />
      </div>
    </PageBody>
  );
}
