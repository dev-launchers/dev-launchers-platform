import { useEffect, useState } from "react";
import React from "react";
import { Button, StyledText } from '../StyledIdeaCard';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { saveIdeaCard } from "./useSaveIdeaCard";

export const Save = () => {
  const [saved, setSaved] = useState(false);
  
  const onIdeaSave = () => {
    setSaved(!saved);
    axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/saves`, data).then((response) => {
      if (response.status === 200) {
        setSaved(true)
      }
    })
  }
  return(
    <Button onClick={onIdeaSave}>
      {
        saved ? <></> : <BookmarkBorderOutlinedIcon />
      }
      <StyledText>Save</StyledText>
    </Button>
  );
};
