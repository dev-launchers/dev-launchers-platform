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
}: InputProps) {
  return (
    <>
      <Label htmlFor={id}>
        <Typography type="label">{label}</Typography>
        {required && <span style={{ color: 'red' }}>*</span>}
        <InputWrapper>
          <Input
            width={width}
            type="text"
            name={label}
            id={id}
            autoCorrect="off"
            autoComplete="off"
            placeholder={placeholder}
            valid={touched && !error}
            error={error}
            disabled={disabled}
            onChange={onChange}
          />
          {required && touched && (error ? <Error /> : <Success />)}
        </InputWrapper>
      </Label>
      {error && touched && (
        <StyledInlineErrorMessage>{error}</StyledInlineErrorMessage>
      )}
    </>
  );
}

export default FormField;
