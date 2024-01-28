import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { tv } from 'tailwind-variants';

export interface ModalProps {
  hasCloseBtn?: boolean;
  trigger: React.ReactNode;
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
  className?: string;
}

export { Close, Description } from '@radix-ui/react-dialog';

const modalStyles = tv({
  slots:{
    rootStyle:'min-h-80 relative fixed left-1/2 top-1/2 mx-auto flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg bg-white p-8 max-md:w-11/12 md:min-w-128',
    overlayStyle:`fixed inset-0 bg-Light-Overlay`,
  },
});

export default function Modal({
  header,
  trigger,
  footer,
  content,
  className,
  hasCloseBtn = true,
}: ModalProps) {
  const { rootStyle, overlayStyle } = modalStyles();
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={overlayStyle()} />
        <Dialog.Content className={rootStyle({ className })}>
          <Dialog.Title className="w-full">{header}</Dialog.Title>
          {hasCloseBtn && (
            <Dialog.Close asChild>
              <button
                className="absolute right-7 top-7 flex h-7 w-7 items-center justify-center rounded-md shadow-xl"
                aria-label="Close"
              >
                <X />
              </button>
            </Dialog.Close>
          )}
          <div className="my-6 min-h-36 w-full">{content}</div>
          <div className="w-full">{footer}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
