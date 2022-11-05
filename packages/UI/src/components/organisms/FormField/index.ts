import type { ZodObject, ZodRawShape } from 'zod';

export { default } from './FormField';

export interface InputProps {
  initialValue: string;
  label: string;
  placeholder: string;
  required: boolean;
  disabled: boolean;
  schema: ZodObject<ZodRawShape>;
}
