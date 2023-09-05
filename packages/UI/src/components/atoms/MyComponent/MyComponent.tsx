import React from 'react';

function MyComponent(){
    return (
        <div
      className="bg-[#ffffff] rounded-lg pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2.5 items-center justify-center relative"
      style={{
        boxShadow:
          "var(--shadow-xl-box-shadow, 0px 10px 18px 10px rgba(127, 126, 127, 0.25))",
      }}
    >
      <div className="flex flex-row gap-2 items-center justify-center shrink-0 relative">
        <svg
          className="shrink-0 relative overflow-visible"
          style={{}}
          width="7"
          height="14"
          viewBox="0 0 7 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83749 14.0006C5.68809 14.0011 5.54048 13.9681 5.4055 13.9041C5.27052 13.8401 5.15161 13.7466 5.05749 13.6306L0.227488 7.63058C0.0804062 7.45165 0 7.22721 0 6.99558C0 6.76396 0.0804062 6.53951 0.227488 6.36058L5.22749 0.360581C5.39723 0.156364 5.64114 0.0279398 5.90556 0.00356011C6.16999 -0.0208196 6.43327 0.0608423 6.63749 0.230581C6.8417 0.400319 6.97013 0.644231 6.99451 0.908657C7.01889 1.17308 6.93723 1.43636 6.76749 1.64058L2.29749 7.00058L6.61749 12.3606C6.73977 12.5074 6.81745 12.6861 6.84133 12.8757C6.86521 13.0652 6.83429 13.2576 6.75223 13.4302C6.67018 13.6027 6.54042 13.7481 6.37831 13.8492C6.2162 13.9503 6.02852 14.0028 5.83749 14.0006Z"
            fill="#1C1C1C"
          />
        </svg>

        <div
          className="text-[#000000] text-center uppercase relative"
          style={{
            font: "var(--laptop-desktop-label, 400 14px/20px 'Nunito Sans', sans-serif)",
          }}
        >
          Back{" "}
        </div>
      </div>
    </div>
    )
}
  export default MyComponent;