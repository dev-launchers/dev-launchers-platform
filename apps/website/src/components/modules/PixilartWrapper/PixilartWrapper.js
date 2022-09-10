/* eslint-disable react/no-unescaped-entities */
import React from "react";

import style from "./PixilartWrapper.module.css";

export default function PixilartWrapper(props) {
  // Get image name from url
  const imageName = props.pixilartId.split("-").slice(0, -1).join("-");

  return (
    <div style={{ height: "100vh" }}>
      <div
        className={style.blinking}
        style={{
          position: "relative",
          width: "100vw",
          height: "5vh",
          backgroundColor: "#333",
          color: "yellow",
        }}
      >
        <div style={{ marginLeft: "18%" }}>
          ↓{" "}
          <span style={{ fontSize: "1rem" }}>
            (After making your changes DOWNLOAD the image, and then RENAME it to
            "<b>{imageName}.png?webp</b>")
          </span>
        </div>
      </div>
      <iframe
        style={{
          width: "100vw",
          height: "95vh",
          border: "0px solid transparent",
        }}
        src={`https://pixilart.com/draw/${props.pixilartId}`}
      />
    </div>
  );
}
