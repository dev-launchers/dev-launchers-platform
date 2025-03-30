import React, { useEffect } from 'react';

const SubmissionErrorAlert = ({ onClose }) => {
  // Auto-dismiss after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-[85px] right-5 z-[1100] bg-[#FBE9E9] border-2 border-[#E57575] rounded-xl flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
            fill="#C93636"
          />
        </svg>
        <h4 className="text-[#C93636] m-0 font-['Nunito Sans'] text-sm font-normal leading-5">
          Failed to submit your idea. Please try again.
        </h4>
      </div>
      <button
        onClick={onClose}
        className="bg-transparent border-none cursor-pointer p-1 flex items-center justify-center"
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
            fill="#C93636"
          />
        </svg>
      </button>
    </div>
  );
};

export default SubmissionErrorAlert;
