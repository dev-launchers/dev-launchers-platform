import { useEffect, useState } from 'react';
import { useOnboardingDataContext } from './../../../../../context/OnboardingDataContext';
import * as onboardingActions from './../../../../../state/actions/onboardingActions';

import Header from './Header';
import Footer from './Footer';
import Modal from '../../../../common/Modal';

/**
 * Stepper Component
 *
 * A reusable stepper component for the user onboarding process. It displays
 * multiple steps in a modal and provides navigation between steps, such as
 * Next and Back buttons, and handles step-specific actions.
 *
 * Props:
 * - `steps` (Array): Configurations for the steps, including components and navigation buttons.
 * - `startingIndex` (Number): Initial step index to display.
 * - `maxHeight`, `maxWidth`, `width`, `height` (String): Dimensions for the modal.
 *
 * @return {JSX.Element} The rendered Stepper component.
 */
export default function Stepper({
  steps = stepsMockData, // Default step configurations
  startingIndex = 0, // Initial step index
  maxHeight = '1000px', // Maximum height of the modal
  maxWidth = '936px', // Maximum width of the modal
  width = '936px', // Width of the modal
  height = '792px', // Height of the modal
}) {
  // Access onboarding context
  const { onboardingData, dispatch } = useOnboardingDataContext();

  // State to store step configurations and current step
  const [stepConfig] = useState(steps);
  const [activeStepIndex, setActiveStepIndex] = useState(startingIndex);
  const [activeStepConfig, setActiveStepConfig] = useState(
    stepConfig[startingIndex]
  );
  const [isLoading, setIsLoading] = useState(false); // State for loading actions
  const [disableNextButton, setDisableNextButton] = useState(false); // Disable next button if required

  /**
   * Updates the configuration when the active step index changes.
   * Automatically skips steps marked as `skip: true`.
   */
  const updateConfigs = () => {
    if (stepConfig[activeStepIndex]?.skip) {
      setActiveStepIndex(activeStepIndex + 1); // Skip the step
    }
    setActiveStepConfig(stepConfig[activeStepIndex]); // Update the current step config
    setIsLoading(false); // Reset loading state
  };

  // Run `updateConfigs` whenever `activeStepIndex` changes
  useEffect(() => {
    updateConfigs();
  }, [activeStepIndex]);

  /**
   * Opens the closing confirmation modal.
   */
  const openCloseModal = () => {
    dispatch({ type: onboardingActions.SHOW_CLOSING_MODAL });
  };

  /**
   * Closes the stepper and hides all onboarding-related modals.
   */
  const closeStepper = () => {
    dispatch({ type: onboardingActions.HIDE_ALL_ONBOARDING_MODALS });
  };

  return (
    <Modal
      maxWidth={maxWidth} // Modal width
      maxHeight={maxHeight} // Modal maximum height
      width={width} // Modal specific width
      className={'w-full bg-grayscale-100 h-full'}
    >
      <div className="flex flex-col gap-10 overflow-hidden">
        {/* Stepper Header */}
        <Header
          stepper={stepConfig} // All step configurations
          activeStepIndex={activeStepIndex} // Current step index
          activeStepConfig={activeStepConfig} // Current step configuration
          onClose={openCloseModal} // Close action
          isLoading={isLoading} // Loading state
        />

        {/* Step Content */}
        <div className="h-[480px] w-full">
          {activeStepConfig?.component ?? null}
          {/* Render current step component */}
        </div>

        {/* Stepper Footer */}
        <Footer
          stepConfig={stepConfig} // Step configurations
          buttonConfig={activeStepConfig?.buttons} // Current step button configuration
          activeStepIndex={activeStepIndex} // Current step index
          setActiveStepIndex={setActiveStepIndex} // Update step index
          setActiveStepConfig={setActiveStepConfig} // Update step configuration
          onSubmit={closeStepper} // Submit action
          isLoading={isLoading} // Loading state
          setIsLoading={setIsLoading} // Update loading state
          context={[onboardingData, dispatch]} // Onboarding context
          disableNextButton={disableNextButton} // Disable next button
          setDisableNextButton={setDisableNextButton} // Update next button state
        />
      </div>
    </Modal>
  );
}

/**
 * Mock data for step configurations
 */
const stepsMockData = [
  {
    component: <p>Step 1</p>, // Component for Step 1
    skip: false, // Whether to skip this step
    header: {
      name: 'Step 1', // Header name
      number: 1, // Step number
      barSize: null, // Progress bar size
      hideNumber: null, // Whether to hide the step number
    },
    buttons: {
      next: {
        label: 'Next', // Label for the next button
        hideIcons: false, // Whether to hide icons
        onClick: null, // Action on click
      },
      back: {
        label: 'Back', // Label for the back button
        hideIcons: false, // Whether to hide icons
        onClick: null, // Action on click
      },
    },
  },
  // Additional steps...
];
