import React from "react";
import { Calendly } from "./StyledCalendlyWidget";

export default function CalendlyWidget() {
  return (
    <div style={{ height: "20%", width: "40%" }}>
      <Calendly
        url="https://calendly.com/devlaunchers"
        styles={{ height: "1020px", minWidth: "320px" }}
      />
    </div>
  );
}
