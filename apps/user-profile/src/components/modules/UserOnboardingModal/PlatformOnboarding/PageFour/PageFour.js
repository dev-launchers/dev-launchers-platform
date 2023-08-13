import { Typography } from "@devlaunchers/components/components/atoms";
import RoleCard from "./../../RoleCard";
import { PageFourContainer, PageFourRoleCards } from "./StyledPageFour.js";
import { ThemeProvider } from "styled-components";

export default function PageThree(){
    return (
        <PageFourContainer>
            <Typography type="h4">What is your experience level in this role?</Typography>
						<Typography type="subtitle">We’ll use this to find you the right fit when pairing with other members</Typography>
            <PageFourRoleCards>
                <RoleCard
                    iconImg="Junior"
                    title="Junior"
                    subtitle="You have about 0-2 years of experience"
                    theme="theme1"
                />
                <RoleCard
                    iconImg="Mid-Level"
                    title="Mid-Level"
                    subtitle="You have about 3-5 years of experience"
                    theme="theme1"
                />
                <RoleCard
                    iconImg="Senior"
                    title="Senior"
                    subtitle="You have 5+ years in the industry"
                    theme="theme1"
                />
            </PageFourRoleCards>               
        </PageFourContainer>
    );
}