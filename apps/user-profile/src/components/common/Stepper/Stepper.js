import { useEffect, useState } from 'react';
import {
  StepperHeader,
  StepperBody,
  StepperFooter,
  ProgressBarContainer,
  Bar, 
  StepNumber,
  StepName,
  StepperContainer,
  CloseIcon
} from './StyledStepper';
import { Button, Typography } from '@devlaunchers/components/components/atoms';
import chevronLeftImg from './../../../images/btn-chevron-left.svg';
import chevronRightImg from './../../../images/btn-chevron-right.svg';
import checkImg from './../../../images/Onboarding/stepper/check.svg';
import RainbowBar from '../RainbowBar';
import { useOnboardingDataContext } from '../../../context/OnboardingDataContext.js'
// import onboardingActions from '../../../state/actions';

// import  { SHOW_PLATFORM_ONBOARDING_MODAL } from '../../../state/actions/onboardingActions'
import * as onboardingActions from '../../../state/actions/onboardingActions';


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
  const [nextBtnDisability, setNextButtonDisability] = useState(buttonConfig.next.disabled)
  const lastStepIndex = stepsData.length - 1;
  const { onboardingData, dispatch } = useOnboardingDataContext();
  



  // TODO finish functionality for this part
  // function initialiseStepMetaData() {
  //   const metaData = {};
  //   console.log("INTIALISING", stepsMetaData);
  //   stepsData.forEach((steps, index) => {
  //     // index is the step
  //     metaData[index] = {
  //       hasLandedOnStepCount: 0
  //     }
  //   });

  //   return metaData;
  // }

  // TODO finish functionality for this part
  // const updateLandedOnStepCount = () => {
  //   const newMetaData = { ...stepsMetaData, [index]: { hasLandedOnStepCount: stepsMetaData[index].hasLandedOnStepCount++ } };
  //   newMetaData[index].hasLandedOnStepCount = newMetaData[index].hasLandedOnStepCount++;
  //   setStepsMetaData(newMetaData);
  // }

  const updateConfigs = () => {
    setActiveComponent(stepsData[index].component);
    setButtonConfig(stepsData[index].config.buttons);
    setNextButtonDisability(stepsData[index].config.buttons.next.disabled != undefined ?
      stepsData[index].config.buttons.next.disabled : false);
  };

  const showClosingModal = () => {
    console.log("actions", onboardingActions);
    dispatch({ type: onboardingActions.SHOW_CLOSING_MODAL });
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
    if (stepsData[index].config.buttons.next.delayEnable != undefined) {
      let timeoutId = setTimeout(() => {
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
        <div>
          <StepperHeader>

            <ProgressBarContainer>
            
              {stepTracker}
            </ProgressBarContainer>
            <CloseIcon>
            <Button onClick={showClosingModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g id="Group 865">
                        <path id="Vector" d="M12.6451 14.0026C12.4707 14.0031 12.2984 13.9701 12.1409 13.9061C11.9834 13.842 11.8446 13.7486 11.7347 13.6326L6.09754 7.63256C5.92588 7.45363 5.83203 7.22919 5.83203 6.99756C5.83203 6.76594 5.92588 6.5415 6.09754 6.36256L11.9331 0.362565C12.1312 0.158348 12.4159 0.0299235 12.7245 0.00554376C13.0332 -0.018836 13.3404 0.0628259 13.5788 0.232564C13.8171 0.402303 13.967 0.646214 13.9955 0.910641C14.0239 1.17507 13.9286 1.43835 13.7305 1.64256L8.51348 7.00256L13.5554 12.3626C13.6982 12.5093 13.7888 12.6881 13.8167 12.8776C13.8446 13.0672 13.8085 13.2596 13.7127 13.4321C13.6169 13.6047 13.4655 13.7501 13.2763 13.8512C13.0871 13.9523 12.868 14.0048 12.6451 14.0026Z" fill="#1C1C1C"/>
                        <path id="Vector_2" d="M1.35541 5.95712e-05C1.52977 -0.000448724 1.70205 0.0325236 1.85958 0.0965524C2.01712 0.160581 2.15591 0.25404 2.26576 0.37006L7.90295 6.37006C8.07461 6.54899 8.16846 6.77344 8.16846 7.00506C8.16846 7.23669 8.07461 7.46113 7.90295 7.64006L2.06735 13.6401C1.86924 13.8443 1.58457 13.9727 1.27595 13.9971C0.967335 14.0215 0.660055 13.9398 0.421709 13.7701C0.183363 13.6003 0.0334778 13.3564 0.0050231 13.092C-0.0234307 12.8276 0.0718786 12.5643 0.269983 12.3601L5.48701 7.00006L0.445053 1.64006C0.302334 1.49327 0.211676 1.31453 0.183805 1.12499C0.155935 0.935437 0.192019 0.743012 0.287788 0.570485C0.383557 0.397957 0.535003 0.252546 0.724205 0.151455C0.913407 0.0503649 1.13245 -0.00217204 1.35541 5.95712e-05Z" fill="#1C1C1C"/>
                        </g>
                        </svg>
              </Button>
              </CloseIcon>
          </StepperHeader>
          <RainbowBar />
        </div>


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
