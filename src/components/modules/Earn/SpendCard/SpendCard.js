import React from "react";
import styles from "./SpendCard.module.css";

export default function SpendCard(props) {
  return (
    <div className={styles.entry}>
      <div className={styles.entryTitle}>{props.entry.title}</div>
      <div className={styles.entryContent}>
        {props.entry.description}
        <br />
        <br />
        <b className={styles.entryCost}>
          {props.entry.cost} <span>Points</span>
        </b>
      </div>
    </div>
  );
}
