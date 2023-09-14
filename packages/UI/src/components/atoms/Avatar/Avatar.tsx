import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const img = tv({
  base: 'w-16 h-16 bg-green-500 flex justify-center items-center text-white  rounded  font-medium',
  variants: {
    color: {
      primary: ' bg-yellow-600',
      secondary: ' bg-gray-300',
    },
    size: {
      sm: 'w-16 h-16 font-semibold',
      md: 'w-20 h-20 font-bold',
      lg: 'w-24 h-24 font-extrabold',
    },
    radius: {
      none: 'rounded ',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
  },
});

interface AvatarProps extends VariantProps<typeof img> {
  name?: string;
  src?: string | undefined;
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
    <div className={img({ size, radius, color })}>
      {src ? (
        <img src={src} alt={alt} className={img({ size, radius, color })} />
      ) : name ? (
        initials(name)
      ) : null}
    </div>
  );
}

export default Avatar;
