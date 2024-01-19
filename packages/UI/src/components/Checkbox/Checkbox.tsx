import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { tv, type VariantProps } from 'tailwind-variants';
import CheckmarkImg from './../../assets/icons/Checkmark';

const checkboxStyles = tv({
  slots: {
    rootStyle:
      'flex h-6 w-6 items-center justify-center rounded-sm border-2 border-solid border-brand-alt-nebula-500 bg-grayscale-50 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-alt-nebula-500 hover:outline hover:outline-4 hover:outline-offset-0 hover:outline-brand-alt-nebula-100 disabled:border-grayscale-500 disabled:bg-grayscale-200 disabled:hover:outline-none disabled:hover:outline-0 hover:disabled:outline-0 data-checked:bg-brand-alt-nebula-500 data-checked:disabled:bg-grayscale-200',
    indicatorStyle: '',
  },
  variants: {},
});

export type CheckboxProps = VariantProps<typeof checkboxStyles> &
  Omit<
    RadixCheckbox.CheckboxProps,
    | 'checked'
    | 'disabled'
    | 'defaultChecked'
    | 'onCheckedChange'
    | 'required'
    | 'name'
    | 'value'
  > & {
    /**
     * The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange.
     */
    checked?: RadixCheckbox.CheckboxProps['checked'] & NonNullable<unknown>;
    /**
     * When true, prevents the user from interacting with the checkbox.
     */
    disabled?: RadixCheckbox.CheckboxProps['disabled'];
    /**
     * The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.
     */
    defaultChecked?: RadixCheckbox.CheckboxProps['defaultChecked'] &
      NonNullable<unknown>;
    /**
     * Event handler called when the checked state of the checkbox changes.
     */
    onCheckedChange?: RadixCheckbox.CheckboxProps['onCheckedChange'];
    /**
     * When true, indicates that the user must check the checkbox before the owning form can be submitted.
     */
    required?: RadixCheckbox.CheckboxProps['required'];
    /**
     * The name of the checkbox. Submitted with its owning form as part of a name/value pair.
     */
    name?: RadixCheckbox.CheckboxProps['name'];
    /**
     * The value given as data when submitted with a name.
     */
    value?: RadixCheckbox.CheckboxProps['value'];
  };

/**
 * @description Created with the Checkbox component from Radix UI.
 * https://www.radix-ui.com/primitives/docs/components/checkbox
 */

export default function Checkbox({
  className,
  onCheckedChange,
  checked,
  ...props
}: CheckboxProps) {
  const { rootStyle, indicatorStyle } = checkboxStyles();
  return (
    <RadixCheckbox.Root
      className={rootStyle({
        className,
      })}
      checked={checked}
      onCheckedChange={onCheckedChange}
      {...props}
    >
      <RadixCheckbox.Indicator className={indicatorStyle()}>
        <CheckmarkImg />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}
