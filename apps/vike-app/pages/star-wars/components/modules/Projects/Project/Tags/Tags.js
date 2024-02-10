import React from "react";
import { Wrapper, Tag } from "./StyledTags";

const Tags = ({ tags }) => {
  if (!Array.isArray(tags) || tags.length <= 0) {
    return null;
  }
  return (
    <Wrapper>
      {tags?.map((tag) => (
        <Tag key={tag.id}> {tag.interest} </Tag>
      ))}
    </Wrapper>
  );
};
export default Tags;
