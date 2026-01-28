import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import * as React from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '../../../utils/classesMerger';

const modalStyles = tv({
  slots: {
    contentStyle:
      'min-h-80 min-w-96 fixed left-1/2 top-1/2 z-50 mx-auto my-8 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg bg-white p-8 max-md:w-11/12',
    overlayStyle: `fixed inset-0 bg-Light-Overlay`,
  },
});

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

/**
 * A layer that covers the inert portion of the view when the dialog is open.
 */
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const { overlayStyle } = modalStyles();
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={overlayStyle({ className })}
      {...props}
    />
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    /**
     * Boolean when set to false will remove the close button in the top right corner of the dialog.
     */
    hasCloseBtn?: boolean;
  }
>(({ className, children, hasCloseBtn = true, ...props }, ref) => {
  const { contentStyle } = modalStyles();
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={contentStyle({ className })}
        {...props}
      >
        {children}
        {hasCloseBtn && (
          <DialogPrimitive.Close className="absolute right-8 top-8 flex items-center justify-center rounded-md bg-white drop-shadow-xl">
            <X className="h-6 w-6" />
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});

DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mb-8', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-8', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

/**
 * An accessible title to be announced when the dialog is opened.
 * If you want to hide the title, add sr-only className to it.
 */
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn('', className)} {...props} />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

/**
 * An optional accessible description to be announced when the dialog is opened.
 * If you want to hide the description, add sr-only className to it. If you want to remove the description entirely, remove this part and pass aria-describedby={undefined} to DialogContent.
 */
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
