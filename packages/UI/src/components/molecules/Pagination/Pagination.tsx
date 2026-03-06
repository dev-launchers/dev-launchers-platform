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
import { cn } from '../../../utils/classesMerger';

/**
 * Pagination with page navigation, next and previous links.
 * @see http://localhost:6006/?path=/docs/components-pagination--docs
 */
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
      false: 'bg-grayscale-50 text-grayscale-500 hover:bg-grayscale-100',
    },
  },
});
interface PaginationLinkProps
  extends VariantProps<typeof paginationLinkStyles>,
    React.ComponentProps<'a'> {
  /**
   * determines whether the link is for the current page or not
   */
  isActive?: boolean;
}

/**
 * Pagination link.
 * @see http://localhost:6006/?path=/docs/components-pagination-paginationnumbers--docs
 */
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

/**
 * Pagination jump.
 * @see http://localhost:6006/?path=/docs/components-pagination-paginationjumps--docs
 */
const PaginationJump = ({
  className,
  destination,
  ...props
}: React.ComponentProps<'a'> & {
  /** Renders the appropriate icon for the destination jump */
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
