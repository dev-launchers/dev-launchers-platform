import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { tv } from 'tailwind-variants';
import CheckmarkImg from './../../assets/icons/Checkmark';

export type CheckboxProps = Omit<RadixCheckbox.CheckboxProps, 'checked'> & {
  state?: 'disable' | undefined;
  checked?: boolean;
};

const checkboxTV = tv({
  base: 'flex h-6 w-6 items-center justify-center rounded-sm border-2 border-solid border-brand-alt-nebula-500 bg-grayscale-50 hover:outline hover:outline-4 hover:outline-offset-0 hover:outline-brand-alt-nebula-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-alt-nebula-500',
  variants: {
    state: {
      disable:
        'border-grayscale-500 bg-grayscale-200 hover:outline-none hover:outline-0',
    },
    checked: {
      true: 'bg-brand-alt-nebula-500',
      disable:
        'border-grayscale-400 bg-grayscale-400 hover:outline-none hover:outline-0',
    },
  },
});

const checkmark = tv({
  base: '',
  variants: {
    checked: {
      false: 'hidden',
    },
  },
});

export default function Checkbox({
  checked = false,
  className,
  state,
  ...props
}: CheckboxProps) {
  return (
    <>
      <RadixCheckbox.Root
        className={checkboxTV({
          className,
          state,
          checked: state === 'disable' ? 'disable' : checked,
        })}
        checked={checked}
        {...props}
      >
        <RadixCheckbox.Indicator className={checkmark({ checked })}>
          <CheckmarkImg />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </>
  );
}
