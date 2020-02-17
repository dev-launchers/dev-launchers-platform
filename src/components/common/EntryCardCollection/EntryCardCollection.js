import React from "react";
import EntryCard from "../EntryCard/EntryCard.js";
import style from "./EntryCardCollection.module.css";

export default function EntryCardCollection(props) {
  return (
    <div>
      <h3 className={style.collectionTitle}>{props.title}</h3>
      <div className={style.collection}>
        {props.data.map((entry, i) => {
          return <EntryCard entry={entry} key={i} />;
        })}
      </div>
    </div>
  );
}
