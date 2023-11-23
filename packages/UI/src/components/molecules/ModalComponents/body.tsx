import { bodyStreamToNodeStream } from 'next/dist/server/body-streams';
import FormField from '../../organisms/FormField/FormField';
import TermsBody from './TermsBody';
import NewsBody from './NewsBody';
import RoleBody from './RoleBody';

type BodyProps = {
  modalType: string;
};

const Body: React.FC<BodyProps> = ({ modalType }) => {
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

export default Body;
