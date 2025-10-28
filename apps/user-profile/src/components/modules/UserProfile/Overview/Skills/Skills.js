import Card from './../../../../common/Card';
import { Typography } from '@devlaunchers/components/components/atoms';
import { editProfileDataContext } from '../../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../../state/actions';

function Skills() {
  const { editProfileDispatch } = editProfileDataContext();

  // This function will be called when the Edit button is clicked
  const onEdit = () => {
    editProfileDispatch({ type: editProfileActions.SHOW_SKILLS_SETTING });
  };

  return (
    <Card title="Skills" onEdit={onEdit}>
      <Typography className="text-grayscale-500" type="p">
        {'Coming soon...'}
      </Typography>
    </Card>
  );
}

export default Skills;
