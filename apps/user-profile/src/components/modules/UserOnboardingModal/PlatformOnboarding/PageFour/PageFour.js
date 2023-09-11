import { Typography } from "@devlaunchers/components/components/atoms";
import RoleCard from "./../../RoleCard";
import { GroupRoleCardsContainer } from '../../RoleCard/StyledRoleCard';
import { PageFourContainer, Header } from './StyledPageFour';

export default function PageThree() {
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
            </GroupRoleCardsContainer>
        </PageFourContainer>
    );
}