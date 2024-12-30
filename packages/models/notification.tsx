import * as React from 'react';
import Avatar from '../UI/src/components/atoms/Avatar/Avatar';

export type NotificationUser = {
  data: {
    id: number;
    attributes: {
      username: string | null;
      email: string;
      userId: string;
      discord_avatar: {
        src: React.ComponentProps<typeof Avatar>['src'];
        alt: React.ComponentProps<typeof Avatar>['alt'];
      };
    };
  };
};

export type NotificationEvent = {
  data: {
    id: number;
    attributes: {
      entityId: number;
      entityType: string;
      content: string;
      createdDateTime: string;
      action: 'Idea Created' | 'Commented';
      entityName: string;
      eventUser: NotificationUser;
    };
  };
};

export type Notification = {
  id: number;
  attributes: {
    readDateTime?: string | null;
    createdDateTime: string;
    event: NotificationEvent;
    use: NotificationUser;
  };
  status?: 'read' | null;
};
