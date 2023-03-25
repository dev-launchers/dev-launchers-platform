import * as React from 'react';

const Share = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.96001 15.9607C7.14707 15.9607 8.92002 14.1877 8.92002 12.0006C8.92002 9.81353 7.14707 8.04053 4.96001 8.04053C2.77296 8.04053 1 9.81353 1 12.0006C1 14.1877 2.77296 15.9607 4.96001 15.9607Z"
        stroke={props.fill || 'none'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0396 22.9998C21.2267 22.9998 22.9996 21.2268 22.9996 19.0397C22.9996 16.8526 21.2267 15.0796 19.0396 15.0796C16.8525 15.0796 15.0796 16.8526 15.0796 19.0397C15.0796 21.2268 16.8525 22.9998 19.0396 22.9998Z"
        stroke={props.fill || 'none'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0396 8.92021C21.2267 8.92021 22.9996 7.14721 22.9996 4.9601C22.9996 2.773 21.2267 1 19.0396 1C16.8525 1 15.0796 2.773 15.0796 4.9601C15.0796 7.14721 16.8525 8.92021 19.0396 8.92021Z"
        stroke={props.fill || 'none'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.47998 10.2398L15.52 6.71973M8.47998 13.7599L15.52 17.28L8.47998 13.7599Z"
        stroke={props.fill || 'none'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Share;
