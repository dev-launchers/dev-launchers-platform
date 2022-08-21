import React from "react";

export default function ShadowCard({
  children,
  width = "80%",
  height = "90%",
  padding = "2rem",
}) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "rgba(0,0,0,.75)",
        color: "white",
        marginLeft: "auto",
        marginRight: "auto",
        padding,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}
