import Body from '../../molecules/ModalComponents/body';
import Header from '../../molecules/ModalComponents/header';
import Footer from '../../molecules/ModalComponents/footer';
import header from '../../molecules/ModalComponents/header';
import FormField from "../FormField/FormField";
import footer from '../../molecules/ModalComponents/footer';
import Button from '../../atoms/Button/Button';
import newsFooter from '../..//molecules/ModalComponents/news-footer';

const Modal = () => {
  const headerContent = 'SUBSCRIBE TO OUR NEWSLETTER';
  const bodyString = (
    <div className="text-[#000000] font-['Nunito Sans'] text-left relative self-stretch font-normal">
      Subscribe to our newsletter for the latest trends and exclusive content
      delivered straight to your inbox!
    </div>
  );
  const footerButtons = (
    <div className="">
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
  )
  return (
    <>
      <div className="w-[480px] h-[326px] p-8 bg-white rounded-2xl shadow flex-col justify-start items-end gap-6 inline-flex">
        <Header content={headerContent} />
        <Body
          bodyContent={FormField({
            label: 'EMAIL ADDRESS',
            id: '1',
            placeholder: 'Enter Email',
            onChange: () => {},
          })}
          bodyString={bodyString}
        />
        <Footer footerContent={newsFooter} />
      </div>
    </>
  );
};

export default Modal;

