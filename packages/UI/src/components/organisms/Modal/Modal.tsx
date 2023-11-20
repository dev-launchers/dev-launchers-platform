
const Modal = () => {
  return (
    <>
    <div className="w-[480px] h-[326px] p-8 bg-white rounded-2xl shadow flex-col justify-start items-end gap-6 inline-flex">
  <div className="self-stretch justify-between items-center inline-flex">
    <div className="grow shrink basis-0 text-black text-base font-normal font-['Nunito Sans'] uppercase tracking-wider">Subscribe to our newsletter</div>
    <div className="p-2 bg-white rounded shadow justify-end items-start flex">
      <div className="w-3.5 h-3.5 relative">
      </div>
    </div>
  </div>
  <div className="h-36 flex-col justify-start items-center gap-4 flex">
    <div className="self-stretch text-black text-base font-normal font-['Nunito Sans'] leading-normal">Subscribe to our newsletter for the latest trends and exclusive content delivered straight to your inbox!</div>
    <div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
      <div className="px-4 justify-start items-center inline-flex">
        <label className="text-zinc-900 text-sm font-normal font-['Nunito Sans'] uppercase leading-tight">Email address</label>
      </div>
      <div className="self-stretch pl-6 pr-2 py-4 bg-white rounded-lg border border-black justify-start items-center inline-flex">
        <input className="text-zinc-500 text-sm font-light font-['Nunito Sans'] leading-tight">Enter your email address</input>
      </div>
    </div>
  </div>
  <div className="justify-end items-start gap-6 inline-flex">
    <button className="px-6 py-2 bg-white rounded-lg border-2 border-zinc-900 justify-center items-center gap-2.5 flex">
      <div className="text-center text-zinc-900 text-base font-normal font-['Nunito Sans'] capitalize leading-normal tracking-wide">Dismiss</div>
    </button>
    <button className="px-6 py-2 bg-purple-800 rounded-lg border border-purple-800 justify-center items-center gap-2.5 flex">
      <div className="text-center text-white text-base font-normal font-['Nunito Sans'] capitalize leading-normal tracking-wide">Subscribe</div>
    </button>
  </div>
</div>
    </>
  );
};

export default Modal;

