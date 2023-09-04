import MeetingTimeCard from "./MeetingTimeCard";
import { StyledTeamMeetingsContainer } from "./StyledTeamMeetings";
import { newMeetingTimes } from "./meetingTimesData";

function TeamMeetings({ projectId }) {
    return (
        <StyledTeamMeetingsContainer>
            <legend>Team Meetings</legend>
            
            {
                  newMeetingTimes[projectId].map((meeting) => {
                    return (
                        <MeetingTimeCard
                            meeting={meeting}
                        />
                    );
                  })
                }
        </StyledTeamMeetingsContainer>
    )
}

export default TeamMeetings;
