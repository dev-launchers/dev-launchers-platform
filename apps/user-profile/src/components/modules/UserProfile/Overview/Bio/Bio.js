import Card from './../../../../common/Card';
import { Typography } from '@devlaunchers/components/components/atoms';
import { editProfileDataContext } from '../../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../../state/actions';

function Bio({ bio }) {
  const { editProfileDispatch } = editProfileDataContext();

  const onEdit = () => {
    editProfileDispatch({ type: editProfileActions.SHOW_BIO_SETTING })
  }

  return (
    <Card title="Bio" onEdit={onEdit}>
      <Typography className={` ${bio ? '' : 'text-grayscale-500'}`} type="p">
        {bio ? bio : 'No bio added...'}
      </Typography>
    </Card>
  );
}

export default Bio;
