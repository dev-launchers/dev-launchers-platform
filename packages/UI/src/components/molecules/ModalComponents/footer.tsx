type FooterProps = {
  footerContent?: object;
};

const footer: React.FC<FooterProps> = ({footerContent}) => {
  return (
    <>
    {footerContent}
    </>
  );
};
export default footer;
