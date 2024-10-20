import RainbowBar from '../../../../../common/RainbowBar';
import CloseIcon from './../../../../../common/Icons/SVG/FilledCross';
import CheckMark from './../../../../../common/Icons/SVG/FilledCharkmark';

/**
 *
 * @param {*} param0
 * @returns
 */
function Header({ stepper = [], activeStepIndex, onClose, isLoading }) {
  const lastStepIndex = stepper.length - 1;

  const getStepNumber = (mappingConfig, mappingIndex) => {
    let stepNumber = mappingIndex + 1;
    let count = 0;
    let checkPoint = 0;
    let previousStepsFromCheckPoint = [];

    // stepper.forEach((step, index) => {
    //   if (index < mappingIndex) {
    //     if (step?.header?.hideNumber) {
    //     }
    //   }
    // });
  };

  const labelElement = (mappingConfig, mappingIndex) => {
    const isStepComplete = activeStepIndex > mappingIndex;
    const onActiveStep = activeStepIndex == mappingIndex;
    const onLastStep = activeStepIndex == lastStepIndex;
    const stepNumber = mappingConfig?.header?.number ?? mappingIndex + 1;
    const stepName = mappingConfig?.header?.name ?? '';

    return (
      <div className="flex justify-center relative">
        <div
          className={`flex h-8 w-8 justify-center items-center rounded-full ${
            onActiveStep || isStepComplete
              ? 'text-white bg-orange-400'
              : 'text-black bg-grayscale-50'
          }`}
        >
          {isStepComplete || onLastStep ? <CheckMark /> : stepNumber}
        </div>
        <div className="w-max absolute -bottom-7 text-sm text-grayscale-100 font-medium">
          {stepName}
        </div>
      </div>
    );
  };

  const barElement = (mappingConfig, mappingIndex, styles = '') => {
    const width = mappingConfig?.header?.barSize == 's' ? 'w-[50%]' : 'w-full';
    const isStepComplete = activeStepIndex > mappingIndex;

    return (
      <div
        className={`${width} h-1  ${
          isStepComplete ? 'bg-orange-400' : 'bg-grayscale-50'
        } ${styles}`}
      ></div>
    );
  };

  const getProgressElements = (mappingConfig, mappingIndex) => {
    const nextStepHasNumberLabel =
      stepper[mappingIndex + 1]?.header?.number &&
      !stepper[mappingIndex + 1]?.header?.hideNumber;
    const barStyle = `${nextStepHasNumberLabel ? '' : 'mr-[2px]'} `;

    if (mappingConfig.header.hideNumber) {
      return barElement(mappingConfig, mappingIndex, barStyle);
    } else if (mappingIndex == lastStepIndex) {
      return labelElement(mappingConfig, mappingIndex);
    } else {
      return (
        <>
          {labelElement(mappingConfig, mappingIndex)}
          {barElement(mappingConfig, mappingIndex, barStyle)}
        </>
      );
    }
  };

  const progressStatusElement = () => {
    return (
      <div className="flex w-full max-w-[423px] items-center -mt-5">
        {stepper.map((step, index) => {
          return getProgressElements(step, index);
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-32 bg-black relative">
      <div className="flex justify-center h-full">
        {progressStatusElement()}
      </div>
      <CloseIcon
        disabled={isLoading}
        onClick={onClose}
        className="absolute right-5 top-5"
      />
      <RainbowBar />
    </div>
  );
}

export default Header;
