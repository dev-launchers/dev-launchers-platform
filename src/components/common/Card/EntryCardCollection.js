import React from "react";
import EntryCard from "./EntryCard.js";
import { isPropertySignature } from "typescript";

export default function EntryCardCollection(props) {
  return (
    <div className="collection collection--small-cards">
      {props.data.map((entry, i) => {
        return <EntryCard entry={entry} key={i} />;
      })}
    </div>
  );
}
