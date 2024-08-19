import {
  IntroductionContainer,
  Header,
  Body,
  Footer,
} from './StyledCloseModal';
import { Typography } from '@devlaunchers/components/components/atoms';
import Button from '@devlaunchers/components/components/atoms/Button';
import quitCloseModalButton from './../../../../../images/btn-quit-close-modal.svg';
import onSetUpLaterButton from './../../../../../images/btn-set-up-later.svg';
import closeModalXIcon from './../../../../../images/btn-close-x-icon.svg';
import { useOnboardingDataContext } from './../../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../../state/actions';
import Modal from './../../../../common/Modal';

/**
 * @description This is custom modal for the user onboarding.
 */
export default function CloseModal() {
  const { onboardingData, dispatch } = useOnboardingDataContext();

  const onSetUpLater = () => {
    dispatch({ type: onboardingActions.HIDE_ALL_ONBOARDING_MODALS });
  };
  const quitCloseModal = () => {
    dispatch({ type: onboardingActions.HIDE_CLOSING_MODAL });
  };

  return (
    <Modal isOpen={onboardingData.showCloseModal}>
      <IntroductionContainer>
        <div onClick={quitCloseModal} className="custom-button">
          <img src={closeModalXIcon} />
        </div>
        <Header>
          <Typography type="h3" textAlign="flex-start">
            <b>Close onboarding?</b>
          </Typography>
          <Typography type="p">
            Are you sure you want to leave onboarding?
            <br></br>
            Don't worry, we'll save your changes!
          </Typography>
        </Header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="480"
          height="1"
          viewBox="0 0 524 1"
          fill="none"
        >
          <line
            x1="4.37114e-08"
            y1="0.5"
            x2="524"
            y2="0.500046"
            stroke="#ECECEC"
          />
        </svg>

        <Footer>
          <Button onClick={onSetUpLater} className="custom-button">
            <img src={onSetUpLaterButton} />
          </Button>
          <Button onClick={quitCloseModal} className="custom-button">
            <img src={quitCloseModalButton} />
          </Button>
        </Footer>
      </IntroductionContainer>
    </Modal>
  );
}
