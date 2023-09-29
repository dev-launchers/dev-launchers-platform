import React, { useState } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Avatar } from '../Avatar';

const notificationStyles = tv({
  slots: {
    base: ' flex gap-2 p-2  items-center bg-white  border-t w-full ',
    metaInfo: 'flex gap-2  justify-between items-center   w-full',
    notifyItems: '   flex-grow',
    nameStyle: ' text-[#1C1C1C] text-base font-bold',
    actionStyle: ' text-[#1C1C1C] text-base ',
    platformStyle: ' text-[#1C1C1C] text-base font-bold',
    metaText: 'flex gap-1',
    timeStyle: ' text-right text-base font-normal text-[#7f7e7f] ',
    messageText: ' text-left text-base font-normal  text-[#676767]',
    rounded: 'sm',
    size: 'sm',
    statusStyle: 'w-3 h-3 rounded-full bg-[#407BFF]',
  },
});

const {
  base,
  metaInfo,
  messageText,
  timeStyle,
  notifyItems,
  nameStyle,
  actionStyle,
  platformStyle,
  metaText,
  statusStyle,
} = notificationStyles();

interface NavigrationItemProp extends VariantProps<typeof notificationStyles> {
  Avatar: React.ReactNode;
  message: string;
  name: string;
  platform: string;
  time: string;
  action: string;
  src: string;
  alt: string;
  rounded?: 'rounded' | 'sm' | 'lg' | 'full';
  size?: 'sm' | 'md' | 'lg';
  delayMs: number;
  status: 'read' | 'unread';
}

function Notification({
  message,
  name,
  platform,
  time,
  action,
  src,
  alt,
  rounded,
  size,
  delayMs,
  status,
}: NavigrationItemProp) {
  return (
    <>
      <div className={base()}>
        <div className={status === 'unread' ? statusStyle() : ''}></div>
        <div>
          <Avatar
            src={src}
            alt={alt}
            rounded={rounded}
            size={size}
            delayMs={delayMs}
          />
        </div>
        <div className={notifyItems()}>
          <div className={metaInfo()}>
            <div className={metaText()}>
              <strong className={nameStyle()}>{name}</strong>
              <span className={actionStyle()}>{action}</span>
              <strong className={platformStyle()}>{platform}</strong>
            </div>
            <div className={timeStyle()}>{time}</div>
          </div>
          <div className={messageText()}>{message}</div>
        </div>
      </div>
    </>
  );
}

export default Notification;
