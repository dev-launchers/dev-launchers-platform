import React from "react";
import SmallCard from "./SmallCard/SmallCard.js";

// Get content data
let rewards = require("../../../content/collections/rewards.json").data;

export default function SmallCardCollection() {
  return (
    <div className="collection collection--small-cards">
      {// rendering our prizes
      rewards.prizes.map((entry, i) => {
        return <SmallCard entry={entry} />;
      })}
    </div>
  );
}
