import React from "react";
import CreateCard from "./CreateCard.js";
import { isPropertySignature } from "typescript";

// Get content data
let projectTemplates = require("../../../content/collections/projectTemplates.json")
  .data;

export default function CreateAppCardCollection() {
  return (
    <div className="collection collection--small-cards">
      {projectTemplates.apps.map((entry, i) => {
        return <CreateCard entry={entry} key={i} />;
      })}
    </div>
  );
}
