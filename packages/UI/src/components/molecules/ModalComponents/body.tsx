const body = () => {
  return (
    <div className="h-36 flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch text-black text-base font-normal font-['Nunito Sans'] leading-normal">
        Subscribe to our newsletter for the latest trends and exclusive content
        delivered straight to your inbox!
      </div>
      <div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
        <div className="px-4 justify-start items-center inline-flex">
          <label className="text-zinc-900 text-sm font-normal font-['Nunito Sans'] uppercase leading-tight">
            Email address
          </label>
        </div>
        <div className="self-stretch pl-6 pr-2 py-4 bg-white rounded-lg border border-black justify-start items-center inline-flex">
          <div className="text-zinc-500 text-sm font-light font-['Nunito Sans'] leading-tight">
            Enter your email address
          </div>
        </div>
      </div>
    </div>
  );
};

export default body;
