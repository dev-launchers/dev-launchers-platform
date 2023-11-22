const roleBody = () => {
    return (
        <div
      className={
        "bg-[#f9f9f9] flex flex-row gap-6 items-center justify-center flex-wrap self-stretch flex-1 relative "
      }
    >
      <div className="bg-grayscale-900 rounded-3xl pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
        <div
          className="text-grayscale-50 text-left relative"
          style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}
        >
          Developer{" "}
        </div>
      </div>
      <div className="bg-grayscale-50 rounded-3xl border-solid border-grayscale-900 border-4 pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
        <div
          className="text-grayscale-900 text-left relative"
          style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}
        >
          Designer{" "}
        </div>
      </div>
      <div className="bg-grayscale-50 rounded-3xl border-solid border-grayscale-900 border-4 pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
        <div
          className="text-grayscale-900 text-left relative"
          style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}
        >
          Researcher{" "}
        </div>
      </div>
      <div className="bg-grayscale-50 rounded-3xl border-solid border-grayscale-900 border-4 pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
        <div
          className="text-grayscale-900 text-left relative"
          style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}
        >
          project Manager{" "}
        </div>
      </div>
      <div className="bg-grayscale-50 rounded-3xl border-solid border-grayscale-900 border-4 pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
        <div
          className="text-grayscale-900 text-left relative"
          style={{
            font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
          }}
        >
          other{" "}
        </div>
      </div>
    </div>
    )
  }
  
  export default roleBody;