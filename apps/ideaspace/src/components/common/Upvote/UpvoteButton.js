import { useState } from 'react';
import { Loader } from 'semantic-ui-react';

const UpvoteButton = ({ text, selected, disabled, onclick, show }) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  if (!show) return null;

  const icon = selected ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M9 19H15H9Z" fill="color: var(--content-04, #BD9CDE)" />
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
        stroke="var(--content-04, #BD9CDE)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  // call two functions on click: the one passed in via onClick and another to add a border around the button to show that it was clicked
  function clickFunc() {
    if (disabled == false) {
      onclick();
    }
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onclick}
      // onClick={clickFunc}
      onMouseUp={() => setFocused(false)}
      onMouseDown={() => setFocused(true)}
      style={{
        cursor: 'pointer',
        color: 'var(--content-04, #BD9CDE)',
        display: 'inline-flex',
        padding: 'var(--25, 10px) 16px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'var(--25, 10px)',

        // color: disabled
        //   ? 'var(--grayscale-400, #979797)'
        //   : selected
        //   ? 'var(--brand-alt-nebula-600, #69349D)'
        //   : 'var(--grayscale-700, #303030)',
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
          ? 'var(--interactive-surface, #1F0F2E)'
          : hovered
          ? 'var(--interactive-surface, #1F0F2E)'
          : '',
        border: disabled
          ? 'var(--priority-border-width, 1.5px) solid var(--interactive-border, #7339AC)'
          : focused
          ? 'var(--priority-border-width, 1.5px) solid var(--interactive-border, #A681CA)'
          : hovered
          ? 'var(--priority-border-width, 1.5px) solid var(--interactive-border, #996FC3)'
          : 'var(--button-border-width, 4px) solid transparent',
        borderRadius: '8px',

        boxShadow: hovered
          ? '0 0 0 var(--priority-ring-surface-spread, 4px) var(--priority-ring-border, #3F1F5F) inset, 0 0 0 var(--priority-ring-border-spread, 0) var(--priority-ring-surface, #301848) inset'
          : focused
          ? '0 0 0 var(--priority-ring-surface-spread, 4px) var(--priority-ring-border, #000) inset, 0 0 0 var(--priority-ring-border-spread, 6px) var(--priority-ring-surface, #69349D) inset'
          : 'none',
        // : '0 0 0 var(--priority-ring-surface-spread, 4px) var(--priority-ring-border, #69349D) inset, 0 0 0 var(--priority-ring-border-spread, 6px) var(--priority-ring-surface, #3F1F5F) inset',

        pointerEvents: disabled ? 'none' : 'pointer',
      }}
    >
      {icon}
      {text}
    </div>
  );
};

export default UpvoteButton;
