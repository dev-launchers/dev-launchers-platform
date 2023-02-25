import Error from '../../../assets/icons/Error';
import Success from '../../../assets/icons/Success';
import Typography from '../../atoms/Typography';
import {
  Label,
  Input,
  StyledInlineErrorMessage,
  InputWrapper,
} from './StyledFormField';
import type { InputProps } from '.';

function FormField({
  width,
  label,
  id,
  placeholder,
  required = false,
  disabled = false,
  error,
  touched,
  onChange,
  name,
}: InputProps) {
  return (
    <>
      <Label htmlFor={id}>
        <Typography type="label">
          {label} {required && <span css={{ color: 'red' }}>*</span>}
        </Typography>
        <InputWrapper>
          <Input
            width={width}
            type="text"
            name={name}
            id={id}
            autoCorrect="off"
            autoComplete="off"
            placeholder={placeholder}
            valid={touched && !error}
            error={error}
            disabled={disabled}
            onChange={onChange}
          />
          {/* The field doesn't have to be required for the Error Icon to show.
           For Example: I want to validate if the url passed is correct but it's not required for them fill. */}
          {/* required && */ touched && (error ? <Error /> : <Success />)}
        </InputWrapper>
      </Label>
      {error && touched && (
        <StyledInlineErrorMessage>{error}</StyledInlineErrorMessage>
      )}
    </>
  );
}

export default FormField;
