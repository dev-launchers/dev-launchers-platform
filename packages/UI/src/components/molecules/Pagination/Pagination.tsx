import React, { FC } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const paginationStyles = tv({
  base: 'inline-flex flex-col gap-2,5 rounded-[10px] py-2 px-4 bg-GreyScale-white hover:bg-GreyScale-off-white',
});

interface PaginationProps extends VariantProps<typeof paginationStyles>  {}

const Pagination: FC<PaginationProps> = ({}) => {
  const styles = paginationStyles();
  return <div className={styles}>1</div>;
};

export default Pagination;
