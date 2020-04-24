import React from "react";

import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon
} from "react-share";

import Prismic from "prismic-reactjs";
import { Image, Date, RichText, Elements } from "prismic-reactjs";

import style from "./ArticleInfoBar.module.css";

export default function ArticleInfoBar(props) {
  const article = props.article;

  return (
    <div className={style.articleInfoArea}>
      <div className={style.infoBlurb}>
        <div
          style={{
            position: "relative",
            width: "10vh",
            height: "10vh",
            borderRadius: "50%",
            overflow: "hidden"
          }}
        >
          <img
            src={article.data.author_image.url}
            style={{
              display: "inline",
              margin: "0 auto",
              height: "100%",
              width: "auto"
            }}
          />
        </div>
        <div style={{ width: "50%", paddingLeft: "5%" }}>
          {article.data.author}
          <br />
          {article.data.date}
        </div>
      </div>
      <div className={style.socialIconsArea}>
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
      </div>
    </div>
  );
}
