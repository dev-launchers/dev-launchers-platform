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
  const [count, setCount] = useState(0); // number of likes on this idea
  const { userData, isAuthenticated } = useUserDataContext();
  useEffect(() => {
    loadDataOnlyOnce(); // query database
  }, []);

  const loadDataOnlyOnce = async () => {
    // use get likes from agent
    const params = '?populate=deep&filters[objectId][$eq]=' + ideaId.toString();
    const data = cleanDataList(
      await agent.Likes.get(new URLSearchParams(params))
    );
    setCount(data.length);
    // check if user has already liked idea
    for (let i = 0; i < data.length; i++) {
      if (data[i].users_permissions_user.data.id == userData.id) {
        setUpvoted(true);
      }
    }
  };

  // a function to keep track of the number of upvotes and when the user clicks the upvote button for this idea
  async function handleUpvoteClick(event) {
    if (upvoted) {
      // if there's a like object corresponding to this user and idea, delete it
      const params =
        '?populate=deep&filters[objectId][$eq]=' +
        ideaId.toString() +
        '&filters[users_permissions_user][id][$eq]=' +
        userData.id.toString();
      const data = cleanDataList(
        await agent.Likes.get(new URLSearchParams(params))
      );
      try {
        await agent.Likes.delete(data[0].id);
        setUpvoted(false);
        setCount(count - 1);
      } catch (error) {
        //console.log('failed to delete vote', error);
      }

      event.preventDefault();

      try {
        props.setHandleTextChange('');
      } catch (error) {
        console.error(error);
      }
    } else {
      var likeData = {
        objectId: ideaId.toString(),
        objectType: 'IdeaCard',
        users_permissions_user: userData.id.toString(),
      };

      try {
        await agent.Likes.post(likeData);
        setUpvoted(true);
        setCount(count + 1);
      } catch (error) {
        console.error(error);
      }

      event.preventDefault();

      try {
        props.setHandleTextChange('');
      } catch (error) {
        console.error(error);
      }
    }
  }

  const upvoteButton =
    userData?.id > 0 ? (
      <UpvoteButton
        onclick={handleUpvoteClick}
        selected={upvoted}
        text={
          upvoted
            ? 'Upvoted | ' + count.toString()
            : 'Upvote | ' + count.toString()
        }
      />
    ) : null;

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
        {upvoteButton}
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
