import React from "react";

import { useForm, useField, splitFormProps } from "react-form";

import style from "./FormEntry.module.css";

export default function FormEntry(props) {
  return (
    <div className={style.formEntryHolder} style={props.style}>
      <label>
        <div className={style.formEntryTitle}>
          <u>
            <b>{props.label}</b>
          </u>
        </div>
        <br />
        <div style={{ fontSize: "1rem" }}>{props.description}</div>
        {props.children}
      </label>
    </div>
  );
}
