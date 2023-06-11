import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import OnboardingCard from './OnboardingCard/OnboardingCard.js';
import RoleCard from './RoleCard/RoleCard.js';
import PlatformOnboarding from './PlatformOnboarding/PlatformOnboarding';
import Typography from '@devlaunchers/components/components/atoms/Typography';
import LogoMonogram from '../../../images/logo-monogram.png';
import {
  ModalContainer,
  userUnboardingModalStyle,
  ModalHeader,
  ModalBody,
} from './StyledUserOnboardingModal';
import PageTwo from './PlatformOnboarding/PageTwo/PageTwo.js';
import Stepper from '../../common/Stepper/Stepper.js';

Modal.setAppElement('#__next');

/**
 * @description This is custom modal for the user onboarding.
 */
export default function UserOnboardingModal({ isOpen }) {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const openModal = () => {
    setModalIsOpen(true);
  };
  // const afterOpenModal = () => {
  //     // references are now sync'd and can be accessed.
  // }
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const pages = [
    {
      component: <p>Step 1</p>,
      config: {
        buttons: {
          next: {
            label: 'Next',
            useDefaultOnClick: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
          back: {
            label: 'Back',
            useDefaultOnClick: true,
            // useDefaultHide: true,
            onClick: () => {
              console.log('..some function ');
            },
          },
        },
      },
    },
    {
      component: <PageTwo />,
      config: {
        buttons: {
          next: {
            label: 'Next',
          },
          back: {
            label: 'Back',
            useDefaultOnClick: true,
          },
        },
      },
    },
  ];

  return (
    <>
      {/* "modalIsOpen ? true : false" set this way until we start adding typescript for 
         boolean type */}
      <Modal
        isOpen={modalIsOpen ? true : false}
        onRequestOpen={openModal}
        onRequestClose={closeModal}
        style={userUnboardingModalStyle}
        contentLabel="User Onboarding"
      >
        <ModalContainer>
          <ModalHeader>
            <img height="33.6px" src={LogoMonogram} alt="dev-launchers" />
            <Typography type="h4">Dev Launchers</Typography>
          </ModalHeader>
          <ModalBody>
            {/* <Typography type="h2">Get Started with Devlaunchers</Typography>
                        <Typography type="subtitle">Please complete the following onboarding tasks</Typography> */}
            {/* Onboarding Card Component */}

            <PlatformOnboarding/>

            {/* Role Card Component */}
          </ModalBody>
        </ModalContainer>
      </Modal>
    </>
  );
}
