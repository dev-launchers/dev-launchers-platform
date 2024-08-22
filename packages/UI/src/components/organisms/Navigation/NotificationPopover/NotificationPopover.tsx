import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../../../Popover';
import { Bell, Settings } from 'lucide-react';
import NotificationItem from '../../../NotificationItem/NotificationItem';
import natificationsData from './notificationsData';
import { useQuery } from '@tanstack/react-query';
import { agent } from '@devlaunchers/utility';

export default function NotificationPopover() {
  const [notifications, setNotifications] = React.useState(natificationsData);
  const newNotificationsCount = notifications.reduce((count, x) => {
    return x.status == 'unRead' ? count + 1 : count;
  }, 0);
  const { data, error, isPending } = useQuery({
    queryKey: ['getNotifications'],
    queryFn: getAllNotifications,
  });

  function getAllNotifications() {
    return agent.Notifications.get({
      method: 'GET',
      credentials: 'include',
    })
      .then((data) => 1)
      .catch((error) => {
        console.log(error);
      });
  }

  async function getNotifications() {
    try {
      const data = await fetch(
        'https://apiv4-staging.devlaunchers.org/api/notifications/87?populate=deep',
        {
          method: 'GET',
          credentials: 'include',
        }
      );
      const parsed = await data.json();
      console.log(parsed);
    } catch (error) {
      console.log(error);
    }
  }

  function markAllReadHandle() {
    getNotifications();
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
        <button className="relative" aria-label="notification">
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
              className="text-neptune-600 hover:text-uranus-500"
              onClick={markAllReadHandle}
            >
              Mark all as read
            </button>
          </div>
          <ul>
            {notifications.map((n, i) => {
              return (
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
              );
            })}
          </ul>
          <div className="flex items-center justify-between">
            <a
              href={'/notifications'}
              className="text-neptune-600 hover:text-uranus-500"
            >
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
