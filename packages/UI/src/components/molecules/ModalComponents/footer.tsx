import { ReactElement } from 'react';
import TermsFooter from './TermsFooter';
import NewsFooter from './NewsFooter';
import RoleFooter from './RoleFooter';

type FooterProps = {
  modalType: string;
};

const Footer: React.FC<FooterProps> = ({modalType}) => {

  function fetchFooter() {
    if (modalType === 'newsletter') {
      return (
          <NewsFooter/>
      );
    } else if (modalType === 'terms') {
      return <TermsFooter/>
    } else {
      return <RoleFooter/>
    }
  }
  return (
    <>
      {fetchFooter()}
    </>
  );
}

export default Footer;
