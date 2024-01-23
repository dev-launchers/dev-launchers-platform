import {
  ChevronsLeft,
  ChevronsRight,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';
import { cn } from '../../utils/classesMerger';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-8', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

const paginationLinkStyles = tv({
  base: 'inline-flex flex-col items-start gap-2,5 rounded-lg px-4 py-2 font-nunito-sans text-base font-normal leading-6',
  variants: {
    isActive: {
      true: 'bg-grayscale-900 text-grayscale-50',
      false: 'bg-grayscale-50 text-GreyScale-grey hover:bg-grayscale-100',
    },
  },
});
type PaginationLinkProps = VariantProps<typeof paginationLinkStyles> &
  React.ComponentProps<'a'>;

const PaginationLink = ({
  className,
  isActive = false,
  children,
  ...props
}: PaginationLinkProps) => (
  <Link href={props.href as string}>
    <a
      aria-current={isActive ? 'page' : undefined}
      className={paginationLinkStyles({ isActive, className })}
      {...props}
    >
      {children}
    </a>
  </Link>
);
PaginationLink.displayName = 'PaginationLink';

const PaginationJump = ({
  className,
  destination,
  ...props
}: React.ComponentProps<'a'> & {
  destination: 'first' | 'next' | 'previous' | 'last';
}) => (
  <PaginationLink
    aria-label={`Go to ${destination} page`}
    className={paginationLinkStyles({
      className: [
        'h-9 py-1 px-2 items-center justify-center text-grayscale-500 hover:text-black active:text-black',
        className,
      ],
    })}
    {...props}
  >
    {destination == 'first' ? (
      <ChevronsLeft stroke="currentColor" />
    ) : destination == 'last' ? (
      <ChevronsRight stroke="currentColor" />
    ) : destination == 'next' ? (
      <ChevronRight stroke="currentColor" />
    ) : destination == 'previous' ? (
      <ChevronLeft stroke="currentColor" />
    ) : null}
  </PaginationLink>
);

PaginationJump.displayName = 'PaginationJump';

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationJump,
};
