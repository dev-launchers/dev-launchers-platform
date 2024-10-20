import { useEffect, useState } from 'react';
import { useOnboardingDataContext } from './../../../../../context/OnboardingDataContext';
import * as onboardingActions from './../../../../../state/actions/onboardingActions';

import Header from './Header';
import Footer from './Footer';
import Modal from '../../../../common/Modal';

/**
 * @description This is a stepper component that is used for the user onboarding
 */
export default function Stepper({
  steps = stepsMockData,
  startingIndex = 0,
  maxHeight = '1000px',
  maxWidth = '936px',
  width = '936px',
  height = '792px',
}) {
  const { onboardingData, dispatch } = useOnboardingDataContext();

  const [stepConfig] = useState(steps);
  const [activeStepIndex, setActiveStepIndex] = useState(startingIndex);
  const [activeStepConfig, setActiveStepConfig] = useState(
    stepConfig[startingIndex]
  );
  const [isLoading, setIsLoading] = useState(false);
  const [disableNextButton, setDisableNextButton] = useState(false);

  const updateConfigs = () => {
    if (stepConfig[activeStepIndex]?.skip) {
      setActiveStepIndex(activeStepIndex + 1);
    }
    setActiveStepConfig(stepConfig[activeStepIndex]);
    setIsLoading(false);
  };

  useEffect(() => {
    updateConfigs();
  }, [activeStepIndex]);

  const openCloseModal = () => {
    dispatch({ type: onboardingActions.SHOW_CLOSING_MODAL });
  };

  const closeStepper = () => {
    dispatch({ type: onboardingActions.HIDE_ALL_ONBOARDING_MODALS });
  };

  return (
    <Modal
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      width={width}
      className={'w-full bg-grayscale-100 h-full'}
    >
      <div className="flex flex-col gap-10 overflow-hidden">
        <Header
          stepper={stepConfig}
          activeStepIndex={activeStepIndex}
          activeStepConfig={activeStepConfig}
          onClose={openCloseModal}
          isLoading={isLoading}
        />
        <div className="h-[480px] w-full">
          {activeStepConfig?.component ?? null}
        </div>
        <Footer
          stepConfig={stepConfig}
          buttonConfig={activeStepConfig?.buttons}
          activeStepIndex={activeStepIndex}
          setActiveStepIndex={setActiveStepIndex}
          setActiveStepConfig={setActiveStepConfig}
          onSubmit={closeStepper}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          context={[onboardingData, dispatch]}
          disableNextButton={disableNextButton}
          setDisableNextButton={setDisableNextButton}
        />
      </div>
    </Modal>
  );
}

const stepsMockData = [
  {
    component: <p>Step 1</p>,
    skip: false,
    header: {
      name: 'Step 1',
      number: 1,
      barSize: null,
      hideNumber: null,
    },
    buttons: {
      next: {
        label: 'Next',
        hideIcons: false,
        onClick: null,
      },
      back: {
        label: 'Back',
        hideIcons: false,
        onClick: null,
      },
    },
  },
  {
    component: <p>Step 2</p>,
    skip: false,
    header: {
      name: 'Step 2',
      number: 2,
      barSize: null,
      hideNumber: null,
    },
    buttons: {
      next: {
        label: 'Next',
        hideIcons: false,
        onClick: null,
      },
      back: {
        label: 'Back',
        hideIcons: false,
        onClick: null,
      },
    },
  },
  {
    component: <p>Step 3 - Number Hidden</p>,
    skip: false,
    header: {
      name: 'Step 3',
      number: 2,
      barSize: null,
      hideNumber: true,
    },
    buttons: {
      next: {
        label: 'Next',
        hideIcons: false,
        onClick: null,
      },
      back: {
        label: 'Back',
        hideIcons: false,
        onClick: null,
      },
    },
  },
  {
    component: <p>Step 4</p>,
    skip: false,
    header: {
      name: 'Final',
      number: 4,
      barSize: null,
      hideNumber: null,
    },
    buttons: {
      submit: {
        label: 'Done',
        hideIcons: true,
        onClick: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 5000);
          });
        },
      },
      back: {
        label: 'Back',
        hideIcons: false,
        onClick: null,
      },
    },
  },
];
