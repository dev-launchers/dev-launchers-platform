import React from "react";
import EntryCard from "../EntryCard/EntryCard.js";
import LargeEntryCard from "../LargeEntryCard/LargeEntryCard.js";
import style from "./EntryCardCollection.module.css";

export default function EntryCardCollection(props) {
  return (
    <div>
      <h3 className={style.collectionTitle}>{props.title}</h3>
      <div className={style.collection}>
        {props.data.map((entry, i) => {
          if (props.size == "large") {
            return <LargeEntryCard entry={entry} key={i} />;
          } else {
            return <EntryCard entry={entry} key={i} />;
          }
        })}
      </div>
    </div>
  );
}
