import React from "react";

import { useForm, useField, splitFormProps } from "react-form";

import style from "./SelectField.module.css";

export default function SelectField(props) {
  const [field, fieldOptions, { options, ...rest }] = splitFormProps(props);

  const {
    value = props.value,
    setValue,
    form,
    meta: { error, isTouched }
  } = useField(field, fieldOptions);

  const handleSelectChange = e => {
    setValue(e.target.value);
  };

  const currentValue =
    form.values[field] === "" || form.values[field].length == 0
      ? "none"
      : form.values[field];

  return (
    <div>
      <select
        {...rest}
        onChange={handleSelectChange}
        style={{ fontSize: "1.5rem" }}
        value={currentValue}
      >
        {" "}
        <option value="none" disabled hidden>
          Select an option...
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
