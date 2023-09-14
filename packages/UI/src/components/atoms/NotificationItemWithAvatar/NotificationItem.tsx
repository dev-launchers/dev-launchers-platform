import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const div = tv({
  base: '',
  variants: {
    color: {},
    size: {},
  },
});

interface NavigrationItemProp extends VariantProps<typeof div> {
  avatar: React.ReactNode;
  message: string;
  name: string;
  platform: string;
  time: string;
}
function NotificationItem({
  color,
  size,
  avatar,
  message,
  name,
  platform,
  time,
  
}: NavigrationItemProp) {
  return (
    <div className={div({ color, size })}>
      <span></span>
      <div></div>
    </div>
  );
}

export default NotificationItem;
