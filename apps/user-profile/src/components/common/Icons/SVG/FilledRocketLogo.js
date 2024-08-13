import React from 'react';

function FilledRocketLogo({ width, height, colorClass, svgClass }) {
  return (
    <svg
      width={width ?? '40'}
      height={height ?? '40'}
      className={svgClass ?? 'w-[40] h-[34]'}
      viewBox="0 0 41 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={colorClass ?? 'fill-grayscale-50'}
        d="M15.004 21.0636C15.004 21.0636 14.9921 21.0437 14.9881 21.0358C14.9841 21.0279 14.9762 21.016 14.9722 21.008C13.251 18.1922 11.6407 14.9083 10.8198 12.7031L9.67755 14.4085L10.5897 16.574L9.97501 16.9666C10.4509 18.3468 11.4305 20.6947 12.549 22.5191C12.549 22.5191 12.5609 22.5389 12.5609 22.5429C13.6793 24.3673 15.3212 26.3027 16.3365 27.3577L16.9632 26.9888L18.4782 28.7855L20.5168 28.5435C18.9264 26.8104 16.7292 23.8834 15.0079 21.0715L15.004 21.0636Z"
      />
      <path
        className={colorClass ?? 'fill-grayscale-50'}
        d="M11.4624 30.3361C11.748 30.1577 12.2199 29.8562 12.6601 29.2851C13.1202 28.6863 13.3066 28.1072 13.382 27.8217C13.5604 27.1435 13.5287 26.5644 13.4811 26.2233L12.1327 24.0182C12.1446 24.1174 12.1565 24.2839 12.1049 24.4783C12.0851 24.5576 12.0295 24.7281 11.8987 24.8987C11.7718 25.0613 11.6369 25.1485 11.5536 25.2001C11.4981 25.2358 11.3355 25.331 10.7525 25.4579C10.2131 25.5729 10.1655 25.5134 10.1655 25.5134C10.1655 25.5134 10.5423 25.1525 10.4947 25.0335C10.3995 24.7916 8.2856 25.1446 8.2856 25.1446H8.26974L8.27767 25.1327C8.27767 25.1327 9.55077 23.4114 9.38023 23.2171C9.29694 23.1219 8.80119 23.2924 8.80119 23.2924C8.80119 23.2924 8.76946 23.221 9.11847 22.7967C9.49525 22.3327 9.65389 22.2335 9.70941 22.2018C9.7927 22.1542 9.93151 22.0709 10.1338 22.0312C10.3479 21.9916 10.5225 22.0193 10.6018 22.0392C10.8001 22.0828 10.9429 22.1661 11.0261 22.2216L9.67769 20.0165C9.39213 19.8182 8.89637 19.5247 8.21025 19.3779C7.92469 19.3145 7.32185 19.2193 6.5802 19.3581C5.87425 19.493 5.39039 19.7745 5.10087 19.9451C4.90257 20.0641 4.35525 20.4091 3.04249 22.0154C1.83285 23.4947 1.9082 23.6811 1.9439 23.7406C1.98356 23.808 3.83967 23.5463 3.95072 23.4749C3.95072 23.4749 0.00450143 29.9276 0.131415 30.1299C0.258328 30.3322 7.79381 29.7492 7.79381 29.7492C7.68276 29.8166 6.604 31.3514 6.64763 31.4189C6.68332 31.4784 6.8142 31.6291 8.68221 31.2245C10.7089 30.7883 11.2641 30.4551 11.4624 30.3322V30.3361Z"
      />
      <path
        className={colorClass ?? 'fill-grayscale-50'}
        d="M30.9831 31.074L32.1491 27.0445C32.1491 27.0445 34.9809 24.5816 36.8608 22.6264C38.3798 21.0479 39.7798 18.7396 39.7798 18.7396L40.0653 18.2003C40.2716 17.8076 39.9186 8.77297 39.7719 5.86189C39.752 5.47718 39.8472 5.1837 39.1056 4.7038C36.7775 3.19671 29.3531 -0.0118237 28.9128 -0.00389157L28.306 0.0040407C28.306 0.0040407 25.6131 0.202343 23.519 0.83691C20.9213 1.62219 17.443 3.02617 17.443 3.02617L13.3263 2.23296C13.0962 2.17743 12.779 2.42333 12.5727 2.55421C11.5416 3.20861 8.83671 4.94177 7.63103 5.67945L7.30978 5.87379C7.23839 5.91741 7.2146 6.00863 7.25822 6.08002L7.28202 6.11968C7.32565 6.19107 7.39307 6.24263 7.47239 6.26246L8.08316 6.41317L10.7959 7.05963L12.4577 9.76051L11.835 11.5294C11.835 11.5294 13.4492 16.1895 16.0351 20.4054C18.6209 24.6213 22.0357 28.1788 22.0357 28.1788L23.8958 28.4287L25.5457 31.1335L24.8873 33.8463L24.7445 34.4571C24.7247 34.5364 24.7405 34.6197 24.7842 34.6911L24.808 34.7307C24.8516 34.8021 24.9468 34.822 25.0182 34.7783L25.3394 34.584C26.5451 33.8463 29.3174 32.2202 30.3684 31.6015C30.5786 31.4786 30.9395 31.308 30.995 31.074H30.9831ZM27.3462 14.0081L26.8941 13.2665L24.9904 10.1611C28.9128 7.75766 30.8522 10.8512 30.8522 10.8512L31.2964 11.577C31.2964 11.577 33.1724 14.7101 29.246 17.1136L27.3462 14.0081Z"
      />
    </svg>
  );
}

export default FilledRocketLogo;