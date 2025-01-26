import { Typography } from '@devlaunchers/components/components/atoms';
import Button from '@devlaunchers/components/components/atoms/Button';
import { useOnboardingDataContext } from './../../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../../state/actions';
import Modal from './../../../../common/Modal';
import CloseIcon from './../../../../common/Icons/SVG/FilledCross';

/**
 * CloseModal Component
 *
 * A modal dialog prompting the user to confirm if they want to exit the onboarding process.
 * Provides two actions:
 * - Confirm: Closes all onboarding modals and saves progress.
 * - Cancel: Closes only this modal, allowing the user to stay in onboarding.
 *
 * @return {JSX.Element} The rendered CloseModal UI.
 */
export default function CloseModal() {
  // Access the onboarding data context's dispatch function
  const { dispatch } = useOnboardingDataContext();

  /**
   * Handles the confirm action.
   * Dispatches an action to hide all onboarding-related modals.
   */
  const cancel = () => {
    dispatch({ type: onboardingActions.HIDE_ALL_ONBOARDING_MODALS });
  };

  /**
   * Handles the cancel action for this modal.
   * Dispatches an action to hide the closing modal only.
   */
  const closeModal = () => {
    dispatch({ type: onboardingActions.HIDE_CLOSING_MODAL });
  };

  return (
    <Modal
      width="600px" // Set the modal's width
      maxHeight="270px" // Set the modal's maximum height
    >
      <div className="flex flex-col gap-7 px-8 py-3 relative">
        {/* Close icon in the top-right corner */}
        <CloseIcon
          width="14" // Size of the icon
          className="absolute right-4 cursor-pointer" // Positioning and styling
          colorClass="fill-grayscale-700" // Icon color
          onClick={closeModal} // Handle click to close modal
        />

        {/* Modal content */}
        <div className="flex flex-col">
          <Typography type="h3">Close onboarding?</Typography>
          <Typography type="p">
            Are you sure you want to leave onboarding? <br />
            Don't worry, we'll save your changes!
          </Typography>
        </div>

        {/* Action buttons */}
        <div className="flex justify-end gap-4 py-4 border-t-2 border-gray-200">
          {/* Confirm button */}
          <Button buttonType="primary" buttonSize="standard" onClick={cancel}>
            Confirm
          </Button>
          {/* Cancel button */}
          <Button buttonType="alternative" buttonSize="xl" onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}
