import { tv } from 'tailwind-variants';
import Checkmark from './../../assets/icons/Checkmark';

export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: 'focus' | 'disable' | 'hover' | undefined;
  checked?: boolean;
}
export default function Checkbox({
  checked = false,
  className,
  state,
  ...props
}: CheckboxProps) {
  const checkbox = tv({
    base: 'flex h-6 w-6 items-center justify-center rounded-sm border-2 border-solid border-brand-alt-nebula-500 bg-grayscale-50',
    variants: {
      state: {
        focus:
          'outline outline-2 outline-offset-2 outline-brand-alt-nebula-500',
        hover:
          'outline outline-4 outline-offset-0 outline-brand-alt-nebula-100',
        disable: 'border-grayscale-500 bg-grayscale-200',
      },
      checked: {
        true: `${
          state !== 'disable'
            ? 'bg-brand-alt-nebula-500'
            : 'border-grayscale-400 bg-grayscale-400'
        }`,
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

  return (
    <div className={checkbox({ className, state, checked })} {...props}>
      <Checkmark className={checkmark({ checked })} />
    </div>
  );
}
