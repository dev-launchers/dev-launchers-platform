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
import { Save } from './SaveIdeaCard/Save';
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
        <Save />
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
