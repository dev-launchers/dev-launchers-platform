import { Typography } from "@devlaunchers/components/components/atoms";
import welcomePageOnbaordingLogo from "./../../../../../images/welcomePageOnboardingLogo.png";import { PageOneContainer } from "./StyledPageOne";

export default function PageOne({name}){
    return (<>
    <PageOneContainer>
        <Typography type="h2">
            Welcome {name}
        </Typography>
        <Typography type="p">
            We’re so glad you’re here. Let’s get started on your journey.
        </Typography>
        <img src={welcomePageOnbaordingLogo}></img>
        </PageOneContainer>
    </>);
}