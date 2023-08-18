import PeopleDisplay from "./PeopleDisplay";
import { TeamResourcesContainer } from "./StyledTeamResources";

function getMembersAndLeaders(team) {
    const allTeam = [];

    team.leaders.forEach(element => {
        allTeam.push(element)
    });

    team.members.forEach(element => {
        allTeam.push(element)
    });

    return allTeam
}

function TeamResources({ team }) {
    const allTeam = getMembersAndLeaders(team)

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