import React from 'react';

function FilledCross({ width, height, colorClass, svgClass }) {
  return (
    <svg
      width={width ?? '20'}
      height={height ?? '20'}
      className={svgClass ?? ''}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 865">
        <path
          className={colorClass ?? 'fill-white'}
          id="Vector"
          d="M12.6451 14.0026C12.4707 14.0031 12.2984 13.9701 12.1409 13.9061C11.9834 13.842 11.8446 13.7486 11.7347 13.6326L6.09754 7.63256C5.92588 7.45363 5.83203 7.22919 5.83203 6.99756C5.83203 6.76594 5.92588 6.5415 6.09754 6.36256L11.9331 0.362565C12.1312 0.158348 12.4159 0.0299235 12.7245 0.00554376C13.0332 -0.018836 13.3404 0.0628259 13.5788 0.232564C13.8171 0.402303 13.967 0.646214 13.9955 0.910641C14.0239 1.17507 13.9286 1.43835 13.7305 1.64256L8.51348 7.00256L13.5554 12.3626C13.6982 12.5093 13.7888 12.6881 13.8167 12.8776C13.8446 13.0672 13.8085 13.2596 13.7127 13.4321C13.6169 13.6047 13.4655 13.7501 13.2763 13.8512C13.0871 13.9523 12.868 14.0048 12.6451 14.0026Z"
        />
        <path
          className={colorClass ?? 'fill-white'}
          id="Vector_2"
          d="M1.35541 5.95712e-05C1.52977 -0.000448724 1.70205 0.0325236 1.85958 0.0965524C2.01712 0.160581 2.15591 0.25404 2.26576 0.37006L7.90295 6.37006C8.07461 6.54899 8.16846 6.77344 8.16846 7.00506C8.16846 7.23669 8.07461 7.46113 7.90295 7.64006L2.06735 13.6401C1.86924 13.8443 1.58457 13.9727 1.27595 13.9971C0.967335 14.0215 0.660055 13.9398 0.421709 13.7701C0.183363 13.6003 0.0334778 13.3564 0.0050231 13.092C-0.0234307 12.8276 0.0718786 12.5643 0.269983 12.3601L5.48701 7.00006L0.445053 1.64006C0.302334 1.49327 0.211676 1.31453 0.183805 1.12499C0.155935 0.935437 0.192019 0.743012 0.287788 0.570485C0.383557 0.397957 0.535003 0.252546 0.724205 0.151455C0.913407 0.0503649 1.13245 -0.00217204 1.35541 5.95712e-05Z"
        />
      </g>
    </svg>
  );
}

export default FilledCross;