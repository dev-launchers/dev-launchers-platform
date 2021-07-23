import React from "react";
import Image from "next/image";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
} from "react-share";

import {
  ArticleInfoArea,
  InfoBlurb,
  SocialIconsArea,
} from "./StyledArticleInfoBar";

export default function ArticleInfoBar(props) {
  const { article } = props;

  return (
    <ArticleInfoArea>
      <InfoBlurb>
        <div
          style={{
            position: "relative",
            width: "10vh",
            height: "10vh",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src={article.data.author_image.url}
            alt=""
            layout="fill"
            style={{
              display: "inline",
              margin: "0 auto",
              height: "100%",
              width: "auto",
            }}
          />
        </div>
        <div style={{ width: "50%", paddingLeft: "5%" }}>
          {article.data.author}
          <br />
          {article.data.date}
        </div>
      </InfoBlurb>
      <SocialIconsArea>
        <TwitterShareButton url={window.location}>
          <TwitterIcon round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={window.location}>
          <LinkedinIcon round={true} />
        </LinkedinShareButton>
        <FacebookShareButton url={window.location}>
          <FacebookIcon round={true} />
        </FacebookShareButton>
        <RedditShareButton url={window.location}>
          <RedditIcon round={true} />
        </RedditShareButton>
      </SocialIconsArea>
    </ArticleInfoArea>
  );
}
