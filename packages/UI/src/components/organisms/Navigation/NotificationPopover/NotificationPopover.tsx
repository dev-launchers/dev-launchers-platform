import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../../../Popover';
import { Bell, Settings } from 'lucide-react';
import NotificationItem from '../../../NotificationItem/NotificationItem';
import { agent } from '@devlaunchers/utility';

export default function NotificationPopover() {
  const [notifications, setNotifications] = React.useState([]);
  const newNotificationsCount = notifications.reduce((count, x) => {
    return x.attributes.readDateTime ? count : count + 1;
  }, 0);

  React.useEffect(() => {
    getAllNotifications();
  }, []);

  function getAllNotifications() {
    return agent.Notifications.get()
      .then((data) => {
        data.reverse();
        setNotifications(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function markAllReadHandle() {
    getAllNotifications();
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
            className={`absolute top-0 right-0 bg-red-700 text-white rounded-full aspect-square w-5 text-xs font-bold content-center translate-x-1/2 -translate-y-1/2 ${newNotificationsCount ? '' : 'hidden'
              }`}
          >
            {newNotificationsCount}
          </span>
          <Bell />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[min(100vw,40rem)]  md:w-[min(90vw,40rem)] text-xs md:text-base"
        hasCloseBtn={false}
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="capitalize font-semibold text-base md:text-xl">
              notification
            </span>
            <button
              className="text-neptune-600 hover:text-uranus-500"
              onClick={markAllReadHandle}
            >
              Mark all as read
            </button>
          </div>
          <ul
            style={{
              overflowY: 'auto',
              height: '25rem',
              scrollbarWidth: 'thin',
              scrollbarGutter: 'stable both-edges',
            }}
          >
            {notifications.map((n, i) => {
              const { readDateTime, createdDateTime } = n.attributes;
              const { action, entityName, eventUser, content, entityId } =
                n.attributes.event.data.attributes;
              const { username, discord_avatar } = eventUser.data.attributes;
              return (
                <NotificationItem
                  key={i}
                  action={action}
                  target={entityName}
                  avatar={discord_avatar}
                  message={content}
                  name={username}
                  status={readDateTime ? 'read' : 'unRead'}
                  targetLink={'/ideaspace/workshop/' + entityId}
                  timeStamp={createdDateTime}
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
