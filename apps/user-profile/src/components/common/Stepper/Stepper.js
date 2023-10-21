import { useEffect, useState } from 'react';
import {
  StepperHeader,
  StepperBody,
  StepperFooter,
  ProgressBarContainer,
  Bar,
  StepNumber,
  StepName,
  StepperContainer
} from './StyledStepper';
import { Button, Typography } from '@devlaunchers/components/components/atoms';
import chevronLeftImg from './../../../images/btn-chevron-left.svg';
import chevronRightImg from './../../../images/btn-chevron-right.svg';
import checkImg from './../../../images/Onboarding/stepper/check.svg';

const stepsMockData = [
  {
    component: <p>Step 1</p>,
    label: 'Step 3',
    config: {
      buttons: {
        next: {
          label: 'Next',
        },
        back: {
          label: 'Back',
        },
      },
    },
  },
  {
    component: <p>Step 2</p>,
    label: 'Step 2',
    config: {
      buttons: {
        next: {
          label: 'Next',
          onClick: () => {
            console.log('..some function ');
          },
        },
        back: {
          label: 'Back',
        },
      },
    },
  },
  {
    component: <p> Step 3</p>,
    label: 'Step 2',
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
        },
      },
    },
  },
];

/**
 * @description This is a stepper component that is used for the user onboarding
 */
export default function Stepper({ steps = stepsMockData, startIndex = 0 }) {
  const [stepsData, setStepsData] = useState(steps);
  const [index, setIndex] = useState(startIndex);
  const [activeComponent, setActiveComponent] = useState(stepsData[index].component);
  const [buttonConfig, setButtonConfig] = useState(stepsData[index].config.buttons);
  // This doesn't work but if you pass {buttonConfig.next.disabled} directly to the disable attribute in Button component it
  const [nextBtnDisability, setNextButtonDisability] = useState(buttonConfig.next.disabled)

  const lastStepIndex = stepsData.length - 1;

  const updateConfigs =  () => {
    setActiveComponent( stepsData[index].component );
    setButtonConfig( stepsData[index].config.buttons );
    setNextButtonDisability( stepsData[index].config.buttons.next.disabled != undefined ? 
         stepsData[index].config.buttons.next.disabled : false);
  };

  /**
   * Everytime users navigates update the activeComponent & config
   */
  useEffect(() => {
    stepsData[index]?.skip == true && setIndex(index + 1);
    updateConfigs();
    const timeoutId = enableNextButton();
    return () => clearTimeout(timeoutId);
  }, [index]);

  const enableNextButton = () => {
    if ( stepsData[index].config.buttons.next.delayEnable != undefined ) {
      let timeoutId = setTimeout( () => {
        setNextButtonDisability(false);
      }, stepsData[index].config.buttons.next.delayEnable);
     return timeoutId;
   }
  }

  const backOnClickHandler = () => {
    const hasSetCustomFunction = buttonConfig?.back?.onClick ? true : false;
    if (hasSetCustomFunction) {
      buttonConfig.back.onClick();
    } else {
      index >= 1 && setIndex(index - 1);
    }
  };

  const nextOnClickHandler = () => {
    const hasSetCustomFunction = buttonConfig?.next?.onClick ? true : false;
    if (hasSetCustomFunction) {
      buttonConfig.next.onClick();
    } else {
      index >= 1 && setIndex(index + 1);
    }
  };

  const showBackButton = () => {
    const backButtonHtml =
      <Button buttonType="alternative" buttonSize="xl" onClick={backOnClickHandler} className='stepper-btn-icon-text back-button'>
        {buttonConfig.back.hideIcons ? null : <img src={chevronLeftImg} />}
        {buttonConfig.back.label ? buttonConfig.back.label : 'Back'}
      </Button>
    // This hides the button if index == 0
    return index === 0 || buttonConfig.back.hide ? <span></span> : backButtonHtml;
  }

  const showNextButton = () => {
    
    const nextButtonHtml =
      <Button className="next-btn" buttonType="primary" buttonSize="xl" onClick={nextOnClickHandler} disabled={nextBtnDisability}>
      {/*<Button className="next-btn" buttonType="primary" buttonSize="xl" onClick={nextOnClickHandler}> */}
        <div className='stepper-btn-icon-text'>
          {buttonConfig?.next?.label ? buttonConfig.next.label : 'Next'}
          {buttonConfig?.next?.hideIcons ? null : <img src={chevronRightImg} />}
        </div>
      </Button>;
  
    return nextButtonHtml;
  };

  const showStepNumber = (mapIndex) => {
    const stepConfig = stepsData[mapIndex].config;
    const stepCompleted = index > mapIndex;
    const onActivestep = index == mapIndex;
    const onLastStep = index == lastStepIndex;
    const stepNumberHtml =
      <StepNumber className={stepCompleted || onActivestep ? 'completed-step' : 'uncompleted-step'}>
        {stepCompleted || onLastStep ? <img src={checkImg} /> : stepConfig.stepNumber ? stepConfig.stepNumber : mapIndex + 1}
        <StepName>{stepConfig.stepName}</StepName>
      </StepNumber>;
    return stepConfig?.hideStepNumber ? null : stepNumberHtml;
  };

  const showBar = (mapIndex) => {
    const stepConfig = stepsData[mapIndex]?.config;
    const width = (stepConfig.barSize == 's' ? 50 : 100) + '%';
    const nextStepConfig = mapIndex === lastStepIndex ? lastStepIndex : stepsData[mapIndex + 1].config;
    const addSpaceToRight = nextStepConfig.hideStepNumber;
    const stepCompleted = index > mapIndex;

    const barHtml = <Bar key={mapIndex} width={width} spacing={{ addSpaceToRight }} className={stepCompleted ? 'completed-step' : 'uncompleted-step'} />

    return stepConfig?.hideBar ? null : barHtml;
  };


  const stepTracker = stepsData.map((step, mapIndex) => {
    //TODO find way of adding id's to remove key error from console
    const trackerHtml =
      <>
        <div>{showStepNumber(mapIndex)}</div>
        {showBar(mapIndex)}
      </>

    return trackerHtml;
  });

  return (
    <>
      <StepperContainer>
        <StepperHeader>
          <ProgressBarContainer>
            {stepTracker}
          </ProgressBarContainer>
        </StepperHeader>

        <StepperBody>
          {/* activeComponent holds the component e.g */}
          {activeComponent}
        </StepperBody>

        <StepperFooter>
          {showBackButton()}
          {showNextButton()}
        </StepperFooter>
      </StepperContainer>
    </>
  );
}
