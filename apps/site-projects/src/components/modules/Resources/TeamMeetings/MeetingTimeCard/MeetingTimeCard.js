import { StyledMeetingTimeCard, StyledMeetingTimeCardTitle,StyledMeetingTimeCardTime } from "./StyledMeetingTimeCard";

function MeetingTimeCard(props) {
    const { title, meetingLink, meetingTime } = props.meeting;

    return (
        <StyledMeetingTimeCard href={meetingLink} target="_blank" >
            <StyledMeetingTimeCardTitle>{title}</StyledMeetingTimeCardTitle>
            <StyledMeetingTimeCardTime>{meetingTime}</StyledMeetingTimeCardTime>
            <img src="/images/projects/resources/logos/google-meet.svg" alt="google meets" />
        </StyledMeetingTimeCard>
    )
}

export default MeetingTimeCard;