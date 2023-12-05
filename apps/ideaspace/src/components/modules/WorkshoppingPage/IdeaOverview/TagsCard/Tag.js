import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: rgb(255, 153, 102);
  padding: 8px;
`;

export const StyledTag = styled.h6`
  margin: 0px;
  margin-left: 4px;
  margin-right: 4px;
`;

export const Tag = ({ tag }) => {
  return (
    <Wrapper>
      <StyledTag>{tag}</StyledTag>
      <CloseIcon></CloseIcon>
    </Wrapper>
  )
}
