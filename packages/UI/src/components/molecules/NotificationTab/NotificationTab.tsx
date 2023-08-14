import * as RadixTabs from '@radix-ui/react-tabs';
import { type FC, type ReactNode } from 'react';
import { tv } from 'tailwind-variants';

type TabsProps = Omit<
  RadixTabs.TabsProps,
  'asChild' | 'defaultValue' | 'content' | 'onValueChange'
> &
  Omit<RadixTabs.TabsListProps, 'asChild' | 'loop'> &
  Omit<RadixTabs.TabsContentProps, 'asChild' | 'value'> & {
    /**
     * The buttons that activate its associated content.      Dev Note: USE Trigger COMPONENT FOR BETTER ACCESSIBILITY
     */
    triggers: ReactNode;
    /**
     * The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs.
     */
    defaultValue?: string;
    /**
     * Contains the content associated with each trigger.
     */
    content: ReactNode;
    /**
     * Event handler called when the value changes.
     */
    onValueChange?: (value: string) => void;
    /**
     * The value for the selected tab, if controlled
     */
    value: string;
    /**
     * When true, keyboard navigation will loop from last tab to first, and vice versa.
     */
    loop?: boolean;
  };

/**
 * @description A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * https://www.radix-ui.com/primitives/docs/components/tabs/1.0.4
 */
const Tabs = ({
  loop = true,
  triggers,
  activationMode,
  content,
  defaultValue,
  onValueChange,
  value,
  ...props
}: TabsProps) => {
  return (
    <RadixTabs.Root
      {...props}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      <RadixTabs.List loop={loop}>{triggers}</RadixTabs.List>
      {props.children}
    </RadixTabs.Root>
  );
};
export default Tabs;

const TriggerStyles = tv({
  base: 'inline-flex w-64 h-11 gap-2 py-3 justify-center items-center flex-shrink-0 font-nunito-sans font-normal text-[1rem] text-[#888888] hover:bg-[#f9f9f9] data-[state=active]:text-[#000000] data-[state=active]:border-solid data-[state=active]:border-[#3350e5] data-[state=active]:border-b-2 data-[state=active]:font-bold',
});

export const Trigger: FC<RadixTabs.TabsTriggerProps> = ({
  className,
  ...props
}) => {
  const styles = TriggerStyles({ className });
  return <RadixTabs.Trigger className={styles} {...props} />;
};
