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

import { SocialIcon } from "react-social-icons";
import Prismic from "prismic-reactjs";
import { Image, Date, RichText, Elements } from "prismic-reactjs";

import PageBody from "../../../components/common/PageBody";
import ArticleInfoBar from "./ArticleInfoBar";

import style from "./Blog.module.css";

export default function Blog(props) {
  const authorId = props.authorId;
  const articleId = props.articleId;

  const [prismicRef, setPrismicRef] = React.useState(null);
  const [articles, setArticles] = React.useState([]);

  const fetchPrismicRef = () => {
    // We're using Prisimic as our CDN!
    // First, we need to grab our master ref so we can query our data
    // Yes, it requires 2 queries to actually get data :(
    fetch("https://dev-launchers-site.cdn.prismic.io/api")
      .then(response => {
        return response.json();
      })
      .then(json => {
        setPrismicRef(json.refs[0].ref);
      });
  };
  const fetchArticles = () => {
    fetch(
      "https://dev-launchers-site.cdn.prismic.io/api/v2/documents/search?ref=" +
        prismicRef +
        '&q=%5B%5Bat(document.type%2C+"article")%5D%5D'
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json.results);
        setArticles(json.results);
      });
  };

  // When app loads
  React.useEffect(() => {
    fetchPrismicRef();
  }, []);

  // When we've loaded our prismicRef
  React.useEffect(() => {
    if (!prismicRef) return;
    fetchArticles();
  }, [prismicRef]);

  return (
    <PageBody>
      <br />
      <br />
      {articleId
        ? articles.map(article => {
            if (article.uid == articleId) {
              return (
                <div className={style.articleContainer}>
                  <div className={style.titleArea}>
                    <RichText
                      className={style.articleTitle}
                      render={article.data.title}
                      htmlSerializer={htmlSerializer}
                    />
                  </div>
                  <div className={style.subTitleArea}>
                    <RichText
                      className={style.articleSubTitle}
                      render={article.data.sub_title}
                    />
                  </div>
                  <ArticleInfoBar article={article} />
                  <img
                    className={style.articleIntroImage}
                    src={article.data.intro_image.url}
                  />
                  <div className={style.articleBody}>
                    <RichText
                      render={article.data.body}
                      htmlSerializer={htmlSerializer}
                    />
                  </div>
                  <br />
                  <hr />
                  <br />
                  <ArticleInfoBar article={article} />
                  <br />
                </div>
              );
              //return <div dangerouslySetInnerHTML={{ __html: article.text }} />;
            }
          })
        : articles.map(article => {
            return <div>{article.data.title[0].text}</div>;
          })}
    </PageBody>
  );
}

// -- Function to add unique key to props
const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key });
};
// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
const htmlSerializer = function(type, element, content, children, key) {
  var props = {};
  switch (type) {
    // Add a class to paragraph elements
    case Elements.heading1:
      props = { className: style.articleHeading1 };
      return React.createElement(
        "h1",
        propsWithUniqueKey(props, key),
        children
      );
    case Elements.heading2:
      props = { className: style.articleHeading2 };
      return React.createElement(
        "h2",
        propsWithUniqueKey(props, key),
        children
      );
    case Elements.heading3:
      props = { className: style.articleHeading3 };
      return React.createElement(
        "h3",
        propsWithUniqueKey(props, key),
        children
      );
    case Elements.heading4:
      props = { className: style.articleHeading4 };
      return React.createElement(
        "h4",
        propsWithUniqueKey(props, key),
        children
      );
    case Elements.heading5:
      props = { className: style.articleHeading5 };
      return React.createElement(
        "h5",
        propsWithUniqueKey(props, key),
        children
      );
    case Elements.heading6:
      props = { className: style.articleHeading6 };
      return React.createElement(
        "h6",
        propsWithUniqueKey(props, key),
        children
      );

    // Add a class to paragraph elements
    case Elements.paragraph:
      // CUSTOM LOGIC
      // Check if this might be an iframe....
      if (element.text.indexOf("<iframe") == 0) {
        props = {
          className: style.articleIframe,
          dangerouslySetInnerHTML: { __html: element.text }
        };
        let iframeHolder = React.createElement(
          "div",
          propsWithUniqueKey(props, key)
        );
        return iframeHolder;
      } else {
        props = { className: style.articleParagraph };
        return React.createElement(
          "p",
          propsWithUniqueKey(props, key),
          children
        );
      }

    // Don't wrap images in a <p> tag
    case Elements.image:
      props = {
        className: style.articleImage,
        src: element.url,
        alt: element.alt || ""
      };
      return React.createElement("img", propsWithUniqueKey(props, key));

    // Add a class to hyperlinks
    case Elements.hyperlink:
      const targetAttr = element.data.target
        ? { target: element.data.target }
        : {};
      const relAttr = element.data.target ? { rel: "noopener" } : {};
      props = Object.assign(
        {
          className: style.articleLink,
          href: element.data.url //|| linkResolver(element.data)
        },
        targetAttr,
        relAttr
      );
      return React.createElement("a", propsWithUniqueKey(props, key), children);

    // Return null to stick with the default behavior
    default:
      return null;
  }
};
