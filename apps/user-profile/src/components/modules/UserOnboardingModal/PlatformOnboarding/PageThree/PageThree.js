import { Typography } from "@devlaunchers/components/components/atoms";
import RoleCard from "../../RoleCard/RoleCard";
import { PageContainer, RoleCards, StepHeader } from "../StyledPageContainer";

export default function PageThree(){
    return (
			<PageContainer>
				<StepHeader> 
					<Typography type="p" style={{color: "black"}}>ABOUT YOU</Typography>
				</StepHeader>

				<Typography type="h3">First off, What Role Best Describes You?</Typography>
				<Typography type="p" style={{color: "black"}}>We'll use this to recommend open source projects for you to work on.</Typography>

				<RoleCards>
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
								title="Other"
								subtitle="You’re a surprise!"
						/>
				</RoleCards>               
			</PageContainer>

    );
}