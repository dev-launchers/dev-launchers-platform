import { Typography } from '@devlaunchers/components/components/atoms';
import Button from '@devlaunchers/components/components/atoms/Button';
import { useOnboardingDataContext } from './../../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../../state/actions';
import Modal from './../../../../common/Modal';
import CloseIcon from './../../../../common/Icons/SVG/FilledCross';

export default function CloseModal() {
  const { dispatch } = useOnboardingDataContext();

  const cancel = () => {
    dispatch({ type: onboardingActions.HIDE_ALL_ONBOARDING_MODALS });
  };
  const closeModal = () => {
    dispatch({ type: onboardingActions.HIDE_CLOSING_MODAL });
  };

  return (
    <Modal width="600px" maxHeight="260px">
      <div className="flex flex-col gap-7 px-8 py-3 relative">
        <CloseIcon
          width="14"
          className="absolute right-4"
          colorClass="fill-grayscale-700"
          onClick={closeModal}
        />
        <div className="flex flex-col">
          <Typography type="h3">Close onboarding?</Typography>
          <Typography type="p">
            Are you sure you want to leave onboarding? <br />
            Don't worry, we'll save your changes!
          </Typography>
        </div>
        <div className="flex justify-end  gap-4 pt-4 border-t-2 border-gray-200">
          <Button buttonType="primary" buttonSize="standard" onClick={cancel}>
            Confirm
          </Button>
          <Button buttonType="alternative" buttonSize="xl" onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}
