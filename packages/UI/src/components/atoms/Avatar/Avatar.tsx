import * as Avatar from '@radix-ui/react-avatar';

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
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="24" fill="#F0EDEE" />
          <path
            d="M30 32C30 30.4087 29.3679 28.8826 28.2426 27.7574C27.1174 26.6321 25.5913 26 24 26M24 26C22.4087 26 20.8826 26.6321 19.7574 27.7574C18.6321 28.8826 18 30.4087 18 32M24 26C26.2091 26 28 24.2091 28 22C28 19.7909 26.2091 18 24 18C21.7909 18 20 19.7909 20 22C20 24.2091 21.7909 26 24 26ZM34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default AvatarComponent;
