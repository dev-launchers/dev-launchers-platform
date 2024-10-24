import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../../../Popover';
import { Bell, Settings } from 'lucide-react';
import NotificationItem from '../../../NotificationItem/NotificationItem';
import { useQuery } from '@tanstack/react-query';
import { agent } from '@devlaunchers/utility';

export default function NotificationPopover() {
  const [notifications, setNotifications] = React.useState([]);
  const newNotificationsCount = notifications.reduce((count, x) => {
    return x.attributes.readDateTime ? count : count + 1;
  }, 0);

  function getAllNotifications() {
    return agent.Notifications.get({
      method: 'GET',
      credentials: 'include',
    })
      .then((data) => {
        data.reverse();
        // console.log(data);
        setNotifications(data);
        return data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  const { data, error, isPending } = useQuery({
    queryKey: ['getNotifications'],
    queryFn: getAllNotifications,
  });

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
            className={`absolute top-0 right-0 bg-red-700 text-white rounded-full aspect-square w-5 text-xs font-bold content-center translate-x-1/2 -translate-y-1/2 ${
              newNotificationsCount ? '' : 'hidden'
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
                  message={''}
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

const exmpleNotification = {
  id: 188,
  attributes: {
    createdAt: '2024-10-24T17:31:39.715Z',
    updatedAt: '2024-10-24T17:31:39.715Z',
    createdDateTime: '2024-10-24T17:31:39.644Z',
    readDateTime: null,
    user: {
      data: {
        id: 100,
        attributes: {
          username: 'yacine.k',
          email: 'yacine.k@devlaunchers.com',
          provider: 'google',
          confirmed: true,
          blocked: false,
          discordUsername: null,
          userId: 'e96c2149-a172-4b51-839c-50b8ed36765c',
          hasAcceptedTermsOfService: null,
          hasSubscribedEmails: null,
          createdAt: '2024-08-10T07:16:54.908Z',
          updatedAt: '2024-08-10T07:16:54.908Z',
          discord_avatar: null,
          discord_discriminator: null,
          job: 'other',
          experience: null,
          schedule: null,
          completedOnboarding: false,
          projects: {
            data: [],
          },
          interests: {
            data: [],
          },
          idea_cards: {
            data: [
              {
                id: 313,
                attributes: {
                  ideaName: 'pizza',
                  tagline: '',
                  description: 'pizza pizza',
                  targetAudience: '',
                  features: 'pizza',
                  experience: 'pizza',
                  createdAt: '2024-08-16T10:47:24.135Z',
                  updatedAt: '2024-08-16T10:47:24.135Z',
                  publishedAt: '2024-08-16T10:47:24.081Z',
                  extraInfo: '',
                  status: 'workshopping',
                  involveLevel: 'highly',
                },
              },
              {
                id: 314,
                attributes: {
                  ideaName: 'yooooooooooo',
                  tagline: 'yooooooooooo',
                  description: 'yooooooooooo',
                  targetAudience: 'yooooooooooo',
                  features: 'yooooooooooo',
                  experience: 'yooooooooooo',
                  createdAt: '2024-08-16T14:44:24.655Z',
                  updatedAt: '2024-08-16T14:44:24.655Z',
                  publishedAt: '2024-08-16T14:44:24.601Z',
                  extraInfo: 'yooooooooooo',
                  status: 'workshopping',
                  involveLevel: 'highly',
                },
              },
              {
                id: 316,
                attributes: {
                  ideaName: 'Firebase',
                  tagline: '',
                  description: 'lets start using firebase',
                  targetAudience: '',
                  features: 'lets start using firebase',
                  experience: 'lets start using firebase',
                  createdAt: '2024-08-22T08:02:51.545Z',
                  updatedAt: '2024-08-22T08:02:51.545Z',
                  publishedAt: '2024-08-22T08:02:51.490Z',
                  extraInfo: '',
                  status: 'workshopping',
                  involveLevel: 'medium',
                },
              },
              {
                id: 362,
                attributes: {
                  ideaName: 'aaaaaaaa',
                  tagline: '',
                  description: 'aaaaaaaaaaa',
                  targetAudience: '',
                  features: 'aaaaaaaaaaaa',
                  experience: 'aaaaaaaaaaaa',
                  createdAt: '2024-10-24T13:31:34.777Z',
                  updatedAt: '2024-10-24T13:31:34.777Z',
                  publishedAt: '2024-10-24T13:31:34.636Z',
                  extraInfo: '',
                  status: 'workshopping',
                  involveLevel: 'highly',
                },
              },
              {
                id: 363,
                attributes: {
                  ideaName: 'mmmm',
                  tagline: '',
                  description: 'mmmmmmm',
                  targetAudience: '',
                  features: 'mmmmmmmmmmmmm',
                  experience: 'mmmmmmmmmmm',
                  createdAt: '2024-10-24T17:28:17.989Z',
                  updatedAt: '2024-10-24T17:28:17.989Z',
                  publishedAt: '2024-10-24T17:28:17.849Z',
                  extraInfo: '',
                  status: 'workshopping',
                  involveLevel: 'medium',
                },
              },
              {
                id: 364,
                attributes: {
                  ideaName: 'mmmmmm',
                  tagline: '',
                  description: 'mmmmmmmm',
                  targetAudience: '',
                  features: 'mmmmmmmmm',
                  experience: 'mmmmmmmmmmm',
                  createdAt: '2024-10-24T17:31:24.255Z',
                  updatedAt: '2024-10-24T17:31:24.255Z',
                  publishedAt: '2024-10-24T17:31:24.114Z',
                  extraInfo: '',
                  status: 'workshopping',
                  involveLevel: 'highly',
                },
              },
            ],
          },
          profile: {
            data: null,
          },
          ownedCards: {
            data: [
              {
                id: 312,
                attributes: {
                  ideaName: 'pizza ',
                  tagline: null,
                  description: 'pizza pizza ',
                  targetAudience: null,
                  features: 'pizza ',
                  experience: 'pizza ',
                  createdAt: '2024-08-16T10:44:06.580Z',
                  updatedAt: '2024-08-16T10:45:42.568Z',
                  publishedAt: '2024-08-16T10:45:42.510Z',
                  extraInfo: null,
                  status: 'workshopping',
                  involveLevel: 'highly',
                },
              },
              {
                id: 313,
                attributes: {
                  ideaName: 'pizza',
                  tagline: '',
                  description: 'pizza pizza',
                  targetAudience: '',
                  features: 'pizza',
                  experience: 'pizza',
                  createdAt: '2024-08-16T10:47:24.135Z',
                  updatedAt: '2024-08-16T10:47:24.135Z',
                  publishedAt: '2024-08-16T10:47:24.081Z',
                  extraInfo: '',
                  status: 'workshopping',
                  involveLevel: 'highly',
                },
              },
              {
                id: 314,
                attributes: {
                  ideaName: 'yooooooooooo',
                  tagline: 'yooooooooooo',
                  description: 'yooooooooooo',
                  targetAudience: 'yooooooooooo',
                  features: 'yooooooooooo',
                  experience: 'yooooooooooo',
                  createdAt: '2024-08-16T14:44:24.655Z',
                  updatedAt: '2024-08-16T14:44:24.655Z',
                  publishedAt: '2024-08-16T14:44:24.601Z',
                  extraInfo: 'yooooooooooo',
                  status: 'workshopping',
                  involveLevel: 'highly',
                },
              },
              {
                id: 316,
                attributes: {
                  ideaName: 'Firebase',
                  tagline: '',
                  description: 'lets start using firebase',
                  targetAudience: '',
                  features: 'lets start using firebase',
                  experience: 'lets start using firebase',
                  createdAt: '2024-08-22T08:02:51.545Z',
                  updatedAt: '2024-08-22T08:02:51.545Z',
                  publishedAt: '2024-08-22T08:02:51.490Z',
                  extraInfo: '',
                  status: 'workshopping',
                  involveLevel: 'medium',
                },
              },
              {
                id: 362,
                attributes: {
                  ideaName: 'aaaaaaaa',
                  tagline: '',
                  description: 'aaaaaaaaaaa',
                  targetAudience: '',
                  features: 'aaaaaaaaaaaa',
                  experience: 'aaaaaaaaaaaa',
                  createdAt: '2024-10-24T13:31:34.777Z',
                  updatedAt: '2024-10-24T13:31:34.777Z',
                  publishedAt: '2024-10-24T13:31:34.636Z',
                  extraInfo: '',
                  status: 'workshopping',
                  involveLevel: 'highly',
                },
              },
              {
                id: 363,
                attributes: {
                  ideaName: 'mmmm',
                  tagline: '',
                  description: 'mmmmmmm',
                  targetAudience: '',
                  features: 'mmmmmmmmmmmmm',
                  experience: 'mmmmmmmmmmm',
                  createdAt: '2024-10-24T17:28:17.989Z',
                  updatedAt: '2024-10-24T17:28:17.989Z',
                  publishedAt: '2024-10-24T17:28:17.849Z',
                  extraInfo: '',
                  status: 'workshopping',
                  involveLevel: 'medium',
                },
              },
              {
                id: 364,
                attributes: {
                  ideaName: 'mmmmmm',
                  tagline: '',
                  description: 'mmmmmmmm',
                  targetAudience: '',
                  features: 'mmmmmmmmm',
                  experience: 'mmmmmmmmmmm',
                  createdAt: '2024-10-24T17:31:24.255Z',
                  updatedAt: '2024-10-24T17:31:24.255Z',
                  publishedAt: '2024-10-24T17:31:24.114Z',
                  extraInfo: '',
                  status: 'workshopping',
                  involveLevel: 'highly',
                },
              },
            ],
          },
          comments: {
            data: [
              {
                id: 286,
                attributes: {
                  text: 'what is this idea about ?',
                  author: 'yacine.k',
                  createdAt: '2024-08-22T07:58:58.635Z',
                  updatedAt: '2024-08-22T07:58:58.635Z',
                  publishedAt: '2024-08-22T07:58:58.606Z',
                },
              },
              {
                id: 287,
                attributes: {
                  text: 'what is this tool',
                  author: 'yacine.k',
                  createdAt: '2024-08-22T08:03:16.686Z',
                  updatedAt: '2024-08-22T08:03:16.686Z',
                  publishedAt: '2024-08-22T08:03:16.659Z',
                },
              },
              {
                id: 324,
                attributes: {
                  text: 'Hey is anyone here ????',
                  author: 'yacine.k',
                  createdAt: '2024-09-14T11:08:55.401Z',
                  updatedAt: '2024-09-14T11:08:55.401Z',
                  publishedAt: '2024-09-14T11:08:55.328Z',
                },
              },
              {
                id: 339,
                attributes: {
                  text: 'hello',
                  author: 'yacine.k',
                  createdAt: '2024-10-13T20:55:13.465Z',
                  updatedAt: '2024-10-13T20:55:13.465Z',
                  publishedAt: '2024-10-13T20:55:13.395Z',
                },
              },
              {
                id: 343,
                attributes: {
                  text: 'hello hello',
                  author: 'yacine.k',
                  createdAt: '2024-10-24T17:31:37.821Z',
                  updatedAt: '2024-10-24T17:31:37.821Z',
                  publishedAt: '2024-10-24T17:31:37.749Z',
                },
              },
            ],
          },
        },
      },
    },
    event: {
      data: {
        id: 188,
        attributes: {
          entityId: 343,
          entityType: 'Comment',
          content: 'yacine.k commented on idea: mmmmmm',
          createdDateTime: '2024-10-24T17:31:39.081Z',
          createdAt: '2024-10-24T17:31:39.151Z',
          updatedAt: '2024-10-24T17:31:39.151Z',
          action: 'Commented',
          entityName: 'hello hello',
          eventUser: {
            data: {
              id: 100,
              attributes: {
                username: 'yacine.k',
                email: 'yacine.k@devlaunchers.com',
                provider: 'google',
                confirmed: true,
                blocked: false,
                discordUsername: null,
                userId: 'e96c2149-a172-4b51-839c-50b8ed36765c',
                hasAcceptedTermsOfService: null,
                hasSubscribedEmails: null,
                createdAt: '2024-08-10T07:16:54.908Z',
                updatedAt: '2024-08-10T07:16:54.908Z',
                discord_avatar: null,
                discord_discriminator: null,
                job: 'other',
                experience: null,
                schedule: null,
                completedOnboarding: false,
              },
            },
          },
        },
      },
    },
  },
};
