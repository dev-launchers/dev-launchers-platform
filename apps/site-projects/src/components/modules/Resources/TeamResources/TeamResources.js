import PeopleDisplay from "./PeopleDisplay";
import { TeamResourcesContainer } from "./StyledTeamResources";

function TeamResources({ team }) {
    const allTeam = [...team.leaders,...team.members];

    return (
        <TeamResourcesContainer>
            <legend>Team</legend>
            
            {allTeam ? (
                  allTeam.map((member) => {
                    return (
                        <PeopleDisplay
                            name={member.username}
                            role={member.role}
                        />
                    );
                  })
                ) : (
                  <p>No members available</p>
                )}
        </TeamResourcesContainer>
    )
}

export default TeamResources;
