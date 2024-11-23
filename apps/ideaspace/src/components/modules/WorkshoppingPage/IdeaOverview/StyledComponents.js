import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 688px;
  gap: 12px;
  padding-bottom: 32px;
  border-bottom: 1px solid black;
  border-color: #f0edee;
`;

export const RightWrapper = styled.div`
  // tailind and css were conflicting so removed this for now
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Make it flexible to fill the remaining space */
  height: 100%;
`;

export const TopView = styled.div`
  // tailind and css were conflicting so removed this for now
`;

// The line separator
export const Separator = styled.div`
  width: 1px; /* Thickness of the line */
  background-color: #f0edee; /* Line color (adjust as needed) */
  height: auto; /* Ensures it stretches to match its container's height */
`;
