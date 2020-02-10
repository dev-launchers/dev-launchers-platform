import React from "react";

export default function SpendCard(props) {
  return (
    <div
      className="entry"
      style={{ paddingTop: "1%", backgroundColor: "#ecda56" }}
    >
      <div className="entry-title" style={{ fontSize: "1.8rem" }}>
        <b style={{ fontSize: "2rem" }}>{props.entry.title}</b>
      </div>
      <div className="entry-content" style={{ padding: "3%" }}>
        {props.entry.description}
        <br />
        <br />
        <b
          style={{
            fontFamily: "Holtwood One SC",
            color: "#806400"
          }}
        >
          {props.entry.cost} <span style={{}}>Points</span>
        </b>
      </div>
    </div>
  );
}
