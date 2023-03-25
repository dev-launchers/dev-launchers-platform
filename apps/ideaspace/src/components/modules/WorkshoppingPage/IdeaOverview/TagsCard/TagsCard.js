import {
  StyledCard,
  TopView,
  BottomView,
  StyledTag,
} from './StyledComponents';
import { Tag } from './Tag';

export const TagsCard = ({ status }) => {
  return (
    <StyledCard>
      <TopView>
        <StyledTag>Tags</StyledTag>
      </TopView>
      <BottomView>
        <Tag tag={status ? {status} : 'No Tags Listed'} />
      </BottomView>
    </StyledCard>
  );
};
