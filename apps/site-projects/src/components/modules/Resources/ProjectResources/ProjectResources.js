import { PrejectResourcesContainer } from "./StyledProjectResources";
import TeamLinks from "./TeamLinks";

function ProjectResources({ selectedCard }) {
    return (
        <PrejectResourcesContainer>
            <TeamLinks selectedCard={selectedCard} />
        </PrejectResourcesContainer>
        );
}

export default ProjectResources;