import { Typography } from '@devlaunchers/components/components/atoms';
import { editProfileDataContext } from './../../../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../../../state/actions';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

/**
 * Bio Component
 *
 * Allows the user to edit their bio. The component listens for changes in the
 * textarea input and updates the context state when the bio is modified.
 *
 * @return {JSX.Element} The rendered Bio editor.
 */
function Bio() {
  // Access dispatch from the EditProfileDataContext
  const { editProfileDispatch } = editProfileDataContext();
  // Access user data from the UserDataContext
  const { userData } = useUserDataContext();

  /**
   * Handles changes in the bio textarea.
   * Updates the context state with the new bio and whether it has changed.
   *
   * @param {Object} event - The input change event.
   */
  const onInputChange = (event) => {
    // Dispatch an update only if the bio has changed
    if (userData?.bio !== event.target.value) {
      editProfileDispatch({
        type: editProfileActions.UPDATE_BIO,
        payload: { newBio: event.target.value, changed: true },
      });
    } else {
      // If the bio matches the existing value, mark as unchanged
      editProfileDispatch({
        type: editProfileActions.UPDATE_BIO,
        payload: { newBio: event.target.value, changed: false },
      });
    }
  };

  return (
    <div className="flex flex-col gap-9">
      {/* Header for the bio editor */}
      <Typography type="h4" className="p-0 m-0">
        Edit your bio
      </Typography>

      {/* Bio input section */}
      <div className="flex flex-col gap-2">
        {/* Label for the bio input */}
        <Typography type="p">
          <span className="font-extrabold">Bio</span> (optional)
        </Typography>

        {/* Textarea for editing the bio */}
        <textarea
          className="p-6 h-24 border-2 border-grayscale-900 rounded-lg text-base"
          placeholder="Please enter bio..."
          onChange={onInputChange} // Handle input changes
        >
          {/* Display the current bio or leave blank */}
          {userData?.bio ?? null}
        </textarea>
      </div>
    </div>
  );
}

export default Bio;
