import React from "react";

import FlexPageSection from "../FlexPageSection";

export default function ShadowCard({
  children,
  width = "80%",
  height = "90%",
  contentWidth = "80%",
  contentHeight = "90%",
  padding = "2rem"
}) {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: "rgba(0,0,0,.75)",
        color: "white",
        padding: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
        padding: padding,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </div>
  );
}
