import { useEffect, useState } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Avatar } from '../Avatar';

const notificationStyles = tv({
  slots: {
    container:
      ' flex gap-4 py-4 pr-4 pl-2  items-center bg-white  border-t w-full hover:bg-[#F0EDEE] md:py-4 md:pl-4 md:pr-8 lg:p-8  ',
    avatarContainer:
      ' w-12 h-12 hidden  md:flex items-center  text-center lg:flex lg:w-12 lg:h-12 lg:items-center lg:justify-center',
    detailsContentStyle:
      'grow   md:flex md:items-center lg:flex  lg:flex-row lg:items-center',
    contentContainerStyle: ' md:grow lg:grow',
    headerStyle: ' flex gap-1 ',
    usernameStyle: ' ',
    actionStyle: ' ',
    descriptionStyle: ' text-base leading-5 pt-4 text-ellipsis',
    timeStampStyle: ' text-base pt-1',
    targetStyle: ' grow-0 ',
    rounded: 'sm',
    size: 'sm',
    unRead: 'w-3 h-3 rounded-full shrink-0 bg-[#407BFF]',
    read: ' w-3 h-3 invisible shrink-0 ',
  },
});

const {
  container,
  unRead,
  read,
  avatarContainer,
  detailsContentStyle,
  contentContainerStyle,
  headerStyle,
  usernameStyle,
  actionStyle,
  descriptionStyle,
  timeStampStyle,
  targetStyle,
} = notificationStyles();

interface NotificationProps extends VariantProps<typeof notificationStyles> {
  // Avatar: React.ReactNode;
  message: string;
  name: string;
  target: string;
  targetLink: string;
  timeStamp: string;
  action: string;
  src: string;
  alt: string;
  rounded?: 'rounded' | 'sm' | 'lg' | 'full';
  size?: 'sm' | 'md' | 'lg';
  /**
   * The buttons that activate its associated content.      Dev Note: USE Trigger COMPONENT FOR BETTER ACCESSIBILITY
   */
  delayMs: number;
  status: 'read' | 'unread';
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
  rounded,
  size,
  delayMs,
  status,
  targetLink,
}: NotificationProps) {
  /**
   * Determine the width of device so i can decide the number of text in a message to display
   *
   */
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }
  console.log(windowSize);
  return (
    <>
      <div className={container()}>
        <div className={status === 'unread' ? unRead() : read()}></div>
        <div className={avatarContainer()}>
          <Avatar
            src={src}
            alt={alt}
            rounded={rounded}
            size={size}
            delayMs={delayMs}
          />
        </div>
        <div className={detailsContentStyle()}>
          <div className={contentContainerStyle()}>
            <div className={headerStyle()}>
              <strong className={usernameStyle()}>{name}</strong>
              <span className={actionStyle()}>{action}</span>
              <a href={targetLink} rel="noreferrer" target="_blank">
                <strong className={targetStyle()}>{target}</strong>
              </a>
            </div>
            <div className={descriptionStyle()}>
              {/* {windowSize.innerWidth < 761 ? (
                <span>{message.slice(0, 32)}...</span>
              ) : (
                message
              )} */}
              {message}
            </div>
          </div>
          <div className={timeStampStyle()}>{timeStamp}</div>
        </div>
      </div>
    </>
  );
}

export default Notification;
