import React from "react";
import SpendCard from "../SpendCard";
import { Collection } from "./StyledSpendCardCollection";

// Get content data
const rewards = require("../../../../content/collections/rewards.json").data;

export default function SpendCardCollection() {
  return (
    <Collection>
      {
        // rendering our prizes
        rewards.prizes.map((entry, i) => (
          <SpendCard key={i} entry={entry} />
        ))
      }
    </Collection>
  );
}
