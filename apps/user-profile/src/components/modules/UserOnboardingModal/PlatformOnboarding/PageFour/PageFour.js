import { Typography } from "@devlaunchers/components/components/atoms";
import RoleCard from "./../../RoleCard";
import { GroupRoleCardsContainer } from '../../RoleCard/StyledRoleCard';
import { PageFourContainer, Header } from './StyledPageFour';

import { useOnboardingDataContext } from './../../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../../state/actions';


export default function PageThree() {
    
    const { onboardingData: { user }, dispatch } = useOnboardingDataContext();
	const onRoleCardChange = (e) => {
		dispatch({ type: onboardingActions.SET_USERS_EXPERIENCE, data: e.target.value });
		console.log(e.target.value, user);
	}

    return (
        <PageFourContainer>
            <Header>
                <Typography className="eyebrow-text" type="p" style={{ color: "black" }}>ABOUT YOU</Typography>
                <Typography type="h3">What Is Your Experience Level in This Role?</Typography>
                <Typography type="p" style={{ color: "black" }}>We’ll use this to find you the right fit when pairing with other members</Typography>
            </Header>

            <GroupRoleCardsContainer>
                <RoleCard
                    iconImg="Junior"
                    title="Junior"
                    subtitle="You have about 0-2 years of experience"
                    groupName="experience"
                    value="Junior"
					checked={user.selectedExperience == "Junior"}
					onChange={onRoleCardChange}
                />
                <RoleCard
                    iconImg="Mid-Level"
                    title="Mid-Level"
                    subtitle="You have about 3-5 years of experience"
                    groupName="experience"
                    value="Mid"
					checked={user.selectedExperience == "Mid"}
					onChange={onRoleCardChange}
                />
                <RoleCard
                    iconImg="Senior"
                    title="Senior"
                    subtitle="You have 5+ years in the industry"
                    groupName="experience"
                    value="Senior"
					checked={user.selectedExperience == "Senior"}
					onChange={onRoleCardChange}
                />
            </GroupRoleCardsContainer>
        </PageFourContainer>
    );
}