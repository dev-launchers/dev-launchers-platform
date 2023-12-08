import * as React from 'react';

function Hamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="50"
      height="42"
      viewBox="0 0 50 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 8H42M8 34H42H8ZM8 21H42H8Z"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Hamburger;
