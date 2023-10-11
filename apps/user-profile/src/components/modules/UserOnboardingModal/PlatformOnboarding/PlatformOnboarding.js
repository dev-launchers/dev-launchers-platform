import { useEffect, useState } from 'react';
import Stepper from '../../../common/Stepper';
import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';
import PageThree from './PageThree/PageThree';
import PageFour from './PageFour/PageFour';
import { PlatformOnboardingContainer } from './StyledPlatformOnboarding';
import { useOnboardingDataContext } from './../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../state/actions';

export default function PlatformOnboarding() {
  const { dispatch } = useOnboardingDataContext();

  const hideAllModals = () => {
    dispatch({ type: onboardingActions.HIDE_ALL_MODALS });
  }
  
  const [isDisabled, setIsDisabled] = useState(true);
  const changeDisabledState = () => {
    console.log("Is disabled?", isDisabled)
    setTimeout(()=>{setIsDisabled(false); console.log("After is disabled", isDisabled)}, 5000);
  };

  // const changeDisabledState = (current) => {
  //   console.log("Is disabled?", isDisabled)
  //   setTimeout(()=>{current = false; console.log("After is disabled", current)}, 5000);
  // };

  const stepperConfig = [
    {
      component: <p> Skip </p>,
      skip: true,
      config: {
        stepName: 'Profile',
        stepNumber: 1,
        buttons: {
          next: {
            label: 'Next',
            disabled: false,
          },
          back: {
            label: 'Back',
          },
        },
      },
    },
    {
      component: <PageTwo />,
      config: {
        stepName: 'DevLaunchers',
        stepNumber: 2,
        buttons: {
          next: {
            label: 'Next',
            disabled: false,
          },
          back: {
            label: 'Back',
            hide: true,
          },
        },
      },
    },
    {
      component: <PageThree />,
      config: {
        stepName: 'About you',
        barSize: 's',
        stepNumber: 3,
        buttons: {
          next: {
            label: 'Next',
            disabled: true,
            enable: changeDisabledState,
          },
          back: {
            label: 'Back',
          },
        },
      },
    },
    {
      component: <PageFour />,
      config: {
        barSize: 's',
        hideStepNumber: true,
        buttons: {
          next: {
            label: 'Next',
            disabled: false, 
          },
          back: {
            label: 'Back',
          },
        },
      },
    },
    {
      component: <p> Interest </p>,
      config: {
        barSize: 's',
        hideStepNumber: true,
        buttons: {
          next: {
            label: 'Next',
            disabled: false,
          },
          back: {
            label: 'Back',
          },
        },
      },
    },
    {
      component: <p>Congratulations</p>,
      config: {
        stepName: 'Done',
        hideBar: true,
        stepNumber: 4,
        buttons: {
          next: {
            label: 'Finished',
            hideIcons: true,
            onClick: hideAllModals,
            disabled: false,
          },
          back: {
            label: 'Back',
          },
        },
      },
    },
  ];

  return (
    <PlatformOnboardingContainer>
      <Stepper steps={stepperConfig} startIndex={1} />
    </PlatformOnboardingContainer>
  );
}