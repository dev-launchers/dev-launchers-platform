import { ReactElement } from 'react';

type FooterProps = {
  footerContent?: JSX.Element;
};

const footer: React.FC<FooterProps> = ({footerContent}) => {
  return (
    <>
    {footerContent}
    </>
  );
};
export default footer;
