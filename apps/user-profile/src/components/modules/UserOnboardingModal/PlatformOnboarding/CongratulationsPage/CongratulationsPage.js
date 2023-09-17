import { Typography } from "@devlaunchers/components/components/atoms";
import LogoMonogram from '../../../../../images/logo-monogram.png'
import {m} from "framer-motion";
import { CongratulationsPageContainer, CongratulationsTitle, CongratulationsBody, AnimationContainer,
    CongratulationsAnamation, CongratulationsShadow, CongratulationsImg } from "./StyledCongratulationsPage";
const bounceTransition = {
    y: {
        yoyo: Infinity,
    }
};

export default function CongratulationsPage({name}){
    return (<>
    <CongratulationsPageContainer>

        <CongratulationsTitle>
            <Typography type="h2">
                Congratulations!
            </Typography>
        </CongratulationsTitle>

        <CongratulationsBody>
            <Typography type="pLarge" >
                Thank you for taking the time to complete onboarding.
                Next, view the ongoing projects and if you find one that you like, contact the project lead.
            </Typography>
        </CongratulationsBody>
        
        <AnimationContainer>
        <CongratulationsAnamation>  
            <CongratulationsImg src={LogoMonogram} alt="你的图像" /> 
            <CongratulationsShadow>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </CongratulationsShadow>
        </CongratulationsAnamation>
        </AnimationContainer>

    </CongratulationsPageContainer>
    </>);
}