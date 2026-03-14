import FormField from '@devlaunchers/components/src/components/organisms/FormField';

const InputField = ({
  customLabel,
  error,
  label,
  onChange,
  placeholder,
  required,
  touched,
  field,
  className,
  value,
}) => {
  return (
    <FormField
      error={error}
      label={label}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      touched={touched}
      field={field}
      className={className}
      value={value}
    ></FormField>
  );
};

export default InputField;
