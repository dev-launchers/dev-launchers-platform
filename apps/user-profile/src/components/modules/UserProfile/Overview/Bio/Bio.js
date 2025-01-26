import Card from './../../../../common/Card';
import { Typography } from '@devlaunchers/components/components/atoms';
import { editProfileDataContext } from '../../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../../state/actions';

/**
 * Bio Component
 *
 * Displays the user's biography within a styled card. If no bio is provided,
 * a placeholder message is shown. Includes an "edit" functionality that triggers
 * a dispatch to update the bio.
 *
 * @param {Object} props - The component props.
 * @param {string} props.bio - The user's biography.
 *
 * @return {JSX.Element} The rendered Bio card.
 */
function Bio({ bio }) {
  // Access the dispatch function from the EditProfileDataContext
  const { editProfileDispatch } = editProfileDataContext();

  /**
   * Handles the edit button click.
   * Dispatches an action to show the bio editing interface.
   */
  const onEdit = () => {
    editProfileDispatch({ type: editProfileActions.SHOW_BIO_SETTING });
  };

  return (
    // Card component with a title and optional "edit" action
    <Card title="Bio" onEdit={onEdit}>
      {/* Typography for displaying the bio or a placeholder if none exists */}
      <Typography className={`${bio ? '' : 'text-grayscale-500'}`} type="p">
        {bio ? bio : 'No bio added...'} {/* Show the bio or placeholder text */}
      </Typography>
    </Card>
  );
}

export default Bio;
