import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { tv, type VariantProps } from 'tailwind-variants';
import CheckmarkImg from './../../assets/icons/Checkmark';

const CheckboxStyles = tv({
  slots: {
    rootStyles:
      'flex h-6 w-6 items-center justify-center rounded-sm border-2 border-solid border-brand-alt-nebula-500 bg-grayscale-50 hover:outline hover:outline-4 hover:outline-offset-0 hover:outline-brand-alt-nebula-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-alt-nebula-500',
    indicatorStyle: '',
  },
  variants: {
    state: {
      disable: {
        rootStyles:
          'border-grayscale-500 bg-grayscale-200 hover:outline-none hover:outline-0',
      },
    },
    checked: {
      true: {
        rootStyles: 'bg-brand-alt-nebula-500',
      },
      false: {
        rootStyles:
          'border-grayscale-400 bg-grayscale-400 hover:outline-none hover:outline-0',
        indicatorStyle: 'hidden',
      },
    },
  },
});

export type CheckboxProps = Omit<RadixCheckbox.CheckboxProps, 'checked'> &
  VariantProps<typeof CheckboxStyles> & {};


export default function Checkbox({
  checked = false,
  className,
  state,
  ...props
}: CheckboxProps) {
  const { indicatorStyle, rootStyles } = CheckboxStyles({ checked, state });
  return (
    <>
      <RadixCheckbox.Root
        className={rootStyles({
          className,
        })}
        checked={checked}
        {...props}
      >
        <RadixCheckbox.Indicator className={indicatorStyle({})}>
          <CheckmarkImg />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </>
  );
}
