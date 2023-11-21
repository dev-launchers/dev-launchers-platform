import Body from '../../molecules/ModalComponents/body';
import Header from '../../molecules/ModalComponents/header';
import Footer from '../../molecules/ModalComponents/footer';

const Modal = () => {
  const headerContent = "";
  const bodyContent = 'Subscribe to our newsletter for the latest trends and exclusive content delivered straight to your inbox!';
  return (
    <>
      <div className="w-[480px] h-[326px] p-8 bg-white rounded-2xl shadow flex-col justify-start items-end gap-6 inline-flex">
        <Header/>
          <Body/>
          <Footer/>
      </div>
    </>
  );
};

export default Modal;

