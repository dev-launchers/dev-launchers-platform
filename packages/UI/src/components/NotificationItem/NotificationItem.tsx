import type { NotificationEvent, NotificationUser } from '@devlaunchers/models';
import { tv, type VariantProps } from 'tailwind-variants';
import { type WritableDeep } from 'type-fest';
import Avatar from '../atoms/Avatar/Avatar';

const compoundSlots = [
  {
    slots: [
      'actionStyle',
      'usernameStyle',
      'descriptionStyle',
      'targetStyle',
    ] as const,
    className: 'font-nunito-sans text-sm leading-normal',
  },
  {
    slots: ['targetStyle', 'usernameStyle'] as const,
    className: 'font-semibold',
  },
  {
    slots: ['timeStampStyle', 'descriptionStyle'] as const,
    className: 'font-normal',
  },
];

const notificationStyles = tv({
  slots: {
    wrapper:
      'flex items-center gap-4 border-b border-gray-800 p-4 transition-colors duration-200',
    avatarContainer: 'flex-shrink-0',
    detailsContainer: 'flex min-w-0 flex-grow items-start gap-2',
    contentContainer: 'flex min-w-0 flex-col gap-1',
    headerStyle: 'flex flex-wrap items-center gap-1',
    usernameStyle: 'text-white',
    actionStyle: 'text-gray-300',
    targetStyle: 'text-white',
    descriptionStyle: 'line-clamp-2 text-gray-300',
    timeStampStyle: 'text-sm text-gray-400',
  },
  variants: {
    status: {
      read: {
        wrapper: 'bg-transparent hover:bg-gray-800',
      },
      unRead: {
        wrapper: 'bg-[#52287A]/10 hover:bg-gray-800',
      },
    },
  },
  compoundSlots: compoundSlots as WritableDeep<typeof compoundSlots>,
});

interface NotificationProps extends VariantProps<typeof notificationStyles> {
  message: string;
  name: NotificationUser['data']['attributes']['username'];
  target: string;
  targetLink: string;
  timeStamp: string;
  action: NotificationEvent['data']['attributes']['action'];
  avatar?: { src: string; alt: string };
  className?: string;
}

function timeSincePublished(publishedAt: string) {
  const now = new Date();
  const publishedDate = new Date(publishedAt);
  const diffInMs = now.getTime() - publishedDate.getTime();

  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 0) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  } else {
    return `${diffInSeconds} second${diffInSeconds > 1 ? 's' : ''} ago`;
  }
}

const actionTexts = {
  'Idea Created': 'created the idea',
  Commented: 'commented on the idea',
};

function NotificationItem({
  message,
  name,
  target,
  timeStamp,
  action,
  targetLink,
  status,
  avatar,
  className,
}: NotificationProps) {
  const styles = notificationStyles({ status });

  return (
    <li className="list-none">
      <a
        href={targetLink}
        rel="noreferrer"
        target="_blank"
        className={`${styles.wrapper()} ${className || ''}`}
      >
        <div className={styles.avatarContainer()}>
          <Avatar
            src={avatar?.src || ''}
            alt={avatar?.alt || name || 'User avatar'}
            className="h-10 w-10 rounded-full text-black"
          />
        </div>

        <div className={styles.detailsContainer()}>
          <div className={styles.contentContainer()}>
            <div className={styles.headerStyle()}>
              <span className={styles.usernameStyle()}>{name}</span>
              <span className={styles.actionStyle()}>
                {actionTexts[action]}
              </span>
              <span className={styles.targetStyle()}>{target}</span>
            </div>
            <p className={styles.descriptionStyle()}>{message}</p>
            <time
              dateTime={timeStamp}
              className={styles.timeStampStyle()}
              aria-label={timeSincePublished(timeStamp)}
            >
              {timeSincePublished(timeStamp)}
            </time>
          </div>
        </div>
      </a>
    </li>
  );
}

export default NotificationItem;
