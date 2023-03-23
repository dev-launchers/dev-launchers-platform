import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
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
} from './StyledIdeaCard'

export const IdeaCard = ({ ideaImage, ideaName, ideaTagLine }) => {
  return (
    <StyledCard>
      <TopView>
        <LeftView>
          {
            ideaImage ? <img src={ideaImage}/> : 
            <StyledDiv>
            </StyledDiv>
          }
          
        </LeftView>
        <RightView>
          <IdeaName>
            {ideaName}
          </IdeaName>
          <IdeaTagLine>
            {ideaTagLine}
          </IdeaTagLine>
        </RightView>
      </TopView>

      <BottomView>
        <Button>
          <BookmarkBorderOutlinedIcon />
          <StyledText>Save</StyledText>
        </Button>
        <Button>
          <ShareOutlinedIcon />
          <StyledText>Share</StyledText>
        </Button>
        <Button>
          <FavoriteBorderOutlinedIcon />
          <StyledText>Like</StyledText>
        </Button>
      </BottomView>
    </StyledCard>
  );
};
