import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { tv } from 'tailwind-variants';
export { Close, Description } from '@radix-ui/react-dialog';

export interface ModalProps {
  /**
   * hasCloseBtn: boolean - defaulted true, will render a close button in the top right corner of the modal
   */
  hasCloseBtn?: boolean;
  /**
   * trigger: React.ReactNode - the element that will trigger the modal to open
   */
  trigger: React.ReactNode;
  /**
   * header: React.ReactNode - the element that will be rendered in the top of the modal
   */
  header: React.ReactNode;
  /**
   * content: React.ReactNode - the element that will be rendered in the middle of the modal
   */
  content: React.ReactNode;
  /**
   * footer: React.ReactNode - the element that will be rendered at the bottom of the modal
   */
  footer: React.ReactNode;
  /**
   * className: string - the className that will be applied to the root element
   */
  className?: string;
}


/**
 * @description A modal is a dialog box/popup window that is displayed on top of the current page
 * https://www.radix-ui.com/primitives/docs/components/dialog
 * Close export is an wrapper to close the modal from a trigger element.
 * Description export is an wrapper to add a description to the modal for accessibility.
 * @example
 * <Modal
 * header={<h1>Header</h1>}
 * trigger={<button>Trigger</button>}
 * footer={<button>Footer</button>}
 * content={<p>Content</p>}
 * />
 */
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
                className="absolute right-8 top-8 flex h-7 w-7 items-center justify-center rounded-md bg-white drop-shadow-xl"
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

const modalStyles = tv({
  slots:{
    rootStyle:'min-h-80 relative fixed left-1/2 top-1/2 mx-auto flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg bg-white p-8 max-md:w-11/12 md:min-w-128',
    overlayStyle:`fixed inset-0 bg-Light-Overlay`,
  },
});