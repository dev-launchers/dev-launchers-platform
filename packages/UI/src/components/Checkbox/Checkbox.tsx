import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { tv, type VariantProps } from 'tailwind-variants';
import CheckmarkImg from './../../assets/icons/Checkmark';

const checkboxStyles = tv({
  slots: {
    rootStyle:
      'flex h-6 w-6 items-center justify-center rounded-sm border-2 border-solid border-brand-alt-nebula-500 bg-grayscale-50 hover:outline hover:outline-4 hover:outline-offset-0 hover:outline-brand-alt-nebula-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-alt-nebula-500 disabled:border-grayscale-500 disabled:bg-grayscale-200 disabled:hover:outline-none disabled:hover:outline-0 hover:disabled:outline-0 data-checked:bg-brand-alt-nebula-500 data-checked:disabled:bg-grayscale-200',
    indicatorStyle: '',
  },
  variants: {
    checked: {
      true: {
        rootStyle: 'bg-brand-alt-nebula-500',
      },
      false: {
        indicatorStyle: 'hidden',
      },
    },
  },
});

export type CheckboxProps = RadixCheckbox.CheckboxProps &
  VariantProps<typeof checkboxStyles>;

/**
 * @description Created with the Checkbox component from Radix UI.
 * https://www.radix-ui.com/primitives/docs/components/checkbox
 */

export default function Checkbox({ className, ...props }: CheckboxProps) {
  const { rootStyle, indicatorStyle } = checkboxStyles({
    checked: props.checked,
  });
  return (
    <RadixCheckbox.Root
      className={rootStyle({
        className,
      })}
      {...props}
    >
      <RadixCheckbox.Indicator className={indicatorStyle()}>
        <CheckmarkImg />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}
