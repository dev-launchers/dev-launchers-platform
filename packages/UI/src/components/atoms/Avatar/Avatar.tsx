import * as Avatar from '@radix-ui/react-avatar';
import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { initials } from './utils';

const AvatarStyles = tv({
  base: ' w-6 h-6 rounded-none   bg-contain bg-white  font-medium text-base text-center justify-center align-middle',
  variants: {
    size: {
      sm: ' w-8 h-8',
      md: ' w-10 h-10',
      lg: ' w-12 h-12',
    },
    rounded: {
      sm: ' rounded-sm',
      rounded: ' rounded',
      lg: ' rounded-lg',
      full: ' rounded-full',
    },
  },
});

interface AvatarProps
  extends VariantProps<typeof AvatarStyles>,
    Avatar.AvatarProps {
  src: string;
  alt: string;
  delayMs: number;
  onClick?: () => void;
}

const AvatarComponent = ({
  size,
  rounded,
  src,
  alt,
  delayMs,
  onClick,
  ...Props
}: AvatarProps) => {
  const avatarStyles = AvatarStyles({ size, rounded });
  return (
    <Avatar.Root className={avatarStyles} onClick={onClick} {...Props}>
      <Avatar.Image className={avatarStyles} alt={alt} src={src} />
      <Avatar.Fallback
        className={AvatarStyles({ size, rounded })}
        delayMs={delayMs}
      >
        {initials(alt)}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default AvatarComponent;
