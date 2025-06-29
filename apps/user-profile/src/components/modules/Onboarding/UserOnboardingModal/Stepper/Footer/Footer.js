import { Button, Typography } from '@devlaunchers/components/components/atoms';
import Chevron from './../../../../../common/Icons/SVG/FilledChevron';
import Loader from './../../../../../common/Loader';

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
  const isPromise = (promise) => promise instanceof Promise;

  const getNextStepIndex = () => {
    let nextStepIndex = activeStepIndex + 1;
    let foundNextStep = false;

    stepConfig.forEach((config, index) => {
      if (index > activeStepIndex && !config?.skip && !foundNextStep) {
        nextStepIndex = index;
        foundNextStep = true;
      }
    });
    return nextStepIndex;
  };

  const getPreviousStepIndex = () => {
    let previousStepIndex = activeStepIndex - 1;
    stepConfig.forEach((config, index) => {
      if (index < activeStepIndex && !config?.skip) {
        previousStepIndex = index;
      }
    });
    return previousStepIndex;
  };

  const backOnClickHandler = () => {
    const hasSetCustomFunction = Boolean(buttonConfig?.back?.onClick);
    if (hasSetCustomFunction) {
      if (isPromise(buttonConfig?.back?.onClick(...context))) {
        setIsLoading(true);
        buttonConfig?.submit
          ?.onClick(...context)
          .then(() => {
            setActiveStepIndex(getPreviousStepIndex());
          })
          .catch((error) => {
            alert(
              error ?? 'Having some technical issue, please try again later'
            );
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        buttonConfig?.back?.onClick(...context);
      }
    } else {
      setActiveStepIndex(getPreviousStepIndex());
    }
  };

  const nextOnClickHandler = () => {
    const hasSetCustomFunction = Boolean(buttonConfig?.next?.onClick);
    if (hasSetCustomFunction) {
      if (isPromise(buttonConfig?.next?.onClick(...context))) {
        setIsLoading(true);
        buttonConfig?.submit
          ?.onClick(...context)
          .then(() => {
            setActiveStepIndex(getNextStepIndex());
          })
          .catch((error) => {
            alert(
              error ?? 'Having some technical issue, please try again later'
            );
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        buttonConfig?.next?.onClick(...context);
      }
    } else {
      setActiveStepIndex(getNextStepIndex());
    }
  };

  const submitOnClickHandler = () => {
    const hasSetCustomFunction = Boolean(buttonConfig?.submit?.onClick);
    if (hasSetCustomFunction) {
      if (isPromise(buttonConfig?.submit?.onClick(...context))) {
        setIsLoading(true);
        buttonConfig?.submit
          ?.onClick(...context)
          .then(() => {
            onSubmit();
          })
          .catch((error) => {
            alert(
              error ?? 'Having some technical issue, please try again later'
            );
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        buttonConfig?.submit?.onClick(...context);
      }
    } else {
      onSubmit();
    }
  };

  const backButtonElement = () => {
    return (
      <Button
        type="secondary"
        color="neptune"
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
  };

  const nextButtonElement = () => {
    const label = buttonConfig?.next?.label ?? 'Next';

    return (
      <Button
        type="primary"
        color="neptune"
        buttonSize="xl"
        onClick={nextOnClickHandler}
        disabled={isLoading}
      >
        <div className="flex gap-3 items-center">
          {isLoading ? <Loader borderColorClass="border-white" /> : label}
          {buttonConfig?.next?.hideIcons && isLoading ? null : (
            <Chevron point="right" colorClass="fill-[#1C1C1C]" />
          )}
        </div>
      </Button>
    );
  };

  const submitButtonElement = () => {
    const label = buttonConfig?.submit?.label ?? 'Finish';
    return (
      <Button
        type="submit"
        color="neptune"
        buttonSize="xl"
        onClick={submitOnClickHandler}
        disabled={isLoading}
      >
        <div className="flex gap-3 items-center">
          {isLoading ? <Loader borderColorClass="border-white" /> : label}
        </div>
      </Button>
    );
  };

  const hideBackButton = () => {
    let hide = false;
    let totalPreviousStepsSkipped = 0;
    let totalCompletedSteps = 0;
    stepConfig.forEach((config, index) => {
      if (index < activeStepIndex) {
        if (config?.skip) {
          totalPreviousStepsSkipped++;
        }
        totalCompletedSteps++;
      }
    });

    hide =
      totalPreviousStepsSkipped == totalCompletedSteps || activeStepIndex == 0;
    return hide;
  };

  const hideNextButton = () => {
    let hide = false;
    let totalStepsLeftToSkip = 0;
    let totaStepsLeft = 0;
    stepConfig.forEach((config, index) => {
      if (index > activeStepIndex) {
        if (config?.skip) {
          totalStepsLeftToSkip++;
        }
        totaStepsLeft++;
      }
    });

    hide =
      totalStepsLeftToSkip == totaStepsLeft || activeStepIndex == lastStepIndex;
    return hide;
  };

  return (
    <div className="flex justify-center mb-14 px-7">
      <div className="flex w-full max-w-[720px] justify-between">
        {hideBackButton() ? <span></span> : backButtonElement()}
        {hideNextButton() ? submitButtonElement() : nextButtonElement()}
      </div>
    </div>
  );
}

export default Footer;
