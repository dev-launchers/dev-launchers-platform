import React from "react";
import EntryCard from "../EntryCard/EntryCard.js";
import style from "./EntryCardCollection.module.css";

export default function EntryCardCollection(props) {
  return (
    <div>
      <h3 className={style.collectionTitle}>{props.title}</h3>
      <div className={style.collection}>
        {props.data.map((items, i) => {
          return <EntryCard data={items} key={i} size={props.size} />;
        })}
      </div>
    </div>
  );
}
