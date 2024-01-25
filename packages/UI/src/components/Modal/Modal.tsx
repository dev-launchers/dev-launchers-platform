import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export interface ModalProps {
  hasCloseBtn?: boolean;
  trigger: React.ReactNode;
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

export { Close, Description } from '@radix-ui/react-dialog';

export default function Modal({
  header,
  trigger,
  footer,
  content,
  hasCloseBtn = true,
}: ModalProps) {

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-Light-Overlay" />
        <Dialog.Content className="mx-auto min-h-80 fixed left-1/2 top-1/2 flex max-md:w-11/12 md:min-w-128 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg bg-white p-8">

          <Dialog.Title className="flex w-full flex-row items-center justify-between">
            {header}
            {hasCloseBtn && <Dialog.Close asChild>
                <button
                  className="flex h-7 w-7 items-center justify-center rounded-md shadow-xl"
                  aria-label="Close"
                >
                  <X />
                </button>
              </Dialog.Close>
            }
          </Dialog.Title>
          <div className="my-6 min-h-36 w-full bg-gray-100">{content}</div>
          <div className="w-full">{footer}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
