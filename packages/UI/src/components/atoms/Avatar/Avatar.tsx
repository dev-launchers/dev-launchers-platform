import * as Avatar from '@radix-ui/react-avatar';
import { CircleUser } from 'lucide-react';

import { tv, type VariantProps } from 'tailwind-variants';

const AvatarStyles = tv({
  base: ' h-12 w-12 justify-center   rounded-full bg-white  bg-contain text-center align-middle text-base font-medium',
});

interface AvatarProps extends Avatar.AvatarProps {
  /**
   * Source of the image
   */
  src: string;
  alt: string;

  /**
   * Useful for delaying rendering so it only appears for those with slower connections.
   */
  delayMs?: Avatar.AvatarFallbackProps['delayMs'];
  /**
   * A callback providing information about the loading status of the image. This is useful in case you want to control more precisely what to render as the image is loading.
   */
  onLoadingStatusChange?: Avatar.AvatarImageProps['onLoadingStatusChange'];
}

const AvatarComponent = ({
  src,
  alt,
  delayMs,

  onLoadingStatusChange,

  ...Props
}: AvatarProps) => {
  const avatarStyles = AvatarStyles();
  return (
    <Avatar.Root className={avatarStyles} {...Props}>
      <Avatar.Image
        className={avatarStyles}
        alt={alt}
        src={src}
        onLoadingStatusChange={onLoadingStatusChange}
      />
      <Avatar.Fallback className={avatarStyles} delayMs={delayMs}>
        <CircleUser />
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default AvatarComponent;
