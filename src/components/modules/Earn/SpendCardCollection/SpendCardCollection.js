import React from "react";
import SpendCard from "../SpendCard";
import styles from "./SpendCardCollection.module.css";

// Get content data
let rewards = require("../../../../content/collections/rewards.json").data;

export default function SpendCardCollection() {
  return (
    <div className={styles.collection}>
      {// rendering our prizes
      rewards.prizes.map((entry, i) => {
        return <SpendCard entry={entry} />;
      })}
    </div>
  );
}
