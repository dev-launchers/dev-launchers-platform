import * as React from 'react';

export const ImagePreviewSVG = ({
  width,
  height,
  stroke,
  strokeOpacity,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
}) => (
  <svg
    width={width || 48}
    height={height || 48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42 29.9999L35.828 23.8279C35.0779 23.078 34.0607 22.6567 33 22.6567C31.9393 22.6567 30.9221 23.078 30.172 23.8279L12 41.9999M10 6H38C40.2091 6 42 7.79086 42 10V38C42 40.2091 40.2091 42 38 42H10C7.79086 42 6 40.2091 6 38V10C6 7.79086 7.79086 6 10 6ZM22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18C14 15.7909 15.7909 14 18 14C20.2091 14 22 15.7909 22 18Z"
      stroke={stroke || '#979797'}
      strokeOpacity={strokeOpacity || 0.4}
      strokeWidth={strokeWidth || 2}
      strokeLinecap={strokeLinecap || 'round'}
      strokeLinejoin={strokeLinejoin || 'round'}
    />
  </svg>
);
