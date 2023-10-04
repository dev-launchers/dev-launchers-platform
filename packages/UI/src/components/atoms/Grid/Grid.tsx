import * as React from 'react';
import { tv } from 'tailwind-variants';

const GridStyles = tv({
  base: 'container grid mx-auto grid-cols-4 gap-x-4 sm:grid-cols-8 sm:gap-x-6 xl:grid-cols-12',
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
