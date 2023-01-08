import * as React from 'react';

function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32.4 24H3.6C2.64522 24 1.72955 23.6839 1.05442 23.1213C0.379284 22.5587 0 21.7957 0 21V2.8695C0.0403787 2.09669 0.437416 1.36674 1.10822 0.832051C1.77902 0.297364 2.67174 -0.000730858 3.6 1.34568e-06H32.4C33.3548 1.34568e-06 34.2705 0.316072 34.9456 0.878681C35.6207 1.44129 36 2.20435 36 3V21C36 21.7957 35.6207 22.5587 34.9456 23.1213C34.2705 23.6839 33.3548 24 32.4 24ZM3.6 5.802V21H32.4V5.802L18 13.8L3.6 5.802ZM5.04 3L18 10.2L30.96 3H5.04Z"
        fill={props.fill || 'black'}
      />
    </svg>
  );
}

export default Mail;
