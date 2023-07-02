import { StyledStepperContainer, StyledStepperBody, StyledStepperHeader, StyledStepperHeaderItem } from "./StyledProgressStepper";
import { ProgressStepperSteps, StepperStep } from "./ProgressStepperSteps";
import { useStepper } from "../../../context/ProgressStepperContext";

const ProgressStepper = ({ children }) => {
    const {
        currentStep,
        steps
    } = useStepper();
    return (
        <StyledStepperContainer>
            <StyledStepperHeader>
                {steps.length ?
                    steps.map((step, index) => (
                        <StyledStepperHeaderItem
                            key={step.id}
                            className={currentStep >= index ? 'completed' : ''}
                        >
                            <div className="step-counter">{index + 1}</div>
                            <div className="step-name">{step.name}</div>
                        </StyledStepperHeaderItem>
                    )) : null}
            </StyledStepperHeader>
            <StyledStepperBody>
                {children}
            </StyledStepperBody>
        </StyledStepperContainer>)
};

ProgressStepper.Step = StepperStep;
ProgressStepper.Steps = ProgressStepperSteps;

export default ProgressStepper;