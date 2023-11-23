import BackButton from "../BackButton";

type HeaderProps = {
  modalType: string;
  closeButton: boolean;
};

const Header: React.FC<HeaderProps> = ({modalType, closeButton}) => {
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
  function handleClose(){
    if (closeButton === true){
      return <BackButton type={'cancel'} withLabel={false}/>;
    }
    else {
      return;
    }
  }
    return (
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="grow shrink basis-0 text-black text-base font-normal font-['Nunito Sans'] uppercase tracking-wider">
          {handleHeader()}
        </div>
        {handleClose()}
      </div>
    );
}

export default Header;