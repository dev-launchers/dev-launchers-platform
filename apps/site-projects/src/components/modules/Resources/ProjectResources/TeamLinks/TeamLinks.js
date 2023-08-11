import ResourceCard from "./ResourceCard";
import { ResourceCardsContainer } from "./StyledTeamLinks";
  
function TeamLinks({ selectedCard }) {
    return (
        <div>
            <h3>{selectedCard ? selectedCard.title : "None project available"}</h3>
            <ResourceCardsContainer>
                {
                    linksList.map((resource,i)=> <ResourceCard key={i} resource={resource} />)
                }
            </ResourceCardsContainer>
        </div>
    )
}

export default TeamLinks;

const linksList = [
    {
        img: "figma.svg",
        title: "project files",
        guideTitle : "figma",
        guideLink : "https://creativemarket.com/blog/figma-guide"
    },
    {
        img: "figma.svg",
        title: "design system",
        guideTitle : "figma",
        guideLink : ""
    },
    {
        img: "google-drive.svg",
        title: "project files",
        guideTitle : "google drive",
        guideLink : "https://www.androidauthority.com/how-to-use-google-drive-860193/"
    },
    {
        img: "discord.svg",
        title: "discord",
        guideTitle : "discord",
        guideLink : "https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord"
    },
    {
        img: "github.svg",
        title: "github",
        guideTitle : "gitub",
        guideLink : "https://docs.github.com/en/get-started/quickstart/hello-world"
    },
    {
        img: "zenhub.svg",
        title: "zenhub",
        guideTitle : "zenhub",
        guideLink : "https://medium.com/chingu/zenhub-101-the-essential-guide-da46ce7aff9d"
    },
];
