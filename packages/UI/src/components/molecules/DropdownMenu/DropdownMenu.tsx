'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Circle } from 'lucide-react';
import * as React from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '../../../utils/classesMerger';
import Checkbox from '../../atoms/Checkbox';

const DropdownMenu = DropdownMenuPrimitive.Root;

// Not yet used dropdown menu options.
// const DropdownMenuGroup = DropdownMenuPrimitive.Group;
// const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
// const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const dropdownStyles = tv({
  slots: {
    trigger:
      'flex items-center justify-between rounded-md bg-black px-8 py-4 capitalize text-white',
    content:
      'overflow-hidden shadow-md data-sideBottom:-translate-y-2 data-sideBottom:rounded-b-xl data-sideTop:translate-y-2 data-sideTop:rounded-t-xl',
  },
  variants: {
    size: {
      small: {
        trigger: 'w-48',
        content: 'w-48',
      },
      medium: {
        trigger: 'w-60',
        content: 'w-60',
      },
      large: {
        trigger: 'w-80',
        content: 'w-80',
      },
    },
  },
});

const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger> & {
    // Predetermined sizes for Dropdown Trigger.
    size?: 'small' | 'medium' | 'large';
  }
>(({ className, size = 'medium', children, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger
    ref={ref}
    className={cn(dropdownStyles({ size }).trigger(), className)}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Trigger>
));
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    // Inset is to determine if it needs a left padding.
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm h-10 px-4 py-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> & {
    // Prop passed to determine when any item in the CheckboxItem is clicked on, not just checkbox.
    onCheckedChange?: (checked: boolean) => void;
  }
>(({ className, children, checked, onCheckedChange, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex w-60 h-10 px-4 py-2 cursor-default select-none items-center rounded-sm py-1.5 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50',
      className
    )}
    checked={checked}
    onCheckedChange={onCheckedChange}
    {...props}
  >
    <span className="absolute left-10 flex h-6 w-6 items-center justify-center gap-2">
      <Checkbox
        className="h-6 w-6"
        checked={checked}
        // onClick={onCheckedChange }
      />
      {children}
    </span>
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex w-60 h-10 px-4 py-2 cursor-default select-none items-center rounded-sm py-1.5 pl-10 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-6 w-6 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-6 w-6 fill-current" strokeWidth={1} />
      </DropdownMenuPrimitive.ItemIndicator>
      <Circle className="h-6 w-6 data-checked:!hidden" strokeWidth={1} />
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
    // Predetermined sizes for Dropdown Trigger.
    size?: 'small' | 'medium' | 'large';
  }
>(({ className, children, size = 'medium', sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(dropdownStyles({ size }).content(), className)}
      {...props}
    >
      <div className="pointer-events-none h-2 bg-transparent opacity-0 data-sideBottom:opacity-100" />
      <div className="bg-white px-8 py-4">{children}</div>
      <div className="pointer-events-none h-2  bg-transparent opacity-0 data-sideTop:opacity-100" />
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

// Everything below this comment is things not yet implmented.
/*
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-open:bg-accent',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-open:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-open:fade-in-0 data-[state=closed]:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
*/
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
};
