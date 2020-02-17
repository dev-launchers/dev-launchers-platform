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
      <h2>Dev Launchers Create Templates</h2>
      <EntryCardCollection
        title={"Game Templates"}
        data={projectTemplates.games}
      />
      <hr />
      <EntryCardCollection
        title={"App Templates"}
        data={projectTemplates.apps}
      />
    </PageBody>
  );
}
