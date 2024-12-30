import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../../../Popover';
import { Bell, Settings } from 'lucide-react';
import NotificationItem from '../../../NotificationItem/NotificationItem';
import { agent } from '@devlaunchers/utility';
import { Notification } from '@devlaunchers/models';

const SettingsIcon = Settings as React.FC<React.SVGProps<SVGSVGElement>>;
const BellIcon = Bell as React.FC<React.SVGProps<SVGSVGElement>>;

export default function NotificationPopover() {
  const [notifications, setNotifications] = React.useState<Notification[]>([]);
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
        <button
          className="relative text-gray-300 hover:text-white transition-colors duration-200"
          aria-label="notification"
        >
          {newNotificationsCount > 0 && (
            <span className="absolute top-0 right-0 bg-[#52287A] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
              {newNotificationsCount}
            </span>
          )}
          <BellIcon className="h-5 w-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[400px] p-0 border-0 mt-4"
        hasCloseBtn={false}
      >
        <div className="bg-[#1C1C1C] text-white shadow-xl">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <span className="text-xl font-semibold text-white">
              Notifications
            </span>
            {notifications.length > 0 && (
              <button
                className="text-gray-300 hover:text-white transition-colors duration-200"
                onClick={markAllReadHandle}
              >
                Mark all as read
              </button>
            )}
          </div>

          <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            {notifications.length > 0 ? (
              notifications.map((n, i) => {
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
                    className={`p-4 border-b border-gray-800 ${
                      readDateTime ? 'bg-transparent' : 'bg-[#52287A]/10'
                    } hover:bg-gray-800 transition-colors duration-200`}
                  />
                );
              })
            ) : (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                <Bell
                  className="h-16 w-16 text-gray-500 mb-4"
                  strokeWidth={1.5}
                />
                <p className="text-gray-400 text-center">
                  No notifications yet. We'll notify you when something
                  important happens!
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center p-4 border-t border-gray-800">
            <a
              href="/notifications"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              View all notifications
            </a>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
