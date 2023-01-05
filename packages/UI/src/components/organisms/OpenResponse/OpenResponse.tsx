import Typography from '../../atoms/Typography';
import {
  Label,
  Input,
  StyledInlineErrorMessage,
  InputWrapper,
} from './StyledOpenResponse';
import type { OpenResponseProps } from '.';

function OpenResponse({
  width,
  rows,
  cols,
  label,
  name,
  id,
  placeholder,
  required = false,
  disabled = false,
  error,
  touched,
  onChange,
}: OpenResponseProps) {
  return (
    <>
      <Label htmlFor={id}>
        <Typography type="label">
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </Typography>
        <InputWrapper>
          <Input
            width={width}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            name={name}
            id={id}
            autoCorrect="off"
            autoComplete="off"
            valid={touched && !error}
            error={error}
            disabled={disabled}
            onChange={onChange}
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
