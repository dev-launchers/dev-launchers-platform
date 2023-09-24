import { Typography } from "@devlaunchers/components/components/atoms";
import InterestButton from "./../../InterestButton";
import { GroupButtonsContainer } from '../../InterestButton/StyledInterestButton';
import { PageFiveContainer, Header } from './StyledPageFive';

export default function PageThree() {
    return (
        <PageFiveContainer>
            <Header>
                <Typography className="eyebrow-text" type="p" style={{ color: "black" }}>ABOUT YOU</Typography>
                <Typography type="h3">Select Your Interests Below</Typography>
                <Typography type="p" style={{ color: "black" }}>We’ll use this to help you find projects that match your needs</Typography>
            </Header>


            <GroupButtonsContainer>
                <InterestButton
                    title="Blockchain"
                />
                <InterestButton
                    title="Javascript"
                />
                <InterestButton
                    title="Web Design"
                />
                <InterestButton
                    title="UI/UX"
                />
                <InterestButton
                    title="React"
                />
                <InterestButton
                    title="QA"
                />
                <InterestButton
                    title="Web Development"
                />
                <InterestButton
                    title="C/C++/C#"
                />
                <InterestButton
                    title="Discord"
                />
                <InterestButton
                    title="Node.Js"
                />
                <InterestButton
                    title="Strapi"
                />
                <InterestButton
                    title="Agile Development"
                />
                <InterestButton
                    title="Html"
                />
                <InterestButton
                    title="Git"
                />
                <InterestButton
                    title="Frontend Development"
                />
                <InterestButton
                    title="Python"
                />
                <InterestButton
                    title="Data Structures"
                />
                <InterestButton
                    title="Prototyping"
                />
                <InterestButton
                    title="Project Management"
                />
                
            </GroupButtonsContainer>
        </PageFiveContainer>
    );
}