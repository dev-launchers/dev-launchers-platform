import Body from '../../molecules/ModalComponents/body';
import Header from '../../molecules/ModalComponents/header';
import Footer from '../../molecules/ModalComponents/footer';
import header from '../../molecules/ModalComponents/header';
import footer from '../../molecules/ModalComponents/footer';
import Button from '../../atoms/Button/Button';
import newsFooter from '../..//molecules/ModalComponents/news-footer';

import termsFooter from 'components/molecules/ModalComponents/terms-footer';


const Modal = () => {
  const modalType = "terms";
  return (
    <>
      <div className="w-[480px] h-[326px] p-8 bg-white rounded-2xl shadow flex-col justify-start items-end gap-6 inline-flex">
        <Header modalType={modalType}/>
        <Body
          modalType={modalType}
        />
        <Footer modalType={modalType}/>
      </div>
    </>
  );
};

export default Modal;

