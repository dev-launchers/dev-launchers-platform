import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const AvatarStyles = tv({
  base: 'w-16 h-16 bg-green-500 flex justify-center items-center text-white text-base  rounded-none font-medium  text-center  uppercase',
  variants: {
    color: {
      primary: ' bg-yellow-600',
      secondary: ' bg-gray-300',
    },
    size: {
      sm: 'w-16 h-16 font-semibold',
      md: 'w-20 h-20 font-bold ',
      lg: 'w-24 h-24 font-extrabold ',
    },
    radius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    defaultVariants: {
      radius: 'sm',
    },
  },
});

interface AvatarProps extends VariantProps<typeof AvatarStyles> {
  name?: string;
  src: string;
  initials: (name: string) => string;
  alt: string;
}

function initials(name: string) {
  const names = name.split(' ');
  const firstName = names[0] ?? '';
  const lastName = names.length > 1 ? names[names.length - 1] : '';
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}

function Avatar({ name, src, alt, size, radius, color }: AvatarProps) {
  return (
    <div className={AvatarStyles({ size, radius, color })}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={AvatarStyles({ size, radius, color })}
        />
      ) : name ? (
        initials(name)
      ) : null}
    </div>
  );
}

export default Avatar;
// Solve when there is a broken src link
// Add default avatar as a fallback avatar
