import ResourceCard from "./ResourceCard";
import {  ResourcesContainer, TitleResources  } from "./StyledResourceCard";
import moreInfo from '@/public/images/projects/resources/logos/moreInfo.svg';
  
function TeamLinks({ selectedCard }) {
    return (
        <div style={{ width: '100%' }} >
            <h3>{selectedCard ? selectedCard.title : "None project available"}</h3>
            <ResourcesContainer>

            <TitleResources>
            Project Resources
            </TitleResources>
                {
                    linksList.map((resource,i)=> <ResourceCard key={i} resource={resource} />)
                }
            </ResourcesContainer>
        </div>
    )
}

export default TeamLinks;

const linksList = [
    {
        img: "figma.svg",
        title: "project files",
        guideTitle : "figma",
        guideLink : "https://creativemarket.com/blog/figma-guide",
        moreInfo: moreInfo
    },
    {
        img: "figma.svg",
        title: "design system",
        guideTitle : "figma",
        guideLink : "",
        moreInfo: moreInfo
    },
    {
        img: "google-drive.svg",
        title: "project files",
        guideTitle : "google drive",
        guideLink : "https://www.androidauthority.com/how-to-use-google-drive-860193/",
        moreInfo: moreInfo
    },
    {
        img: "discord.svg",
        title: "discord",
        guideTitle : "discord",
        guideLink : "https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord",
        moreInfo: moreInfo
    },
    {
        img: "github.svg",
        title: "github",
        guideTitle : "gitub",
        guideLink : "https://docs.github.com/en/get-started/quickstart/hello-world",
        moreInfo: moreInfo
    },
    {
        img: "zenhub.svg",
        title: "zenhub",
        guideTitle : "zenhub",
        guideLink : "https://medium.com/chingu/zenhub-101-the-essential-guide-da46ce7aff9d",
        moreInfo: moreInfo
    },
];
