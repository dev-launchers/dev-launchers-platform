import { useEffect, useState } from "react";
import { StepperHeader, StepperBody, StepperFooter, ProgressBarContainer, ProgressBar} from "./StyledStepper"
import { withTheme } from "styled-components";
import { Button } from "@devlaunchers/components/components/atoms";

const stepsMockData = [
    {
        component: <p>Step 1</p>,
            config: {
                buttons: {
                    next: {
                        label: "Next",
                        useDefaultOnClick: true,
                        onClick: () => { console.log("..some function ") },
                    },
                    back: {
                        label: "Back",
                        useDefaultOnClick: true,
                        onClick: () => { console.log("..some function ")},
                    }
                }
            }
    },
    {
        component:  <p>Step 2</p>,
            config: {
                buttons: {
                    next: {
                        label: "Next",
                        useDefaultOnClick: true,
                        onClick: () => { console.log("..some function ") },
                    },
                    back: {
                        label: "Back",
                        useDefaultOnClick: true,
                        onClick: () => { console.log("..some function ")},
                    }
                }
            }
    },
    {
        component: <p> Step 3</p>,
            config: {
                buttons: {
                    next: {
                        label: "Finish",
                        useDefaultOnClick: false,
                        onClick: () => { Router.push("./users-me") },
                    },
                    back: {
                        label: "Back",
                        useDefaultOnClick: true,
                        onClick: () => { console.log("..some function ")},
                    }
                }
            }
    },
]


export default function Stepper({ steps = stepsMockData }) {
    
    const [stepsData, setStepsData] = useState(steps);
    const [index, setIndex] = useState(0);

    const [activeComponent, setActiveComponent] = useState(stepsData[index].component)
    const [activeConfig, setActiveConfig] = useState(stepsData[index].config)
    
    const [buttonConfig, setButtonConfig ] = useState(stepsData[index].config.buttons)

    const backOnClickHandler = () => {
        // returns the function to execute
        if (buttonConfig.next.useDefaultOnClick) {
            if (index >= 1){
                setIndex(index - 1)
            }
        }
    }

    const nextOnClickHandler = () => {
        // returns the function to execute
        if (buttonConfig.next.useDefaultOnClick) {
            if (index < steps.length-1){
                setIndex(index + 1)
            }
        }

        // return buttonConfig.next.useDefaultOnClick ? () => {setIndex(index + 1)} : buttonConfig.next.onClick; 
    }

    /**
     * Everytime users navigates update the activeComponent & config
     */
    useEffect(() => {
        // console.log(steps, "HAHAH")
        setActiveComponent(stepsData[index].component);
        setActiveConfig(stepsData[index].config);
        setButtonConfig(stepsData[index].config.buttons)
    }, [index]);

    const bars = steps.map((step, i) => {
        const width = `${100/steps.length}%`
        if (index >= i) {
            // return <li key={i}>Bar</li>
            return <ProgressBar key={i} width={width} color={'#234C73'}></ProgressBar>
        } else {
            return <ProgressBar key={i} width={width} color={'#BDBDBD'}></ProgressBar>
        }
    })

    return (
    <>
        <StepperHeader>
            <ProgressBarContainer>
                {bars}
            </ProgressBarContainer>
        </StepperHeader>

        <StepperBody>
        {/* activeComponent holds the component e.g */}
            {activeComponent}
        </StepperBody>

        <StepperFooter>
            <Button onClick = {backOnClickHandler}> {buttonConfig.back.label ? buttonConfig.back.label : "Back"}</Button>
            <Button onClick = {nextOnClickHandler}> {buttonConfig.next.label ? buttonConfig.next.label : "Next"}</Button>
        </StepperFooter>
    </>);
}
    
// NOTE: Each page having its own data, and how the stepper will handle it.

/**
 * 1. Should be able to take an array of components [{component: <PageOne>}, {component: <PageTwo>}].
 * 2. The stepper progress bar should reflect the amount of pages/steps from the array
 * 3. The stepper should start from the first page, or the first item in the array
 * 4. The component in the array should be rendered inside the stepper
 * 5. The stepper should render the component in the array based on index thats controlled by the navigation buttons.
 * 6. The stepper index should never go below 0, or above (array.length -1)
 * */