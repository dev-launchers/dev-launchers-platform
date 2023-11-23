import Body from '../../molecules/ModalComponents/Body';
import Header from '../../molecules/ModalComponents/Header';
import Footer from '../../molecules/ModalComponents/Footer';

type modalProps = {
  modalType?: string;
}
const Modal = ({modalType = 'terms'}) => {
  
  return (
    <>
      <div className="w-[480px] h-[326px] p-8 bg-white rounded-2xl shadow flex-col justify-start items-end gap-6 inline-flex">
        <Header modalType={modalType} closeButton={true}/>
        <Body
          modalType={modalType}
        />
        <Footer modalType={modalType}/>
      </div>
    </>
  );
};

export default Modal;

