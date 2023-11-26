import Body from '../../molecules/ModalComponents/ModalBody';
import Header from '../../molecules/ModalComponents/Header';
import Footer from '../../molecules/ModalComponents/ModalFooter';
import { useEffect, useState } from 'react';

type ModalProps = {
  modalType?: string;
  hasCloseButton: boolean;
  hasHeader: boolean;
  hasBody: boolean;
  hasFooter: boolean;
}
const Modal: React.FC<ModalProps> = ({modalType = 'terms', hasCloseButton, hasHeader = true, hasBody = true, hasFooter = true}) => {
  const [isCustom, setIsCustom] = useState(false);
  
  useEffect(() => {
    if(hasHeader === false || hasBody === false || hasFooter === false){
      setIsCustom(true);
    }
  }, [hasHeader, hasBody, hasFooter])
  return (
    <>
      <div className={`${isCustom ? '' : 'h-[326px]'} w-[480px] p-8 bg-white rounded-2xl shadow flex-col justify-start items-end gap-6 inline-flex`}>
        <Header modalType={hasHeader ? modalType : ""} closeButton={hasCloseButton}/>
        <Body
          modalType={hasBody ? modalType : ""}
        />
        <Footer modalType={hasFooter ? modalType : ""}/>
      </div>
    </>
  );
};

export default Modal;

