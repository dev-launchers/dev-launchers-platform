import axios from 'axios';
import Like from '../../../../assets/icons/Like';
import Box from '../../../atoms/Box';
import { InteractionButton } from '../StyledCommonComponents';
import type { LikeButtonProps } from '.';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';

const LikeButton = ({ text, filled, disabled }: LikeButtonProps) => {
  const { userData, isAuthenticated } = useUserDataContext();

  const handleSubmit = (e) => {
    console.log("making a request")
    // console.log(`${process.env.NEXT_PUBLIC_STRAPI_URL}/likes`)

    // console.log("User data: " + userData)
    // var data = { author: userData.username, text: props.handleTextChange };

    // const submitResponse = axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/likes`, { withCredentials: true  }).then((response) => {
    //   // we can process the response here... we'll need to filter using the id of the
    //   // current object, and the type of the current object (e.g. Comment or Idea)
    //   // response will be a list of like objects

    //   // TODO: get the number of likes (length of response) and display that next to the filled-in heart icon on the button
    //   // numLikes = len()
      
      
    //   console.log(response)
      
    //   // const getLikes = response.data.map((item) => {
    //   //   return {
    //   //     ...item,
    //   //     mostRecentCommentNumLikes: item[0],
    //   //   };
    //   // });


    // }).catch((e) => console.log("ERROR" + e));
  }

  return (
    <InteractionButton disabled={disabled} onClick={() => handleSubmit()}>
      <Box gap="8px" justifyContent="center" alignItems="center">
        <Like
          fill={filled ? (disabled ? '#474747' : 'black') : ''}
          stroke={disabled ? '#474747' : ''}
        />
        {text}
      </Box>
    </InteractionButton>
  );
};

export default LikeButton;
