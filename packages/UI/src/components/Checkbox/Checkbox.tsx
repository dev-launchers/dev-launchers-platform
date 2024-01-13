import { tv } from 'tailwind-variants';

export interface CheckboxProps {
  className?: string;
}
export default function Checkbox({ className }: CheckboxProps) {

  const checkbox = tv({
    base: 'h-10 w-10 bg-red-500',
  });
  console.log(checkbox({ className }));
  return <div className={checkbox({ className })}>stuff</div>;
}