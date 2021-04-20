import Styled from "styled-components";

export const Wrapper = Styled.div`
  grid-area: WeekCalendar;
  text-align: center;
`;

export const CalendarContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  background: bisque;
`;

export const WeekCalendar = Styled.div`
  display: grid;
  gap: 15px;
  grid-template-areas:
    "Sunday"
    "Monday"
    "Tuesday"
    "Wednesday"
    "Thursday"
    "Friday"
    "Saturday";
`;
export const Title = styled.span`
  grid-row: 1;
  align-self: end;
`;
