import * as Avatar from '@radix-ui/react-avatar';

import { tv, type VariantProps } from 'tailwind-variants';

const AvatarStyles = tv({
  base: ' w-12 h-12 rounded-full   bg-contain bg-white  font-medium text-base text-center justify-center align-middle',
});

interface AvatarProps
  extends VariantProps<typeof AvatarStyles>,
    Avatar.AvatarProps {
  src: string;
  fallback: React.JSX.Element;
  alt: string;
  delayMs?: Avatar.AvatarFallbackProps['delayMs'];
  onLoadingStatusChange?: Avatar.AvatarImageProps['onLoadingStatusChange'];
  onClick?: () => void;
}

const AvatarComponent = ({
  src,
  alt,
  delayMs,

  onLoadingStatusChange,
  onClick,
  ...Props
}: AvatarProps) => {
  const avatarStyles = AvatarStyles();
  return (
    <Avatar.Root className={avatarStyles} onClick={onClick} {...Props}>
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default AvatarComponent;
