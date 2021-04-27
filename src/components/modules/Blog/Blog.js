import React, { Children } from "react";

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

import {
  ArticleHeading1,
  ArticleHeading2,
  ArticleHeading3,
  ArticleHeading4,
  ArticleContainer,
  TitleArea,
  SubTitleArea,
  ArticleIntroImage,
  ArticleBody,
  ArticleParagraph,
  ArticleIframe,
  ArticleImage,
  ArticleLink
} from "./StyledBlog.js";

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

  // When we've loaded our articles
  React.useEffect(() => {
    articles.map(article => {
      if (article.uid == articleId) {
        document.title = article.data.title[0].text;
      }
    });
  }, [articles]);

  return (
    <PageBody>
      <br />
      <br />
      {articleId
        ? articles.map(article => {
            if (article.uid == articleId) {
              return (
                <ArticleContainer>
                  <TitleArea>
                    <RichText
                      render={article.data.title}
                      htmlSerializer={htmlSerializer}
                    />
                  </TitleArea>
                  <SubTitleArea>
                    <RichText render={article.data.sub_title} />
                  </SubTitleArea>
                  <ArticleInfoBar article={article} />
                  <ArticleIntroImage src={article.data.intro_image.url} />
                  <ArticleBody>
                    <RichText
                      render={article.data.body}
                      htmlSerializer={htmlSerializer}
                    />
                  </ArticleBody>
                  <br />
                  <hr />
                  <br />
                  <ArticleInfoBar article={article} />
                  <br />
                </ArticleContainer>
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
      props = {};
      return (
        <ArticleHeading1 {...propsWithUniqueKey(props, key)}>
          {children}
        </ArticleHeading1>
      );
    case Elements.heading2:
      props = {};
      return (
        <ArticleHeading2 {...propsWithUniqueKey(props, key)}>
          {children}
        </ArticleHeading2>
      );
    case Elements.heading3:
      props = {};
      return (
        <ArticleHeading3 {...propsWithUniqueKey(props, key)}>
          {children}
        </ArticleHeading3>
      );
    case Elements.heading4:
      props = {};
      return (
        <ArticleHeading4 {...propsWithUniqueKey(props, key)}>
          {children}
        </ArticleHeading4>
      );
    case Elements.heading5:
      props = {};
      return React.createElement(
        "h5",
        propsWithUniqueKey(props, key),
        children
      );
    case Elements.heading6:
      props = {};
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
          dangerouslySetInnerHTML: { __html: element.text }
        };
        let iframeHolder = (
          <ArticleIframe {...propsWithUniqueKey(props, key)} />
        );
        return iframeHolder;
      } else {
        props = {};
        return (
          <ArticleParagraph {...propsWithUniqueKey(props, key)}>
            {children}
          </ArticleParagraph>
        );
      }

    // Don't wrap images in a <p> tag
    case Elements.image:
      props = {
        src: element.url,
        alt: element.alt || ""
      };
      return <ArticleImage {...propsWithUniqueKey(props, key)} />;

    // Add a class to hyperlinks
    case Elements.hyperlink:
      const targetAttr = element.data.target
        ? { target: element.data.target }
        : {};
      const relAttr = element.data.target ? { rel: "noopener" } : {};
      props = Object.assign(
        {
          href: element.data.url //|| linkResolver(element.data)
        },
        targetAttr,
        relAttr
      );
      return (
        <ArticleLink {...propsWithUniqueKey(props, key)}>
          {children}
        </ArticleLink>
      );

    // Return null to stick with the default behavior
    default:
      return null;
  }
};
