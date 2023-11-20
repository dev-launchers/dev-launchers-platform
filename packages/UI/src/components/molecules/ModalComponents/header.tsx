const header = () => {
    return (
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="grow shrink basis-0 text-black text-base font-normal font-['Nunito Sans'] uppercase tracking-wider">
          Subscribe to our newsletter
        </div>
        <div className="p-2 bg-white rounded shadow justify-end items-start flex">
          <div className="w-3.5 h-3.5 relative"></div>
        </div>
      </div>
    );
}

export default header;