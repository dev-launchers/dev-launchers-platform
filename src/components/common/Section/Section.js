import React from "react";
import EntryCardCollection from "../EntryCardCollection";
import styles from "./Section.module.css";

export default function Section(props) {
  return (
    <div className={styles.section}>
      <h2>{props.title}</h2>
      <div key={"collection" + props.title}>
        {Object.keys(props.data).map(groupTitle => {
          const group = props.data[groupTitle];
          return (
            <div className={styles.group}>
              <EntryCardCollection data={group} title={groupTitle} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
