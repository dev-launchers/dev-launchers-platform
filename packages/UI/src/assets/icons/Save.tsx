import * as React from 'react';

const Save = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 0H1L0 0.867365V23.4189L1.744 24L10 16.0411L18.256 24L20 23.4189V0.867365L19 0ZM18 21.1637L10.744 14.1641H9.256L2 21.1637V1.73473H18V21.1637Z"
        fill={props.stroke || 'black'}
      />
      <path
        d="M18 1.5H2V21L9 14H10.5L18 21V1.5Z"
        fill={props.fill || 'none'}
        stroke={props.fill || 'none'}
      />
    </svg>
  );
};

export default Save;
