import React from "react";
import SpendCard from "../SpendCard";
import { Collection } from "./StyledSpendCardCollection";

// Get content data
let rewards = require("../../../../content/collections/rewards.json").data;

export default function SpendCardCollection() {
  return (
    <Collection>
      {// rendering our prizes
      rewards.prizes.map((entry, i) => {
        return <SpendCard entry={entry} />;
      })}
    </Collection>
  );
}
