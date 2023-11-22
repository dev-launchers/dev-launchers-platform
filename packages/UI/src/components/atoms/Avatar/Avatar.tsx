import * as Avatar from '@radix-ui/react-avatar';
import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

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

export interface AvatarProps
  extends VariantProps<typeof AvatarStyles>,
    Avatar.AvatarProps {
  src: string;
  /**
   * An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error.
   */
  fallback?: React.JSX.Element;
  alt: string;
  delayMs?: Avatar.AvatarFallbackProps['delayMs'];
  onClick?: () => void;
  onLoadingStatusChange?: Avatar.AvatarImageProps['onLoadingStatusChange'];
}

const AvatarComponent = ({
  size,
  rounded,
  src,
  alt,
  delayMs,
  onClick,
  fallback,
  onLoadingStatusChange,
  ...Props
}: AvatarProps) => {
  return (
    <Avatar.Root
      className={AvatarStyles({ size, rounded })}
      onClick={onClick}
      {...Props}
    >
      <Avatar.Image
        className={AvatarStyles({ size, rounded })}
        alt={alt}
        src={src}
        onLoadingStatusChange={onLoadingStatusChange}
      />
      <Avatar.Fallback
        className={AvatarStyles({ size, rounded })}
        delayMs={delayMs}
      >
        {fallback}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default AvatarComponent;
