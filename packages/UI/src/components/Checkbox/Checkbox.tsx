import * as RadixCheckbox from '@radix-ui/react-checkbox';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import CheckmarkImg from './../../assets/icons/Checkmark';

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
     * When true, prevents the user from interacting with the checkbox.
     */
    disabled?: RadixCheckbox.CheckboxProps['disabled'];
    /**
     * The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange.
     */
    checked?: RadixCheckbox.CheckedState & NonNullable<unknown>;
    /**
     * The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.
     */
    defaultChecked?: RadixCheckbox.CheckedState & NonNullable<unknown>;
    /**
     * Event handler called when the checked state of the checkbox changes.
     */
    onCheckedChange?: (
      checked: RadixCheckbox.CheckedState & NonNullable<unknown>
    ) => void;
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

const checkboxStyles = tv({
  slots: {
    rootStyle:
      'inline-flex h-6 w-6 items-center justify-center rounded-sm border-2 border-solid border-brand-alt-nebula-500 bg-grayscale-50 hover:outline hover:outline-4 hover:outline-offset-0 hover:outline-brand-alt-nebula-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-alt-nebula-500 disabled:border-grayscale-500 disabled:bg-grayscale-200 hover:disabled:outline-none hover:disabled:outline-0 data-checked:bg-brand-alt-nebula-500 disabled:data-checked:border-grayscale-400 disabled:data-checked:bg-grayscale-400',
    indicatorStyle: '',
  },
});

const Checkbox = React.forwardRef<
  React.ElementRef<typeof RadixCheckbox.Root>,
  CheckboxProps
>(({ className, ...props }: CheckboxProps, ref) => {
  const { rootStyle, indicatorStyle } = checkboxStyles();
  return (
    <div className="p-1">
      <RadixCheckbox.Root
        className={rootStyle({
          className,
        })}
        ref={ref}
        {...props}
      >
        <RadixCheckbox.Indicator className={indicatorStyle()}>
          <CheckmarkImg />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
