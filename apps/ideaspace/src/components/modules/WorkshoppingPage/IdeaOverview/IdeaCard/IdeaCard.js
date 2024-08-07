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
import UpvoteButton from '../../../../../components/common/Upvote/UpvoteButton';
import { useState, useEffect } from 'react';
import { useUserDataContext } from '@devlaunchers/components/src/context/UserDataContext.js';
import { agent } from '@devlaunchers/utility';
import { cleanDataList } from '../../../../../utils/StrapiHelper';

export const IdeaCard = ({ ideaImage, ideaId, ideaName, ideaTagLine }) => {
  const [upvoted, setUpvoted] = useState(false);
  const [state, setState] = useState(false);
  const { userData, isAuthenticated } = useUserDataContext();
  useEffect(() => {
    loadDataOnlyOnce(); // query database
  }, []);

  const loadDataOnlyOnce = async () => {
    // use get likes from agent
    console.log(userData);
    const params = '?populate=deep&filters[objectId][$eq]=' + ideaId;
    console.log('params:', params);
    const data = cleanDataList(
      await agent.Likes.get(new URLSearchParams(params))
    );
    console.log(data);
  };

  // a function to keep track of the number of upvotes and when the user clicks the upvote button for this idea
  async function handleUpvoteClick(event) {
    if (upvoted) {
      // if there's a like object corresponding to this user and idea, delete it
      const params =
        '?populate=deep&filters[objectId][$eq]=' +
        ideaId +
        '&filters[userId][$eq]=' +
        userData.id;
      console.log(params);
      const data = cleanDataList(
        await agent.Likes.get(new URLSearchParams(params))
      );
      console.log(data);
      try {
        const res = await agent.Likes.delete();
        console.log('res:', res);
      } catch (error) {
        console.error(error);
      }

      event.preventDefault();

      try {
        props.setHandleTextChange('');
      } catch (error) {
        console.error(error);
      }

      // Refresh the page so that the new number of upvotes is displayed
      setState(true);

      setUpvoted(false);
    } else {
      // create a like object using the Like collection from the strapiv4 repo, storing the user ID, the idea ID, and the "IdeaCard" object type
      var likeData = {
        objectId: ideaId.toString(),
        objectType: 'IdeaCard',
        users_permission_user: userData.userId,
      };

      try {
        const res = await agent.Likes.post(likeData);
        console.log('res:', res);
      } catch (error) {
        console.error(error);
      }

      event.preventDefault();

      try {
        props.setHandleTextChange('');
      } catch (error) {
        console.error(error);
      }

      // Refresh the page so that the new number of upvotes is displayed
      setState(true);

      setUpvoted(true);
    }
  }

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
        {/* <Button>
          <BookmarkBorderOutlinedIcon />
          <StyledText>FOLLOW</StyledText>
        </Button> */}
        <UpvoteButton
          onclick={handleUpvoteClick}
          selected={upvoted}
          text={upvoted ? 'Upvoted | 1' : 'Upvote | 0'}
        />
        {/* <Button onClick={handleUpvoteClick}>
          <StarBorderOutlinedIcon />
          <StyledText>UPVOTE</StyledText>
        </Button> */}
        {/* <Button>
          <ShareOutlinedIcon />
          <StyledText>SHARE</StyledText>
        </Button> */}
      </BottomView>
    </StyledCard>
  );
};
