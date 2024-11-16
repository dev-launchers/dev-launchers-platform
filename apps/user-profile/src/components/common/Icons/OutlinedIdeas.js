import React from 'react';

function OutlinedIdeas({ width, height, colorClass, svgClass }) {
  return (
    <svg
      width={width ?? '20'}
      height={height ?? '20'}
      className={svgClass ?? ''}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 11.6666C8.66667 10.8333 9.08333 10.25 9.75 9.58329C10.5833 8.83329 11 7.74996 11 6.66663C11 5.34054 10.4732 4.06877 9.53553 3.13109C8.59785 2.19341 7.32608 1.66663 6 1.66663C4.67392 1.66663 3.40215 2.19341 2.46447 3.13109C1.52678 4.06877 1 5.34054 1 6.66663C1 7.49996 1.16667 8.49996 2.25 9.58329C2.83333 10.1666 3.33333 10.8333 3.5 11.6666M3.5 15H8.5M4.33333 18.3333H7.66667"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={colorClass ?? 'stroke-grayscale-900'}
      />
    </svg>
  );
}

export default OutlinedIdeas;
