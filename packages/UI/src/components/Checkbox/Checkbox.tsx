import { tv } from 'tailwind-variants';

export interface CheckboxProps {
  className?: string;
}
export default function Checkbox({ className }: CheckboxProps) {
  const checkbox = tv({
    base: 'h-6 w-6 border-2 border-solid border-gray-500',
  });
  console.log(checkbox({ className }));
  return <div className={checkbox({ className })}>stuff</div>;
}
