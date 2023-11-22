import { bodyStreamToNodeStream } from 'next/dist/server/body-streams';
import FormField from '../../organisms/FormField/FormField';
import TermsBody from './terms-body';
import NewsBody from './news-body';
import RoleBody from './role-body';

type BodyProps = {
  modalType: string;
};

const body: React.FC<BodyProps> = ({ modalType }) => {
  function handleBody() {
    if (modalType === 'newsletter') {
      return (
        <>
          <NewsBody />
          <FormField
            label={'EMAIL ADDRESS'}
            id="1"
            placeholder="Enter Email"
            onChange={() => {}}
          />
        </>
      );
    } else if (modalType === 'terms') {
      return <TermsBody />;
    } else {
      return <RoleBody />;
    }
  }
  return (
    <div className="h-36 flex-col justify-start items-center gap-4 flex">
      {handleBody()}
    </div>
  );
};

export default body;
