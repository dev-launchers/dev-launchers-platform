import React from "react";
import EntryCardCollection from "../EntryCardCollection";

export default function Section(props) {
  return (
    <div
      style={{
        borderLeft: "1px solid black",
        marginBottom: "10%"
      }}
    >
      <h2 style={{ marginLeft: "2%", marginBottom: "0" }}>{props.title}</h2>
      <div key={"collection" + props.title}>
        {Object.keys(props.data).map(groupTitle => {
          const group = props.data[groupTitle];
          return (
            <div
              style={{
                borderLeft: "1px solid black",
                marginLeft: "2%"
              }}
            >
              <EntryCardCollection data={group} title={groupTitle} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
