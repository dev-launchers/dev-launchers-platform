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
    className: 'font-nunito-sans text-base leading-normal',
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
      'text-right font-nunito-sans text-base leading-6 text-grayscale-400',
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
  name: string;
  target: string;
  targetLink: string;
  profileLink: string;
  /**
   * TimeStamp in this ISO_8601 duration format
   * @description it starts with P[duration designator, stands for period) followed by number and Y or M or D then T[time designator] followed by number and H or M or S
   * @example "P3Y6M4DT12H30M5S" represents a duration of "three years, six months, four days, twelve hours, thirty minutes, and five seconds".
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   */
  timeStamp: string;
  action: string;

  avatar: {
    src: React.ComponentProps<typeof Avatar>['src'];
    alt: React.ComponentProps<typeof Avatar>['alt'];
  };
}

/**
 * @description A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * https://www.radix-ui.com/primitives/docs/components/tabs/1.0.4
 *
 */

function NotificationItem({
  message,
  name,
  target,
  timeStamp,
  action,
  targetLink,
  profileLink,
  status,
  avatar,
}: NotificationProps) {
  const {
    wrapper,
    statusIndicator,
    avatarContainer,
    headerStyle,
    detailsContainer,
    contentContainer,
    usernameStyle,
    actionStyle,
    targetStyle,
    descriptionStyle,
    timeStampStyle,
  } = notificationStyles({ status });

  return (
    <li className="list-none">
      <a
        href={targetLink}
        rel="noreferrer"
        target="_blank"
        className={wrapper()}
      >
        <span className={statusIndicator()}></span>
        <a
          href={profileLink}
          rel="noreferrer"
          target="_blank"
          className={avatarContainer()}
        >
          <Avatar {...avatar} />
        </a>
        <div className={detailsContainer()}>
          <div className={contentContainer()}>
            <div className={headerStyle()}>
              <a
                href={profileLink}
                rel="noreferrer"
                target="_blank"
                className={usernameStyle()}
              >
                <strong>{name}</strong>
              </a>
              <span className={actionStyle()}>{action}</span>
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
          <time dateTime={timeStamp} className={timeStampStyle()}>
            {timeStamp.replaceAll('T', '').replaceAll('P', '')} ago
          </time>
        </div>
      </a>
    </li>
  );
}

export default NotificationItem;
