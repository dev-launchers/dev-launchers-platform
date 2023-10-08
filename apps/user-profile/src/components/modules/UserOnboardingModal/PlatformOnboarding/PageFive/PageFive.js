import { Typography } from "@devlaunchers/components/components/atoms";
import { PageFiveContainer, Header } from './StyledPageFive';

export default function PageFive() {
    return (
        <PageFiveContainer>
            <Header>
                <Typography className="eyebrow-text" >ABOUT YOU</Typography>
                <Typography type="h3" >Select Your Interests Below</Typography>
                <Typography>We’ll use this to help you find projects that match your needs</Typography>
            </Header>

        </PageFiveContainer>
    );
}