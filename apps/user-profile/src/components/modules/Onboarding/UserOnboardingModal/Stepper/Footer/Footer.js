import { Button, Typography } from '@devlaunchers/components/components/atoms';
import Chevron from './../../../../../common/Icons/SVG/FilledChevron';
import Loader from './../../../../../common/Loader';

/**
 * Footer Component
 *
 * Provides navigation buttons (Back, Next, Submit) for a stepper component.
 * Handles button-specific actions, including asynchronous operations and dynamic configurations.
 *
 * Props:
 * - `stepConfig` (Array): Configuration for all steps in the stepper.
 * - `buttonConfig` (Object): Configuration for the current step's buttons.
 * - `activeStepIndex` (Number): The index of the currently active step.
 * - `setActiveStepIndex` (Function): Updates the active step index.
 * - `onSubmit` (Function): Action to perform when the final step is submitted.
 * - `isLoading` (Boolean): Indicates if a button action is in progress.
 * - `setIsLoading` (Function): Updates the loading state.
 * - `disableNextButton` (Boolean): Disables the "Next" button if true.
 * - `setDisableNextButton` (Function): Updates the "Next" button's disabled state.
 * - `context` (Array): Additional context passed to button click handlers.
 *
 * @return {JSX.Element} The rendered Footer component.
 */
function Footer({
  stepConfig,
  buttonConfig,
  activeStepIndex,
  setActiveStepIndex,
  onSubmit,
  isLoading,
  setIsLoading,
  disableNextButton,
  setDisableNextButton,
  context,
}) {
  const lastStepIndex = stepConfig.length - 1;

  /**
   * Checks if a given value is a Promise.
   *
   * @param {*} promise - The value to check.
   * @return {Boolean} True if the value is a Promise, otherwise false.
   */
  const isPromise = (promise) => promise instanceof Promise;

  /**
   * Finds the next valid step index, skipping steps marked with `skip: true`.
   *
   * @return {Number} The index of the next step.
   */
  const getNextStepIndex = () => {
    let nextStepIndex = activeStepIndex + 1;
    stepConfig.forEach((config, index) => {
      if (index > activeStepIndex && !config?.skip && !nextStepIndex) {
        nextStepIndex = index;
      }
    });
    return nextStepIndex;
  };

  /**
   * Finds the previous valid step index, skipping steps marked with `skip: true`.
   *
   * @return {Number} The index of the previous step.
   */
  const getPreviousStepIndex = () => {
    let previousStepIndex = activeStepIndex - 1;
    stepConfig.forEach((config, index) => {
      if (index < activeStepIndex && !config?.skip) {
        previousStepIndex = index;
      }
    });
    return previousStepIndex;
  };

  /**
   * Handles the "Back" button click action.
   */
  const backOnClickHandler = () => {
    const hasCustomFunction = Boolean(buttonConfig?.back?.onClick);

    if (hasCustomFunction) {
      const backAction = buttonConfig.back.onClick(...context);

      if (isPromise(backAction)) {
        setIsLoading(true);
        backAction
          .then(() => setActiveStepIndex(getPreviousStepIndex()))
          .catch(() => alert('Error navigating to the previous step.'))
          .finally(() => setIsLoading(false));
      } else {
        backAction();
      }
    } else {
      setActiveStepIndex(getPreviousStepIndex());
    }
  };

  /**
   * Handles the "Next" button click action.
   */
  const nextOnClickHandler = () => {
    const hasCustomFunction = Boolean(buttonConfig?.next?.onClick);

    if (hasCustomFunction) {
      const nextAction = buttonConfig.next.onClick(...context);

      if (isPromise(nextAction)) {
        setIsLoading(true);
        nextAction
          .then(() => setActiveStepIndex(getNextStepIndex()))
          .catch(() => alert('Error navigating to the next step.'))
          .finally(() => setIsLoading(false));
      } else {
        nextAction();
      }
    } else {
      setActiveStepIndex(getNextStepIndex());
    }
  };

  /**
   * Handles the "Submit" button click action.
   */
  const submitOnClickHandler = () => {
    const hasCustomFunction = Boolean(buttonConfig?.submit?.onClick);

    if (hasCustomFunction) {
      const submitAction = buttonConfig.submit.onClick(...context);

      if (isPromise(submitAction)) {
        setIsLoading(true);
        submitAction
          .then(() => onSubmit())
          .catch(() => alert('Error submitting the final step.'))
          .finally(() => setIsLoading(false));
      } else {
        submitAction();
      }
    } else {
      onSubmit();
    }
  };

  /**
   * Renders the "Back" button element.
   */
  const backButtonElement = () => (
    <Button
      buttonType="alternative"
      buttonSize="xl"
      onClick={backOnClickHandler}
      disabled={isLoading || disableNextButton}
    >
      <div className="flex gap-3 items-center">
        {buttonConfig?.back?.hideIcons ? null : <Chevron point="left" />}
        {buttonConfig?.back?.label ?? 'Back'}
      </div>
    </Button>
  );

  /**
   * Renders the "Next" button element.
   */
  const nextButtonElement = () => (
    <Button
      buttonType="primary"
      buttonSize="xl"
      onClick={nextOnClickHandler}
      disabled={isLoading}
    >
      <div className="flex gap-3 items-center">
        {isLoading ? (
          <Loader borderColorClass="border-white" />
        ) : (
          buttonConfig?.next?.label ?? 'Next'
        )}
        {buttonConfig?.next?.hideIcons ? null : (
          <Chevron point="right" colorClass="fill-white" />
        )}
      </div>
    </Button>
  );

  /**
   * Renders the "Submit" button element.
   */
  const submitButtonElement = () => (
    <Button
      buttonType="secondary"
      buttonSize="xl"
      onClick={submitOnClickHandler}
      disabled={isLoading}
    >
      <div className="flex gap-3 items-center">
        {isLoading ? (
          <Loader borderColorClass="border-white" />
        ) : (
          buttonConfig?.submit?.label ?? 'Finish'
        )}
      </div>
    </Button>
  );

  /**
   * Determines if the "Back" button should be hidden.
   */
  const hideBackButton = () => {
    return (
      activeStepIndex === 0 ||
      stepConfig.slice(0, activeStepIndex).every((step) => step.skip)
    );
  };

  /**
   * Determines if the "Next" button should be hidden.
   */
  const hideNextButton = () => {
    return (
      activeStepIndex === lastStepIndex ||
      stepConfig.slice(activeStepIndex + 1).every((step) => step.skip)
    );
  };

  return (
    <div className="flex justify-center mb-14 px-7">
      <div className="flex w-full max-w-[720px] justify-between">
        {hideBackButton() ? <span /> : backButtonElement()}
        {hideNextButton() ? submitButtonElement() : nextButtonElement()}
      </div>
    </div>
  );
}

export default Footer;
