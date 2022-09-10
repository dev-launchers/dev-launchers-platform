import React from "react";

import { useField, splitFormProps } from "react-form";

import { FormInput } from "./StyledInputField";

const InputField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props);

  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps,
  } = useField(field, fieldOptions);

  const Validate = () => {
    if (isValidating) {
      return <em>Validating...</em>;
    }
    if (isTouched && error) {
      return <strong>{error}</strong>;
    }
    if (message) {
      return <small>{message}</small>;
    }
    return null;
  };
  // Build the field
  return (
    <>
      <FormInput {...getInputProps({ ref, ...rest })} />
      <div style={{ fontSize: "1rem" }}>
        {/*
          Let's inline some validation and error information
          for our field
        */}

        {Validate()}
      </div>
    </>
  );
});

InputField.displayName = "InputField";
export default InputField;
