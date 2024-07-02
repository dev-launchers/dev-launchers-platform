import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';
import { cn } from '../../utils/classesMerger';

interface SwitchProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    'asChild'
  > {
  /**
   * The controlled state of the switch. Must be used in conjunction with onCheckedChange.
   */
  checked?: SwitchPrimitives.SwitchProps['checked'];
  /**
   * The state of the switch when it is initially rendered. Use when you do not need to control its state.
   */
  defaultChecked?: SwitchPrimitives.SwitchProps['defaultChecked'];
  /**
   * When true, indicates that the user must check the switch before the owning form can be submitted.
   */
  required?: SwitchPrimitives.SwitchProps['required'];
  /**
   * Event handler called when the state of the switch changes.
   */
  onCheckedChange?: SwitchPrimitives.SwitchProps['onCheckedChange'];
  /**
   * When true, prevents the user from interacting with the switch.
   */
  disabled?: SwitchPrimitives.SwitchProps['disabled'];
  /**
   * The name of the switch. Submitted with its owning form as part of a name/value pair.
   */
  name?: SwitchPrimitives.SwitchProps['name'];
  /**
   * The value given as data when submitted with a name.
   */
  value?: SwitchPrimitives.SwitchProps['value'];
}

/**
 * A control that allows the user to toggle between checked and not checked.
 * @see http://localhost:6006/?path=/docs/components-switch--docs
 * @see https://www.radix-ui.com/primitives/docs/components/switch#root
 */
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-2xl outline outline-1 -outline-offset-1 outline-grayscale-800 transition-colors disabled:cursor-not-allowed disabled:!bg-grayscale-100 disabled:!outline-GreyScale-charcoal data-checked:bg-grayscale-800 data-unchecked:bg-grayscale-50',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className="pointer-events-none block h-6 w-6 rounded-2xl transition-transform ease-in data-checked:translate-x-6 data-checked:border data-checked:border-solid data-checked:border-black data-checked:bg-grayscale-50 data-unchecked:translate-x-0 data-unchecked:bg-grayscale-800 data-disabled:!bg-grayscale-500 data-disabled:data-checked:!border-transparent" />
  </SwitchPrimitives.Root>
));

Switch.displayName = SwitchPrimitives.Root.displayName;
export default Switch;
