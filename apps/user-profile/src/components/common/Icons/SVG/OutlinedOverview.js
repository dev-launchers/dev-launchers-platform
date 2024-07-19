import React from 'react';

function OutlinedOverview({ width, height, colorClass, svgClass }) {
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
        d="M15.8307 17.5V15.8333C15.8307 14.9493 15.4795 14.1014 14.8544 13.4763C14.2293 12.8512 13.3815 12.5 12.4974 12.5H7.4974C6.61334 12.5 5.76549 12.8512 5.14037 13.4763C4.51525 14.1014 4.16406 14.9493 4.16406 15.8333V17.5M13.3307 5.83333C13.3307 7.67428 11.8383 9.16667 9.9974 9.16667C8.15645 9.16667 6.66406 7.67428 6.66406 5.83333C6.66406 3.99238 8.15645 2.5 9.9974 2.5C11.8383 2.5 13.3307 3.99238 13.3307 5.83333Z"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={colorClass ?? 'stroke-grayscale-900'}
      />
    </svg>
  );
}

export default OutlinedOverview;
