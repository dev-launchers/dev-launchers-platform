const footer = () => {
  return (
    <div className="justify-end items-start gap-6 inline-flex">
      <button className="px-6 py-2 bg-white rounded-lg border-2 border-zinc-900 justify-center items-center gap-2.5 flex">
        <div className="text-center text-zinc-900 text-base font-normal font-['Nunito Sans'] capitalize leading-normal tracking-wide">
          Dismiss
        </div>
      </button>
      <button className="px-6 py-2 bg-purple-800 rounded-lg border border-purple-800 justify-center items-center gap-2.5 flex">
        <div className="text-center text-white text-base font-normal font-['Nunito Sans'] capitalize leading-normal tracking-wide">
          Subscribe
        </div>
      </button>
    </div>
  );
};
export default footer;
