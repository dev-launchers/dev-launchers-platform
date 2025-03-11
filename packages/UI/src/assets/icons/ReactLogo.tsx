import * as React from 'react';

function ReactLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Center circle */}
      <circle cx="0" cy="0" r="2" fill={props.fill || 'currentColor'} />

      {/* Orbital rings */}
      <g stroke={props.fill || 'currentColor'} strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5" />
        <ellipse rx="10" ry="4.5" transform="rotate(60)" />
        <ellipse rx="10" ry="4.5" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export default ReactLogo;
