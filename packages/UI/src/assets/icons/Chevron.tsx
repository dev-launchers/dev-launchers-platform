import * as React from 'react';

function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polyline
        stroke={props.stroke || '#24471F'}
        points="6 9 12 15 18 9"
      ></polyline>
    </svg>
  );
}

export default ChevronDown;
