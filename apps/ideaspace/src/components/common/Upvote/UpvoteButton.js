import { useState } from 'react';

const UpvoteButton = ({ text, selected, disabled, onclick }) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

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

  // // call two functions on click: the one passed in via onClick and another to add a border around the button to show that it was clicked
  // function clickFunc() {
  //   setFocused(true);
  //   onclick();
  // }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // onClick={() => { setFocused(true); onclick(); }}
      onClick={onclick}
      onMouseUp={setFocused(false)}
      onTouchEnd={setFocused(false)}
      style={{
        cursor: 'pointer',

        display: 'inline-flex',
        padding: 'var(--25, 10px) 16px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'var(--25, 10px)',

        color: disabled
          ? 'var(--grayscale-400, #979797)'
          : selected
          ? 'var(--brand-alt-nebula-600, #69349D)'
          : 'var(--grayscale-700, #303030)',
        textAlign: 'center',

        /* button */
        fontFamily: 'Nunito Sans',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '150%' /* 24px */,
        letterSpacing: '0.64px',
        textTransform: 'capitalize',

        background: focused
          ? '#EBE6F1'
          : hovered
          ? 'var(--brand-alt-nebula-50, #F1EBF7)'
          : '',
        borderRadius: '8px',
      }}
    >
      {icon}
      {text}
    </div>
  );
};

export default UpvoteButton;
