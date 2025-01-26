import RainbowBar from '../../../../../common/RainbowBar';
import CloseIcon from './../../../../../common/Icons/SVG/FilledCross';
import CheckMark from './../../../../../common/Icons/SVG/FilledCharkmark';

/**
 * Header Component
 *
 * Displays the stepper header for an onboarding process, including:
 * - Progress indicators for each step.
 * - A close icon to exit the process.
 * - A rainbow bar for visual separation.
 *
 * Props:
 * - `stepper` (Array): Configuration for all steps, including labels, numbers, and bar sizes.
 * - `activeStepIndex` (Number): The index of the currently active step.
 * - `onClose` (Function): Handler for the close button action.
 * - `isLoading` (Boolean): Whether the component is in a loading state (disables the close button).
 *
 * @param {Object} props - Component props.
 * @return {JSX.Element} The rendered Header component.
 */
function Header({ stepper = [], activeStepIndex, onClose, isLoading }) {
  const lastStepIndex = stepper.length - 1; // Index of the last step

  /**
   * Generates a label element for a step.
   *
   * @param {Object} mappingConfig - Configuration for the current step.
   * @param {Number} mappingIndex - Index of the current step.
   * @return {JSX.Element} The step label element.
   */
  const labelElement = (mappingConfig, mappingIndex) => {
    const isStepComplete = activeStepIndex > mappingIndex; // If the step is completed
    const onActiveStep = activeStepIndex == mappingIndex; // If the step is active
    const onLastStep = activeStepIndex == lastStepIndex; // If the step is the last
    const stepNumber = mappingConfig?.header?.number ?? mappingIndex + 1; // Step number (default to index + 1)
    const stepName = mappingConfig?.header?.name ?? ''; // Step name (default to empty)

    return (
      <div className="flex justify-center relative">
        {/* Circle representing the step */}
        <div
          className={`flex h-8 w-8 justify-center items-center rounded-full ${
            onActiveStep || isStepComplete
              ? 'text-white bg-orange-400' // Active or completed styling
              : 'text-black bg-grayscale-50' // Inactive styling
          }`}
        >
          {isStepComplete || onLastStep ? <CheckMark /> : stepNumber}
        </div>
        {/* Step name label */}
        <div className="w-max absolute -bottom-7 text-sm text-grayscale-100 font-medium">
          {stepName}
        </div>
      </div>
    );
  };

  /**
   * Generates a progress bar element between steps.
   *
   * @param {Object} mappingConfig - Configuration for the current step.
   * @param {Number} mappingIndex - Index of the current step.
   * @param {String} styles - Additional styling for the bar.
   * @return {JSX.Element} The progress bar element.
   */
  const barElement = (mappingConfig, mappingIndex, styles = '') => {
    const width = mappingConfig?.header?.barSize == 's' ? 'w-[50%]' : 'w-full'; // Bar width based on size
    const isStepComplete = activeStepIndex > mappingIndex; // If the step is completed

    return (
      <div
        className={`${width} h-1 ${
          isStepComplete ? 'bg-orange-400' : 'bg-grayscale-50' // Completed or inactive styling
        } ${styles}`}
      ></div>
    );
  };

  /**
   * Combines the label and bar elements for a step.
   *
   * @param {Object} mappingConfig - Configuration for the current step.
   * @param {Number} mappingIndex - Index of the current step.
   * @return {JSX.Element} The combined progress element.
   */
  const getProgressElements = (mappingConfig, mappingIndex) => {
    const nextStepHasNumberLabel =
      stepper[mappingIndex + 1]?.header?.number &&
      !stepper[mappingIndex + 1]?.header?.hideNumber; // Check if the next step has a visible number
    const barStyle = `${nextStepHasNumberLabel ? '' : 'mr-[2px]'}`; // Adjust bar spacing if the next step lacks a number

    if (mappingConfig.header.hideNumber) {
      return barElement(mappingConfig, mappingIndex, barStyle); // Return only the bar if the number is hidden
    } else if (mappingIndex == lastStepIndex) {
      return labelElement(mappingConfig, mappingIndex); // Return only the label for the last step
    } else {
      return (
        <>
          {labelElement(mappingConfig, mappingIndex)}
          {barElement(mappingConfig, mappingIndex, barStyle)}
        </>
      );
    }
  };

  /**
   * Generates the progress status bar with labels and bars.
   *
   * @return {JSX.Element} The progress status bar.
   */
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
      {/* Centered progress status */}
      <div className="flex justify-center h-full">
        {progressStatusElement()}
      </div>
      {/* Close icon */}
      <CloseIcon
        disabled={isLoading} // Disable the close icon if loading
        onClick={onClose} // Trigger the onClose handler
        className="absolute right-5 top-5 cursor-pointer"
      />
      {/* Rainbow separator bar */}
      <RainbowBar />
    </div>
  );
}

export default Header;
