import React from "react";

import Prismic from "prismic-reactjs";
import { Image, Date, RichText, Elements } from "prismic-reactjs";

import PageBody from "../../../components/common/PageBody";

import style from "./DynamicPage.module.css";

export default function DynamicPage(props) {
  const pageId = props.pageId;

  const [prismicRef, setPrismicRef] = React.useState(null);
  const [pages, setPages] = React.useState([]);

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
  const fetchPages = () => {
    fetch(
      "https://dev-launchers-site.cdn.prismic.io/api/v2/documents/search?ref=" +
        prismicRef +
        '&q=%5B%5Bat(document.type%2C+"page")%5D%5D'
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json.results);
        setPages(json.results);
      });
  };

  // When app loads
  React.useEffect(() => {
    fetchPrismicRef();
  }, []);

  // When we've loaded our prismicRef
  React.useEffect(() => {
    if (!prismicRef) return;
    fetchPages();
  }, [prismicRef]);

  // When we've loaded our pages
  React.useEffect(() => {
    pages.map(page => {
      if (page.uid == pageId) {
        document.title = page.data.title[0].text;
      }
    });
  }, [pages]);

  return (
    <PageBody>
      {pageId
        ? pages.map(page => {
            if (page.uid == pageId) {
              return (
                <div className={style.pageContainer}>
                  <div
                    className={style.introArea}
                    onClick={
                      page.data.intro_image_hyperlink.url
                        ? () => {
                            window.location =
                              page.data.intro_image_hyperlink.url;
                          }
                        : ""
                    }
                    style={{
                      backgroundImage:
                        'url("' + page.data.intro_image.url + ")",

                      cursor: page.data.intro_image_hyperlink.url
                        ? "pointer"
                        : "default"
                    }}
                  >
                    {/*}
                    <img
                      className={style.introImage}
                      src={page.data.intro_image.url}
                    />
                  {*/}
                    <div className={style.titleArea}>
                      <RichText
                        className={style.pageTitle}
                        render={page.data.title}
                        htmlSerializer={htmlSerializer}
                      />
                    </div>
                  </div>
                  <div className={style.pageBody}>
                    <RichText
                      render={page.data.body}
                      htmlSerializer={htmlSerializer}
                    />
                  </div>
                </div>
              );
            }
          })
        : pages.map(page => {
            return <div>{page.data.title[0].text}</div>;
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
      props = { className: style.pageHeading1 };
      return React.createElement(
        "h1",
        propsWithUniqueKey(props, key),
        children
      );
    case Elements.heading2:
      props = { className: style.pageHeading2 };
      return React.createElement(
        "h2",
        propsWithUniqueKey(props, key),
        children
      );
    case Elements.heading3:
      props = { className: style.pageHeading3 };
      return React.createElement(
        "h3",
        propsWithUniqueKey(props, key),
        children
      );
    case Elements.heading4:
      props = { className: style.pageHeading4 };
      return React.createElement(
        "h4",
        propsWithUniqueKey(props, key),
        children
      );
    case Elements.heading5:
      props = { className: style.pageHeading5 };
      return React.createElement(
        "h5",
        propsWithUniqueKey(props, key),
        children
      );
    case Elements.heading6:
      props = { className: style.pageHeading6 };
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
          className: style.pageIframe,
          dangerouslySetInnerHTML: { __html: element.text }
        };
        let iframeHolder = React.createElement(
          "div",
          propsWithUniqueKey(props, key)
        );
        return iframeHolder;
      } else {
        props = { className: style.pageParagraph };
        return React.createElement(
          "p",
          propsWithUniqueKey(props, key),
          children
        );
      }

    // Don't wrap images in a <p> tag
    case Elements.image:
      props = {
        className: style.pageImage,
        src: element.url,
        alt: element.alt || ""
      };
      if (element.linkTo) {
        props.onClick = () => {
          window.location = element.linkTo.url;
        };
        props.style = { cursor: "pointer" };
      }
      return React.createElement("img", propsWithUniqueKey(props, key));

    // Add a class to hyperlinks
    case Elements.hyperlink:
      const targetAttr = element.data.target
        ? { target: element.data.target }
        : {};
      const relAttr = element.data.target ? { rel: "noopener" } : {};
      props = Object.assign(
        {
          className: style.pageLink,
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
