import { IntroductionContainer, Header, Body, Footer } from "./StyledIntroductionModal";
import { Typography } from "@devlaunchers/components/components/atoms";
import Button from '@devlaunchers/components/components/atoms/Button';
import RainbowBar from './../../../common/RainbowBar/RainbowBar';

import { useOnboardingDataContext } from './../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../state/actions';



/**
 * @description This is custom modal for the user onboarding. 
 */
export default function IntroductionModal() {
    const { onboardingData, dispatch } = useOnboardingDataContext();

    const onGetStarted = () => {
        dispatch({ type: onboardingActions.SHOW_PLATFORM_ONBOARDING_MODAL });
    }
    const onSetUpLater = () => {
        dispatch({ type: onboardingActions.HIDE_ALL_MODALS });
    }

    return (
        <>
            <IntroductionContainer>
                <Header>
                    <Typography type="h3" textAlign="center">
                        Welcome to Dev Launchers
                    </Typography>
                    <div>
                        <RainbowBar height="6px" />
                    </div>
                </Header>
                <Body>
                    <Typography type="p">
                        We'll introduce you to Dev Launchers and set up your profile for team collaboration.
                    </Typography>
                    <Typography type="p">
                        Rest assured, we'll guide you through each step of the process.
                    </Typography>
                </Body>
                <Footer>
                    <Button buttonType="primary" buttonSize="xl" onClick={onGetStarted}>
                        GET STARTED (TAKES 2-5 MINUTES)
                    </Button>

                    <Button buttonType="alternative" buttonSize="xl" onClick={onSetUpLater}>
                        SET UP LATER
                    </Button>
                </Footer>
            </IntroductionContainer>
        </>
    );
}

