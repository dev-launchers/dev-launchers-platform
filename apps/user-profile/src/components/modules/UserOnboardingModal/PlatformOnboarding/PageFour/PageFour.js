import { Typography } from "@devlaunchers/components/components/atoms";
import RoleCard from "./../../RoleCard";
import { PageContainer, RoleCards } from "../StyledPageContainer";
import { ThemeProvider } from "styled-components";
import { StepHeader } from './StyledPageFour';

export default function PageThree(){
    return (
        <PageContainer>
						<StepHeader> 
							<Typography type="p" style={{color: "black"}}>ABOUT YOU</Typography>
						</StepHeader>

            <Typography type="h3">What Is Your Experience Level in This Role?</Typography>
						<Typography type="p" style={{color: "black"}}>We’ll use this to find you the right fit when pairing with other members</Typography>

            <RoleCards>
                <RoleCard
                    iconImg="Junior"
                    title="Junior"
                    subtitle="You have about 0-2 years of experience"
                />
                <RoleCard
                    iconImg="Mid-Level"
                    title="Mid-Level"
                    subtitle="You have about 3-5 years of experience"
                />
                <RoleCard
                    iconImg="Senior"
                    title="Senior"
                    subtitle="You have 5+ years in the industry"
                />
            </RoleCards>               
        </PageContainer>
    );
}