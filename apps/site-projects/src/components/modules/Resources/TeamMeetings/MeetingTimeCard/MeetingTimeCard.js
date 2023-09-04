import { StyledMeetingTimeCard, StyledMeetingTimeCardTitle,StyledMeetingTimeCardTime } from "./StyledMeetingTimeCard";

function MeetingTimeCard(props) {
    const { title, meetingLink, meetingTime } = props.meeting;

    return (
        <StyledMeetingTimeCard href={meetingLink} >
            <StyledMeetingTimeCardTitle>{title}</StyledMeetingTimeCardTitle>
            <StyledMeetingTimeCardTime>{meetingTime}</StyledMeetingTimeCardTime>
            <img src="/images/projects/resources/logos/google-drive.svg" alt="google meets" />
        </StyledMeetingTimeCard>
    )
}

export default MeetingTimeCard;