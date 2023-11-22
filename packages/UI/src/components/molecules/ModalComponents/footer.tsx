import { ReactElement } from 'react';
import TermsFooter from './terms-footer';
import NewsFooter from './news-footer';
import RoleFooter from './role-footer';

type FooterProps = {
  modalType: string;
};

const footer: React.FC<FooterProps> = ({modalType}) => {

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

export default footer;
