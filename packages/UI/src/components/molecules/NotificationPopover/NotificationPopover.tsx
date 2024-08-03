import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../../Popover';
import { Bell, Settings } from 'lucide-react';
import NotificationItem from '../../NotificationItem/NotificationItem';
import natificationsData from './notificationsData';

export default function NotificationPopover() {
  const [notifications, setNotifications] = React.useState(natificationsData);
  const newNotificationsCount = notifications.reduce((count, x) => {
    return x.status == 'unRead' ? count + 1 : count;
  }, 0);

  function markAllReadHandle() {
    setNotifications((prev) => {
      return prev.map((n) => {
        n.status = 'read';
        return n;
      });
    });
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative">
          <span
            className={`absolute top-0 right-0 bg-red-700 text-white rounded-full aspect-square w-5 text-xs font-bold content-center translate-x-1/2 -translate-y-1/2 ${
              newNotificationsCount ? '' : 'hidden'
            }`}
          >
            {newNotificationsCount}
          </span>
          <Bell />
        </button>
      </PopoverTrigger>
      <PopoverContent hasCloseBtn={false}>
        <div className="text-base">
          <div className="flex items-center justify-between text-base">
            <span className="capitalize font-semibold text-xl">
              notification
            </span>
            <button
              className="text-[#357196] hover:text-[#81c3d7]"
              onClick={markAllReadHandle}
            >
              Mark all as read
            </button>
          </div>
          {notifications.map((n, i) => {
            return (
              <li>
                <NotificationItem
                  key={i}
                  action={n.action}
                  avatar={n.avatar}
                  message={n.message}
                  name={n.name}
                  profileLink={n.profileLink}
                  status={n.status}
                  target={n.target}
                  targetLink={n.targetLink}
                  timeStamp={n.timeStamp}
                />
              </li>
            );
          })}
          <div className="flex items-center justify-between">
            <a href={'/notifications'} className="text-[#357196]">
              View all notifications
            </a>
            <a
              href="/notifications/settings"
              className="flex gap-2 items-end text-black hover:text-grayscale-600 capitalize"
            >
              <Settings />
              settings
            </a>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
