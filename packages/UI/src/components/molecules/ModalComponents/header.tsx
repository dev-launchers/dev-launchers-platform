type HeaderProps = {
  modalType: string;
};

const header: React.FC<HeaderProps> = ({modalType}) => {
  const newsContent = 'SUBSCRIBE TO OUR NEWSLETTER';
  const termsContent = "TERMS OF SERVICE";
  const roleContent = "SELECT YOUR ROLE";
  function handleHeader() {
    if (modalType === 'newsletter') {
      return newsContent;
    } else if (modalType === 'terms') {
      return termsContent;
    } else {
      return roleContent;
    }
  }
    return (
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="grow shrink basis-0 text-black text-base font-normal font-['Nunito Sans'] uppercase tracking-wider">
          {handleHeader()}
        </div>
        <div className="p-2 bg-white rounded shadow justify-end items-start flex">
          <div className="w-3.5 h-3.5 relative"></div>
        </div>
      </div>
    );
}

export default header;