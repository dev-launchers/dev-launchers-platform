import React from "react";
import CodeSandboxCard from "../../common/Card/CodeSandboxCard.js";
import { isPropertySignature } from "typescript";

// Get content data
let projectTemplates = require("../../../content/collections/projectTemplates.json")
  .data;

export default function CreateGameCardCollection() {
  return (
    <div className="collection collection--small-cards">
      {projectTemplates.games.map((entry, i) => {
        return <CodeSandboxCard entry={entry} key={i} />;
      })}
    </div>
  );
}
