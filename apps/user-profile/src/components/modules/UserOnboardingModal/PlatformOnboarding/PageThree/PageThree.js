import { Typography } from "@devlaunchers/components/components/atoms";
import RoleCard from "../../RoleCard/RoleCard";
import { GroupRoleCardsContainer } from '../../RoleCard/StyledRoleCard';
import { PageThreeContainer, Header } from './StyledPageThree';

export default function PageThree() {
	return (
		<PageThreeContainer>
			<Header>
				<Typography type="p" style={{ color: "black" }}>ABOUT YOU</Typography>
				<Typography type="h3">First off, What Role Best Describes You?</Typography>
				<Typography type="p" style={{ color: "black" }}>We'll use this to recommend open source projects for you to work on.</Typography>
			</Header>


			<GroupRoleCardsContainer>
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
			</GroupRoleCardsContainer>
		</PageThreeContainer>

	);
}