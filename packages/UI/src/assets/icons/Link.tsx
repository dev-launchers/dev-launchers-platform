import * as React from 'react';

function Link(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5443 10.456C12.7252 9.6372 11.6144 9.17725 10.4563 9.17725C9.29815 9.17725 8.18741 9.6372 7.3683 10.456L4.2793 13.544C3.46018 14.3631 3 15.474 3 16.6325C3 17.7909 3.46018 18.9018 4.2793 19.721C5.09842 20.5401 6.20939 21.0003 7.3678 21.0003C8.52621 21.0003 9.63718 20.5401 10.4563 19.721L12.0003 18.177"
        stroke={props.stroke || 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4561 13.5441C11.2752 14.3628 12.3859 14.8228 13.5441 14.8228C14.7022 14.8228 15.8129 14.3628 16.6321 13.5441L19.7211 10.4561C20.5402 9.63693 21.0004 8.52597 21.0004 7.36755C21.0004 6.20914 20.5402 5.09818 19.7211 4.27905C18.9019 3.45993 17.791 2.99976 16.6326 2.99976C15.4741 2.99976 14.3632 3.45993 13.5441 4.27905L12.0001 5.82305"
        stroke={props.stroke || 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Link;
