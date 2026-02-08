import React, { useState, useEffect } from 'react';
import { atoms } from '@devlaunchers/components/src/components';

const Alert = ({
  type = 'success',
  variant = 'submit',
  onClose,
  countdown = null,
}) => {
  const [currentCountdown, setCurrentCountdown] = useState(countdown);

  // Auto-dismiss logic for edit alerts
  useEffect(() => {
    if (variant === 'edit') {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [onClose, variant]);

  // Countdown logic for submit success alerts
  useEffect(() => {
    if (type === 'success' && variant === 'submit' && countdown) {
      const timer = setInterval(() => {
        setCurrentCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [type, variant, countdown]);

  // Generate message based on type and variant
  const getMessage = () => {
    if (type === 'success') {
      if (variant === 'submit') {
        return (
          <atoms.Typography as="strong">
            Your idea was successfully posted! You&apos;ll be redirected to the
            Idea Workshopping Page in{' '}
            <atoms.Typography as="strong">{currentCountdown}</atoms.Typography>
            seconds.
          </atoms.Typography>
        );
      } else {
        return (
          <atoms.Typography as="strong">
            Your changes have been saved!
          </atoms.Typography>
        );
      }
    } else {
      if (variant === 'submit') {
        return (
          <atoms.Typography as="strong">
            {' '}
            Failed to post your idea. Please try again later.
          </atoms.Typography>
        );
      } else {
        return (
          <atoms.Typography as="strong">
            Failed to save changes. Please try again later.
          </atoms.Typography>
        );
      }
    }
  };

  const getIcon = () => {
    if (type === 'success') {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986M9 10.9998L12 13.9998L22 3.99976"
            stroke="#226626"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
            fill="#d32f2f"
          />
        </svg>
      );
    }
  };

  return (
    <div
      className={`fixed top-[85px] right-5 z-[1000] h-14 border-2 rounded-xl flex items-center justify-between px-4 py-4 animate-pulse
        ${
          type === 'success'
            ? 'bg-[#c4ebc6] border-[#226626]'
            : 'bg-[#f8d7da] border-[#d32f2f]'
        }
        ${variant === 'submit' ? 'w-[928px]' : 'w-[400px]'}
      `}
      style={{
        animation:
          variant === 'submit'
            ? 'slideDown 0.5s ease-out'
            : 'fadeIn 0.5s ease-out',
      }}
    >
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="flex items-center gap-2 flex-1">
        {getIcon()}
        <atoms.Typography
          as="h4"
          className={`m-0 text-left text-sm font-normal leading-5 font-['Nunito_Sans']
          ${type === 'success' ? 'text-[#206124]' : 'text-[#721c24]'}
        `}
        >
          {getMessage()}
        </atoms.Typography>
      </div>

      <button
        className={`border-0 cursor-pointer p-2 ml-auto flex items-center justify-center rounded-lg w-8 h-8 hover:opacity-90
          ${
            type === 'success'
              ? 'bg-[rgba(34,102,38,0.1)] text-[#226626] hover:bg-[rgba(34,102,38,0.15)]'
              : 'bg-[rgba(211,47,47,0.1)] text-[#d32f2f] hover:bg-[rgba(211,47,47,0.15)]'
          }
        `}
        onClick={onClose}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            fill={type === 'success' ? '#226626' : '#d32f2f'}
          />
        </svg>
      </button>
    </div>
  );
};

export default Alert;
