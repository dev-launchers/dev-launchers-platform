import React from "react";
import { openPopupWidget } from "react-calendly";

import Button from "../../Button";

export default function ScheduleOrientationButton(props) {
  return (
    <Button
      as="button"
      style={props.style}
      onClick={() => {
        if (props.onClick) props.onClick();
        openPopupWidget({
          url: "https://calendly.com/devlaunchers/new-member-orientation",
        });
      }}
    >
      Schedule Orientation
    </Button>
  );
}
