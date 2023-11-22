import { useEffect, useState } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Avatar } from '../Avatar';
import useResponsive from 'hooks/useResponsive';

const notificationStyles = tv({
  slots: {
    container:
      ' flex gap-4 py-4 pr-4 pl-2  items-center bg-white  border-t w-full hover:bg-grayscale-100 md:py-4 md:pl-4 md:pr-8 lg:p-8  ',
    avatarContainer:
      ' w-12 h-12 hidden  md:flex items-center  text-center lg:flex lg:w-12 lg:h-12 lg:items-center lg:justify-center',
    detailsContentStyle:
      'grow   md:flex md:items-center lg:flex  lg:flex-row lg:items-center  ',
    contentContainerStyle: ' md:grow lg:grow  flex flex-col gap-1 w-full',
    headerStyle: ' flex gap-1 ',
    usernameStyle: ' ',
    actionStyle: ' ',
    descriptionStyle: ' text-base leading-5 ',
    timeStampStyle: ' text-base pt-1',
    targetStyle: ' grow-0 ',
    rounded: 'sm',
    size: 'sm',
    status: 'w-3 h-3 shrink-0',
  },
  variants: {
    readStatus: {
      read: {
        status: 'invisible'
      },
      unRead: {
        status: 'rounded-full bg-[#407BFF]'
      }
    }
  }
});


interface NotificationProps extends VariantProps<typeof notificationStyles> {
  // Avatar: React.ReactNode;
  message: string;
  name: string;
  target: string;
  targetLink: string;
  profileLink: string;
  timeStamp: string;
  action: string;
  src: string;
  alt: string;
  /**
   * The buttons that activate its associated content.      Dev Note: USE Trigger COMPONENT FOR BETTER ACCESSIBILITY
   */
  delayMs: number;
}

/**
 * @description A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * https://www.radix-ui.com/primitives/docs/components/tabs/1.0.4
 *
 */

function Notification({
  message,
  name,
  target,
  timeStamp,
  action,
  src,
  alt,
  targetLink,
  profileLink,
  readStatus,
}: NotificationProps) {
  /**
   * Determine the width of device so i can decide the number of text in a message to display
   *
   */
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const {isMobile} = useResponsive();
  const {
    container,
    avatarContainer,
    detailsContentStyle,
    contentContainerStyle,
    headerStyle,
    usernameStyle,
    actionStyle,
    descriptionStyle,
    timeStampStyle,
    targetStyle,
    status,
  } = notificationStyles({readStatus});
  // useEffect(() => {
  //   function handleWindowResize() {
  //     setWindowSize(getWindowSize());
  //   }

  //   window.addEventListener('resize', handleWindowResize);

  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // }, []);

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }
  console.log(windowSize);
  return (
    <>
      <div className={container()}>
        <div className={status()}></div>
        <div className={avatarContainer()}>
          <a href={profileLink} rel="noreferrer" target="_blank">
            <Avatar
              src={src}
              alt={alt}
              rounded={'full'}
              size={'md'}
            />
          </a>
        </div>
        <div className={detailsContentStyle()}>
          <div className={contentContainerStyle()}>
            <div className={headerStyle()}>
              <a href={profileLink} rel="noreferrer" target="_blank">
                <strong className={usernameStyle()}>{name}</strong>
              </a>
              <span className={actionStyle()}>{action}</span>
              <a href={targetLink} rel="noreferrer" target="_blank">
                <strong className={targetStyle()}>{target}</strong>
              </a>
            </div>
            <div className={descriptionStyle()}>
              {isMobile ? (
                <span>{message.slice(0, 33)}...</span>
              ) : (
                message
              )}
            </div>
          </div>
          <div className={timeStampStyle()}>{timeStamp}</div>
        </div>
      </div>
    </>
  );
}

export default Notification;
