import React from "react";

import { useField, splitFormProps } from "react-form";

import { FormTextArea } from "./StyledTextAreaField";

const TextAreaField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props);

  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps,
  } = useField(field, fieldOptions);

  const validate = () => {
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
      <FormTextArea {...getInputProps({ ref, ...rest })} />
      <div style={{ fontSize: "1rem" }}>
        {/*
          Let's inline some validation and error information
          for our field
        */}

        {validate()}
      </div>
    </>
  );
});

TextAreaField.displayName = "TextAreaField";
export default TextAreaField;
