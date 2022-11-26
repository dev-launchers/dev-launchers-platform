import {
  Label,
  Input,
  StyledInlineErrorMessage,
  InputWrapper,
} from './StyledOpenResponse';
import type { OpenResponseProps } from '.';

function OpenResponse({
  rows,
  cols,
  label,
  placeholder,
  required = false,
  disabled = false,
  error,
  touched,
}: OpenResponseProps) {
  return (
    <>
      <Label htmlFor={label}>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
        <InputWrapper>
          <Input
            component="textarea"
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            name={label}
            id={label}
            autoCorrect="off"
            autoComplete="off"
            valid={touched && !error}
            error={touched && error}
            disabled={disabled}
          />
        </InputWrapper>
      </Label>
      {error && touched && (
        <StyledInlineErrorMessage>{error}</StyledInlineErrorMessage>
      )}
    </>
  );
}

export default OpenResponse;
