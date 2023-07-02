import React, { createContext, useContext, useReducer, useCallback } from 'react'

export const StepperContext = createContext()

const reducer = (state = defaultStepperState, action) => {
    const { currentStep, steps } = state;
    const { type, payload } = action;
    switch (type) {
        case SET_STEPS:
            return {
                ...state,
                steps: payload.steps
            };
        case INCREMENT_CURRENT_STEP:
            return {
                ...state,
                currentStep:
                    currentStep < steps.length - 1
                        ? currentStep + 1
                        : currentStep
            };
        case DECREMENT_CURRENT_STEP:
            return {
                ...state,
                currentStep:
                    currentStep > 0
                        ? currentStep - 1
                        : currentStep
            };

        default:
            return state;
    }
};

const defaultStepperState = {
    steps: [],
    currentStep: 0
};

const SET_STEPS = 'SET_STEPS';
const INCREMENT_CURRENT_STEP = 'INCREMENT_CURRENT_STEP';
const DECREMENT_CURRENT_STEP = 'DECREMENT_CURRENT_STEP';

export const StepperProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultStepperState);

    return (
        <StepperContext.Provider value={[state, dispatch]}>
            {children}
        </StepperContext.Provider>
    );
};

export const useStepper = () => {
    const [state, dispatch] = useContext(StepperContext);
    const { currentStep, steps } = state;

    const incrementCurrentStep = useCallback(() => {
        dispatch({
            type: INCREMENT_CURRENT_STEP
        });
    }, [dispatch]);

    const decrementCurrentStep = useCallback(() => {
        dispatch({
            type: DECREMENT_CURRENT_STEP
        });
    }, [dispatch]);

    const setSteps = useCallback(steps => dispatch({ type: SET_STEPS, payload: { steps } }), [dispatch]);


    return {
        incrementCurrentStep,
        decrementCurrentStep,
        setSteps,
        currentStep,
        steps
    }
}