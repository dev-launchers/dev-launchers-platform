const RoleFooter = () => {
return (
<div
      className={
        "flex flex-row items-center justify-between self-stretch shrink-0 relative "
      }
    >
      <div className="flex flex-row gap-3 items-start justify-center shrink-0 relative">
        <div
          className="text-[#000000] text-left relative"
          style={{
            font: "var(--laptop-desktop-p-d-d, 400 16px/24px 'NunitoSans-Regular', sans-serif)",
          }}
        >
          Step 1 out of 5{" "}
        </div>
      </div>
      <div className="flex flex-row gap-6 items-start justify-end shrink-0 relative">
        <button className="bg-grayscale-50 rounded-lg border-solid border-grayscale-800 border-2 pt-2 pr-6 pb-2 pl-6 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
          <div
            className="text-grayscale-800 text-center relative"
            style={{
              font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
            }}
          >
            Previous{" "}
          </div>
        </button>
        <button className="bg-brand-alt-nebula-600 rounded-lg border-solid border-brand-secondary-nebula-600 border pt-2 pr-6 pb-2 pl-6 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
          <div
            className="text-grayscale-50 text-center relative"
            style={{
              font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
            }}
          >
            Next{" "}
          </div>
        </button>
      </div>
    </div>
)
}

export default RoleFooter;