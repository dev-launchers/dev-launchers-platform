import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import {
  StyledCard,
  TopView,
  LeftView,
  RightView,
  StyledDiv,
  IdeaName,
  IdeaTagLine,
  BottomView,
  Button,
  StyledText,
} from './StyledIdeaCard';

export const IdeaCard = ({ ideaImage, ideaName, ideaTagLine }) => {
  return (
    <StyledCard>
      <TopView>
        <LeftView>
          {ideaImage ? <img src={ideaImage} /> : <StyledDiv></StyledDiv>}
        </LeftView>
        <RightView>
          <IdeaName>{ideaName}</IdeaName>
          <IdeaTagLine>{ideaTagLine}</IdeaTagLine>
        </RightView>
      </TopView>

      <BottomView>
        <Button>
          <BookmarkBorderOutlinedIcon />
          <StyledText>FOLLOW</StyledText>
        </Button>
        <Button>
          <StarBorderOutlinedIcon />
          <StyledText>UPVOTE</StyledText>
        </Button>
        <Button>
          <ShareOutlinedIcon />
          <StyledText>SHARE</StyledText>
        </Button>
      </BottomView>
    </StyledCard>
  );
};
