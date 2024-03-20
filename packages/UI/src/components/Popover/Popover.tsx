'use client';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { X } from 'lucide-react';
import * as React from 'react';
import { cn } from '../../utils/classesMerger';

/**
 * @see http://localhost:6006/?path=/docs/components-popover--docs
 */

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;
const PopoverClose = PopoverPrimitive.Close;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    /**
     * Boolean when set to false will remove the close button in the top right corner of the dialog.
     */
    hasCloseBtn?: boolean;
  }
>(
  (
    {
      className,
      children,
      align = 'center',
      hasCloseBtn = true,
      sideOffset = 4,
      ...props
    },
    ref
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 rounded-md border bg-white p-8 text-popover-foreground shadow-md outline-none data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95',
          className
        )}
        {...props}
      >
        {children}
        {hasCloseBtn && (
          <PopoverPrimitive.Close className="absolute right-8 top-8 flex items-center justify-center rounded-md bg-white drop-shadow-xl">
            <X className="h-6 w-6" />
          </PopoverPrimitive.Close>
        )}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverClose };
