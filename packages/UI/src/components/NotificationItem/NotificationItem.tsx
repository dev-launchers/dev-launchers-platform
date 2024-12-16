import { tv, type VariantProps } from 'tailwind-variants';
import { type WritableDeep } from 'type-fest';
import Avatar from '../atoms/Avatar/Avatar';
import { NotificationEvent, NotificationUser } from '@devlaunchers/models';

const compoundSlots = [
  {
    slots: [
      'actionStyle',
      'usernameStyle',
      'descriptionStyle',
      'targetStyle',
    ] as const,
    className: 'font-nunito-sans text-sm md:text-base leading-normal',
  },
  {
    slots: ['targetStyle', 'usernameStyle'] as const,
    className: 'font-bold',
  },
  {
    slots: ['timeStampStyle', 'descriptionStyle'] as const,
    className: 'font-normal',
  },
];

const notificationStyles = tv({
  slots: {
    wrapper:
      'flex items-center gap-4 py-4 pl-2 pr-4 hover:bg-grayscale-100 md:p-8',
    avatarContainer: 'hidden md:inline-flex',
    detailsContainer:
      'flex flex-shrink-0 flex-grow basis-0 flex-col items-start gap-2 md:flex-row md:flex-wrap md:content-start',
    contentContainer:
      'md:flex md:flex-shrink-0 md:flex-grow md:basis-0 md:flex-col md:items-start md:gap-1',
    headerStyle: 'flex items-start gap-1 self-stretch',
    usernameStyle: '',
    actionStyle: 'leading-normal',
    targetStyle: '',
    descriptionStyle: 'line-clamp-2 self-stretch md:order-1',
    timeStampStyle:
      'text-right font-nunito-sans text-sm md:text-base leading-6 text-grayscale-400',
    statusIndicator: 'h-3  w-3 shrink-0 rounded-full',
  },
  variants: {
    status: {
      read: {
        wrapper: 'text-grayscale-500',
        statusIndicator: 'invisible',
      },
      unRead: {
        wrapper: 'text-grayscale-900',
        statusIndicator: 'bg-alert-notification-o-100-600',
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
  /**
   * TimeStamp in ISO_8601 duration format
   * @description it starts with P[duration designator, stands for period) followed by number and Y or M or D then T[time designator] followed by number and H or M or S
   * @example "P3Y6M4DT12H30M5S" represents a duration of "three years, six months, four days, twelve hours, thirty minutes, and five seconds".
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   */
  timeStamp: string;
  action: NotificationEvent['data']['attributes']['action'];

  avatar: {
    src: React.ComponentProps<typeof Avatar>['src'];
    alt: React.ComponentProps<typeof Avatar>['alt'];
  };
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
}: NotificationProps) {
  const {
    wrapper,
    statusIndicator,
    headerStyle,
    detailsContainer,
    contentContainer,
    actionStyle,
    targetStyle,
    descriptionStyle,
    timeStampStyle,
  } = notificationStyles({ status });

  return (
    <li className="list-none !text-xs">
      <a
        href={targetLink}
        rel="noreferrer"
        target="_blank"
        className={wrapper()}
      >
        <span className={statusIndicator()}></span>

        <Avatar {...avatar} />

        <div className={detailsContainer()}>
          <div className={contentContainer()}>
            <div className={headerStyle()}>
              <strong>{name}</strong>

              <span className={actionStyle()}>{actionTexts[action]}</span>
              <a
                href={targetLink}
                rel="noreferrer"
                target="_blank"
                className={targetStyle()}
              >
                <strong>{target}</strong>
              </a>
            </div>
            <p className={descriptionStyle()}>{message}</p>
          </div>
          <time
            dateTime={timeStamp}
            className={timeStampStyle()}
            aria-label={timeSincePublished(timeStamp)}
          >
            {timeSincePublished(timeStamp)}
          </time>
        </div>
      </a>
    </li>
  );
}

export default NotificationItem;
