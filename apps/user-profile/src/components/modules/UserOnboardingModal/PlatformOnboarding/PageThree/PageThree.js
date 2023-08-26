import { Typography } from "@devlaunchers/components/components/atoms";
import RoleCard from "./../../RoleCard/RoleCard.js";
import { PageThereeContainer, ThreeRoleCards } from "./StyledPageThree.js";

export default function PageThree(){
    return (
        <PageThereeContainer>
            <Typography type="h4">First off, What Role Best Describes You?</Typography>
            <Typography type="subtitle">We'll use this to recommend open source projects for you to work on.</Typography>
            <ThreeRoleCards>
                <RoleCard
                    iconImg="Developer"
                    title="Developer"
                    subtitle="You’re here to work on our codebase"
                />
                <RoleCard
                    iconImg="UX"
                    title="UX Designer"
                    subtitle="You’re here to make our platform user friendly"
                />
                <RoleCard
                    iconImg="Other"
                    title=" Other"
                    subtitle="You’re a surprise!"
                />
            </ThreeRoleCards>               
        </PageThereeContainer>
    );
}