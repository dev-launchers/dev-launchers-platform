import * as React from 'react';

function Checkmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="13"
      viewBox="0 0 15 13"
      fill="none"
      {...props}
    >
      <path
        d="M2 7.50001L5.5 11L13.5 2.00001"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Checkmark;
