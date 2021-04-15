import React from "react";

import { useForm, useField, splitFormProps } from "react-form";

import style from "./SelectField.module.css";

export default function SelectField(props) {
  const [field, fieldOptions, { options, ...rest }] = splitFormProps(props);

  const {
    value = "",
    setValue,
    meta: { error, isTouched }
  } = useField(field, fieldOptions);

  const handleSelectChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <select
        {...rest}
        onChange={handleSelectChange}
        style={{ fontSize: "1.5rem" }}
      >
        {" "}
        <option value="none" selected disabled hidden>
          Select an Option
        </option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>{" "}
      {isTouched && error ? <em>{error}</em> : null}
    </div>
  );
}
