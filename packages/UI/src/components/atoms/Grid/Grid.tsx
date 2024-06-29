import * as React from 'react';
import { tv } from 'tailwind-variants';

const GridStyles = tv({
  base: 'container mx-auto grid grid-cols-4 gap-x-4 px-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 lg:px-5 xl:px-6 2xl:gap-x-4',
});

/**
 * A CSS grid based system using just grid items.
 * @example <Grid>
 *  <div className="md:col-span-full">I span fully across all columns on md breakpoint</div>
 *  <div className="2xl:col-start-2 2xl:col-span-2">I span 2 columns and start from the second column on 2xl breakpoint</div>
 * </Grid>
 */
const Grid = ({ children, className }: React.ComponentProps<'div'>) => {
  return <div className={GridStyles({ className })}>{children}</div>;
};

Grid.displayName = 'Grid';
export default Grid;
