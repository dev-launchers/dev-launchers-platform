import { useEffect, useState } from 'react';
import { Typography } from '@devlaunchers/components/components/atoms';
import { editProfileDataContext } from './../../../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../../../state/actions';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

function Bio({ discardChanges }) {
  const { editProfileDispatch } = editProfileDataContext();
  const { userData } = useUserDataContext();

  const originalBio = userData?.bio ?? '';
  const [bioValue, setBioValue] = useState(originalBio);

  useEffect(() => {
    setBioValue(originalBio);
  }, [originalBio]);

  useEffect(() => {
    if (!discardChanges) return;

    // clear textarea UI
    setBioValue('');

    // clear context value
    editProfileDispatch({
      type: editProfileActions.UPDATE_BIO,
      payload: { newBio: '', changed: false },
    });
  }, [discardChanges, editProfileDispatch]);

  const onInputChange = (event) => {
    const newValue = event.target.value;
    setBioValue(newValue);

    editProfileDispatch({
      type: editProfileActions.UPDATE_BIO,
      payload: {
        newBio: newValue,
        changed: newValue !== originalBio,
      },
    });
  };

  return (
    <div className="flex flex-col gap-9">
      <Typography variant="primary" className="p-0 m-0">
        Edit your bio
      </Typography>

      <div className="flex flex-col gap-2">
        <Typography variant="secondary">
          <span className="font-extrabold">Bio</span>
        </Typography>

        <textarea
          className="p-6 h-24 border border-gray-300 rounded-lg text-base"
          placeholder="Please enter bio..."
          onChange={onInputChange}
          value={bioValue}
        />
      </div>
    </div>
  );
}

export default Bio;
