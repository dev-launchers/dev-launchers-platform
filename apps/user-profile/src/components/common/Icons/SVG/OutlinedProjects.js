import React from 'react';

function OutlinedProjects({ width, height, colorClass, svgClass }) {
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
        d="M13.3359 3.33329H15.0026C15.4446 3.33329 15.8686 3.50889 16.1811 3.82145C16.4937 4.13401 16.6693 4.55793 16.6693 4.99996V16.6666C16.6693 17.1087 16.4937 17.5326 16.1811 17.8451C15.8686 18.1577 15.4446 18.3333 15.0026 18.3333H5.0026C4.56058 18.3333 4.13665 18.1577 3.82409 17.8451C3.51153 17.5326 3.33594 17.1087 3.33594 16.6666V4.99996C3.33594 4.55793 3.51153 4.13401 3.82409 3.82145C4.13665 3.50889 4.56058 3.33329 5.0026 3.33329H6.66927M7.5026 1.66663H12.5026C12.9628 1.66663 13.3359 2.03972 13.3359 2.49996V4.16663C13.3359 4.62686 12.9628 4.99996 12.5026 4.99996H7.5026C7.04237 4.99996 6.66927 4.62686 6.66927 4.16663V2.49996C6.66927 2.03972 7.04237 1.66663 7.5026 1.66663Z"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={colorClass ?? 'stroke-grayscale-900'}
      />
    </svg>
  );
}

export default OutlinedProjects;
