import { Typography } from '@devlaunchers/components/components/atoms';
import { editProfileDataContext } from './../../../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../../../state/actions';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

function Bio() {
  const { editProfileDispatch } = editProfileDataContext();
  const { userData } = useUserDataContext();

  const onInputChange = (event) => {
    if (userData?.bio !== event.target.value) {
      editProfileDispatch({
        type: editProfileActions.UPDATE_BIO,
        payload: { newBio: event.target.value, changed: true },
      });
    } else {
      editProfileDispatch({
        type: editProfileActions.UPDATE_BIO,
        payload: { newBio: event.target.value, changed: false },
      });
    }
  };

  return (
    <div className="flex flex-col gap-9">
      <Typography type="h4" className="p-0 m-0">
        {' '}
        Edit your bio{' '}
      </Typography>
      <div className="flex flex-col gap-2">
        <Typography type="p">
          {' '}
          <span className="font-extrabold">Bio</span> (optional)
        </Typography>
        <textarea
          className="p-6 h-24 border-2 border-grayscale-900 rounded-lg text-base"
          placeholder="Please enter bio..."
          onChange={onInputChange}
        >
          {userData?.bio ?? null}
        </textarea>
      </div>
    </div>
  );
}

export default Bio;
