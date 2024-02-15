import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { CircleUserRound } from 'lucide-react';

import { tv } from 'tailwind-variants';

const AvatarStyles = tv({
  slots: {
    baseSlot:
      'inline-flex h-12 w-12 items-center justify-center rounded-full bg-contain',
    fallbackSlot: 'bg-gray-100',
  },
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
  const { baseSlot, fallbackSlot } = AvatarStyles();
  return (
    <AvatarPrimitive.Root className={baseSlot()} {...props}>
      <AvatarPrimitive.Image
        className={baseSlot()}
        alt={alt}
        src={src}
        onLoadingStatusChange={onLoadingStatusChange}
      />
      <AvatarPrimitive.Fallback
        className={baseSlot({ className: fallbackSlot() })}
        delayMs={delayMs}
      >
        <CircleUserRound />
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};

export default Avatar;
