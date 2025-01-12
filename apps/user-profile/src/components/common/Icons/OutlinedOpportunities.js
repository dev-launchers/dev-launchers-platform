import React from 'react';

function OutlinedOpportunities({ width, height, colorClass, svgClass }) {
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
        d="M9.9974 1.66663L12.5724 6.88329L18.3307 7.72496L14.1641 11.7833L15.1474 17.5166L9.9974 14.8083L4.8474 17.5166L5.83073 11.7833L1.66406 7.72496L7.4224 6.88329L9.9974 1.66663Z"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={colorClass ?? 'stroke-grayscale-900'}
      />
    </svg>
  );
}

export default OutlinedOpportunities;
