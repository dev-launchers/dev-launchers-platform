import * as React from 'react';
import { tv } from 'tailwind-variants';

const GridStyles = tv({
  base: 'container mx-auto grid grid-cols-4 gap-x-4 sm:gap-x-6 sm:max-xl:grid-cols-8 xl:grid-cols-12',
});

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

const Grid = ({ children, className }: GridProps) => {
  return <div className={GridStyles({ className })}>{children}</div>;
};

Grid.displayName = 'Grid';
export default Grid;
