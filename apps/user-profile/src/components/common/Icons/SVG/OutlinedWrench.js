import React from 'react';

function OutlinedWrench({ width, height, colorClass, svgClass }) {
  return (
    <svg
      width={width ?? '18'}
      height={height ?? '18'}
      className={svgClass ?? ''}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.83354 7.33354H7.33354V4.83354L4.41687 1.91687C5.3499 1.47127 6.39812 1.32588 7.4172 1.50072C8.43628 1.67557 9.3761 2.16205 10.1072 2.89318C10.8384 3.62431 11.3248 4.56412 11.4997 5.58321C11.6745 6.60229 11.5291 7.65051 11.0835 8.58354L16.0835 13.5835C16.4151 13.9151 16.6013 14.3647 16.6013 14.8335C16.6013 15.3024 16.4151 15.752 16.0835 16.0835C15.752 16.4151 15.3024 16.6013 14.8335 16.6013C14.3647 16.6013 13.9151 16.4151 13.5835 16.0835L8.58354 11.0835C7.65051 11.5291 6.60229 11.6745 5.58321 11.4997C4.56412 11.3248 3.62431 10.8384 2.89318 10.1072C2.16205 9.3761 1.67557 8.43628 1.50072 7.4172C1.32588 6.39812 1.47127 5.3499 1.91687 4.41687L4.83354 7.33354Z"
        className={colorClass ?? 'stroke-grayscale-400'}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default OutlinedWrench;