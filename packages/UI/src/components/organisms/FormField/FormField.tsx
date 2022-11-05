import { Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import error from '../../../assets/icons/rawSvg/alert-triangle.svg';
import success from '../../../assets/icons/rawSvg/check-circle.svg';
import {
  Label,
  Input,
  StyledInlineErrorMessage,
  Icon,
  InputWrapper,
} from './StyledFormField';
import type { InputProps } from '.';

function FormField({
  initialValue,
  label,
  placeholder,
  required,
  disabled,
  schema,
}: InputProps) {
  return (
    <Formik
      initialValues={{ [label]: initialValue }}
      validationSchema={toFormikValidationSchema(schema)}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, handleSubmit }) => {
        return (
          <>
            <Label htmlFor={label}>
              {label} {required && <span style={{ color: 'red' }}>*</span>}
              <InputWrapper>
                <Input
                  type="text"
                  name={label}
                  id={label}
                  autoCorrect="off"
                  autoComplete="off"
                  placeholder={placeholder}
                  valid={touched[label] && !errors[label]}
                  error={touched[label] && errors[label]}
                  disabled={disabled}
                />
                {required && touched[label] && (
                  <Icon src={errors[label] ? error : success} />
                )}
              </InputWrapper>
            </Label>
            {errors[label] && touched[label] && (
              <StyledInlineErrorMessage>
                {errors[label]}
              </StyledInlineErrorMessage>
            )}
          </>
        );
      }}
    </Formik>
  );
}

export default FormField;
