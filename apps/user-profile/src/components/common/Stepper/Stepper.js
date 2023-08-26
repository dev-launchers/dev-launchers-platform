import { useEffect, useState } from 'react';
import {
  StepperHeader,
  StepperBody,
  StepperFooter,
  ProgressBarContainer,
  Bar,
  EmptyBar,
	LeftIcon,
	RightIcon,
} from './StyledStepper';
import { Button } from '@devlaunchers/components/components/atoms';

const stepsMockData = [
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
    component: <p>Step 2</p>,
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
          onClick: () => {
            console.log('..some function ');
          },
        },
      },
    },
  },
  {
    component: <p> Step 3</p>,
    config: {
      buttons: {
        next: {
          label: 'Finish',
          useDefaultOnClick: false,
          onClick: () => {
            Router.push('./users-me');
          },
        },
        back: {
          label: 'Back',
          useDefaultOnClick: true,
          onClick: () => {
            console.log('..some function ');
          },
        },
      },
    },
  },
];

/**
 * @description This is a stepper component that is used for the user onboarding
 */
export default function Stepper({ steps = stepsMockData }) {
  const [stepsData, setStepsData] = useState(steps);
  const [index, setIndex] = useState(0);

  const [activeComponent, setActiveComponent] = useState(
    stepsData[index].component
  );
  const [activeConfig, setActiveConfig] = useState(stepsData[index].config);
  const [buttonConfig, setButtonConfig] = useState(
    stepsData[index].config.buttons
  );

  const backOnClickHandler = () => {
    if (buttonConfig?.back?.useDefaultOnClick) {
      if (index >= 1) {
        setIndex(index - 1);
      }
    } else {
      buttonConfig.back.onClick();
    }
  };

  const nextOnClickHandler = () => {
    if (buttonConfig?.next?.useDefaultOnClick) {
      if (index < steps.length - 1) {
        setIndex(index + 1);
      }
    } else {
      buttonConfig.next.onClick();
    }
  };

  /**
   * Everytime users navigates update the activeComponent & config
   */
  useEffect(() => {
    setActiveComponent(stepsData[index].component);
    setActiveConfig(stepsData[index].config);
    setButtonConfig(stepsData[index].config.buttons);
  }, [index]);

  const bars = steps.map((step, i) => {
    const width = `${100 / steps.length}%`;

    return index >= i ? (
      <Bar key={i} width={width} />
    ) : (
      <EmptyBar key={i} width={width} />
    );
  });

  const backButton =
    // This hides the button if index == 0
    index === 0 ? (
      <div></div>
    ) : (
      <Button className="stepper-back-button" onClick={backOnClickHandler}>
        <LeftIcon/> {buttonConfig.back.label ? buttonConfig.back.label : 'Back'}
      </Button>
    );

  return (
    <>
      <StepperHeader>
        <ProgressBarContainer>{bars}</ProgressBarContainer>
      </StepperHeader>

      <StepperBody>
        {/* activeComponent holds the component e.g */}
        {activeComponent}
      </StepperBody>

      <StepperFooter>
        {backButton}
        <Button className="stepper-next-button" onClick={nextOnClickHandler}>
          {buttonConfig.next.label ? buttonConfig.next.label : 'Next'} <RightIcon/>
        </Button>
      </StepperFooter>
    </>
  );
}
