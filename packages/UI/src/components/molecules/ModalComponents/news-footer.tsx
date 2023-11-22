import Button from '../../atoms/Button/Button';

const newsFooter = () => {
  return (
    <div className="flex flex-row gap-6 items-start justify-end shrink-0 relative">
      <button className="bg-grayscale-50 rounded-lg border-solid border-grayscale-800 border-2 pt-2 pr-6 pb-2 pl-6 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
        <div className="text-grayscale-800 text-center relative text-base font-normal font-['NunitoSans'] capitalize leading-normal tracking-wide" style={{
              font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
            }}>
          Dismiss
        </div>
      </button>
      <button className="bg-brand-alt-nebula-600 rounded-lg border-solid border-brand-secondary-nebula-600 border pt-2 pr-6 pb-2 pl-6 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
        <div className="text-center text-grayscale-50 text-base font-normal font-['NunitoSans'] capitalize leading-normal tracking-wide" style={{
              font: "var(--tosort-universal-button, 400 16px/150% 'NunitoSans-Regular', sans-serif)",
            }}>
          Subscribe
        </div>
      </button>
    </div>
  );
};

export default newsFooter;
