import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { CircleUserRound } from 'lucide-react';

import { tv } from 'tailwind-variants';

const AvatarStyles = tv({
  base: ' h-12 w-12 justify-center rounded-full bg-white  bg-contain text-center align-middle text-base font-medium',
});

interface AvatarProps extends AvatarPrimitive.AvatarProps {
  /**
   * Source of the image
   */
  src: string;
  alt: string;

  /**
   * Useful for delaying rendering so it only appears for those with slower connections.
   */
  delayMs?: AvatarPrimitive.AvatarFallbackProps['delayMs'];
  /**
   * A callback providing information about the loading status of the image. This is useful in case you want to control more precisely what to render as the image is loading.
   */
  onLoadingStatusChange?: AvatarPrimitive.AvatarImageProps['onLoadingStatusChange'];
}

const Avatar = ({
  src,
  alt,
  delayMs,
  onLoadingStatusChange,
  ...props
}: AvatarProps) => {
  const avatarStyles = AvatarStyles();
  return (
    <AvatarPrimitive.Root className={avatarStyles} {...props}>
      <AvatarPrimitive.Image
        className={avatarStyles}
        alt={alt}
        src={src}
        onLoadingStatusChange={onLoadingStatusChange}
      />
      <AvatarPrimitive.Fallback className={avatarStyles} delayMs={delayMs}>
        <CircleUserRound />
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};

export default Avatar;
