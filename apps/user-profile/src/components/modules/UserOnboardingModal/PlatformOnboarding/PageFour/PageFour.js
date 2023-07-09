import { Typography } from "@devlaunchers/components/components/atoms";
import RoleCard from "./RoleCard/RoleCard.js";
import { PageFourContainer, FourRoleCards } from "./StyledPageFour.js";

export default function PageThree(){
    return (
        <PageFourContainer>
            <Typography type="h4">What is your experience level in this role?</Typography>
            <FourRoleCards>
                <RoleCard
                    iconImg="New"
                    title="Junior"
                    subtitle="You have about 0-2 years of experience"
                    theme="theme1"
                />
                <RoleCard
                    iconImg="Mid"
                    title="Mid-Level"
                    subtitle="You have about 3-5 years of experience"
                    theme="theme2"
                />
                <RoleCard
                    iconImg="Senior"
                    title="Senior"
                    subtitle="You have 5+ years in the industry"
                    theme="theme3"
                />
            </FourRoleCards>               
        </PageFourContainer>
    );
}