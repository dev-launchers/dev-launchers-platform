import * as Dialog from '@radix-ui/react-dialog';

export interface ModalProps{
  hasCloseBtn?: boolean;
  // trigger
  // header
  // content
  // footer
}

// export interface CloseModalWrapperProps { 
//   children
// }

// export function CloseModalWrapper({ children }): CloseModalWrapperProps {
//   return (
//     <Dialog.Close asChild>
//       {children}
//     </Dialog.Close>
//   )
// }

export default function Modal({hasCloseBtn = true}:ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="">Edit profile</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black" />
        <Dialog.Content className="fixed left-1/2 top-1/2 p-8 flex flex-col items-center justify-between h-64 max-w-md rounded-lg -translate-x-1/2 -translate-y-1/2 bg-white">

          <Dialog.Title className="bg-yellow-300 w-full flex flex-row items-center justify-between">
            <h3>Edit profile</h3>
            {hasCloseBtn && <Dialog.Close asChild>
              <button className="bg-yellow-300" aria-label="Close">
                X
              </button>
            </Dialog.Close>
            }
          </Dialog.Title>

          <Dialog.Description className="bg-blue-300">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>

          <div className="">
            <Dialog.Close asChild>
              <button className="bg-yellow-300">Save changes</button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
