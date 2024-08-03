import { useState } from 'react';

const UpvoteButton = ({ text, selected, disabled }) => {
  const [hovered, setHovered] = useState(false);

  const icon = selected ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M9 19H15H9Z" fill="#69349D" />
      <path d="M9 15V12H5L12 5L19 12L15 12V15L9 15Z" fill="#69349D" />
      <path
        d="M9 19H15M9 15V12H5L12 5L19 12L15 12V15L9 15Z"
        stroke="#69349D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 19H15M9 15V12H5L12 5L19 12L15 12V15L9 15Z"
        stroke="#303030"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: 'pointer',

        display: 'inline-flex',
        padding: 'var(--25, 10px) 16px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'var(--25, 10px)',

        color: 'var(--grayscale-700, #303030)',
        textAlign: 'center',

        /* button */
        fontFamily: 'Nunito Sans',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '150%' /* 24px */,
        letterSpacing: '0.64px',
        textTransform: 'capitalize',

        background: hovered ? 'var(--brand-alt-nebula-50, #F1EBF7)' : '',
      }}
    >
      {icon}
      Upvote
      {text}
    </div>
  );
};

export default UpvoteButton;
