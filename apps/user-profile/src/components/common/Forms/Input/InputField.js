import FormField from '@devlaunchers/components/src/components/organisms/FormField';

const InputField = ({
  customLabel,
  error,
  label,
  onChange,
  placeholder,
  required,
  touched,
  name,
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
      name={name}
      className={className}
      value={value}
    ></FormField>
  );
};

export default InputField;
