import React from "react";

import { Date, RichText, Elements } from "prismic-reactjs";

import PageBody from "../../common/PageBody";

import {
  IntroArea,
  PageContainer,
  TitleArea,
  BodyContent,
  PageHeading1,
  PageHeading2,
  PageHeading3,
  PageHeading4,
  PageIframe,
  PageParagraph,
  PageImage,
  PageLink,
} from "./StyledDynamicPage";

/* Event snippet for Discord Outbound click conversion page
In your html page, add the snippet and call gtagReportConversion when someone clicks on the chosen link or button. */
// Google AdSense
function gtag(...args) {
  window.dataLayer.push(args);
}
function gtagReportConversion(conversionId, url) {
  // if there is no conversionID provided, we're just redirecting
  if (!conversionId) {
    window.location = url;
    return;
  }

  const callback = () => {
    if (typeof url !== "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    // 'send_to': 'AW-599284852/8hqbCLaChesBEPS44Z0C',
    send_to: conversionId,
    event_callback: callback,
  });
}

// -- Function to add unique key to props
const propsWithUniqueKey = (props, key) => Object.assign(props || {}, { key });
// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
const htmlSerializer = (type, element, content, children, key) => {
  let props = {};
  let targetAttr = {};
  let relAttr = {};
  switch (type) {
    // Add a class to paragraph elements
    case Elements.heading1:
      props = {};
      return (
        <PageHeading1 {...propsWithUniqueKey(props, key)}>
          {children}
        </PageHeading1>
      );
    case Elements.heading2:
      props = {};
      return (
        <PageHeading2 {...propsWithUniqueKey(props, key)}>
          {children}
        </PageHeading2>
      );
    case Elements.heading3:
      props = {};
      return (
        <PageHeading3 {...propsWithUniqueKey(props, key)}>
          {children}
        </PageHeading3>
      );
    case Elements.heading4:
      props = {};
      return (
        <PageHeading4 {...propsWithUniqueKey(props, key)}>
          {children}
        </PageHeading4>
      );
    case Elements.heading5:
      props = {};
      return (
        <pageHeading5 {...propsWithUniqueKey(props, key)}>
          {children}
        </pageHeading5>
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
      if (element.text.indexOf("<iframe") === 0) {
        props = {
          dangerouslySetInnerHTML: { __html: element.text },
        };
        const iframeHolder = <PageIframe {...propsWithUniqueKey(props, key)} />;
        return iframeHolder;
      }
      props = {};
      return (
        <PageParagraph {...propsWithUniqueKey(props, key)}>
          {children}
        </PageParagraph>
      );

    // Don't wrap images in a <p> tag
    case Elements.image:
      props = {
        src: element.url,
        alt: element.alt || "",
      };
      if (element.linkTo) {
        props.onClick = () => {
          const conversionId = element.alt;
          const destination = element.linkTo.url;
          gtagReportConversion(conversionId, destination);
        };
        props.style = { cursor: "pointer" };
      }
      return <PageImage {...propsWithUniqueKey(props, key)} />;

    // Add a class to hyperlinks
    case Elements.hyperlink:
      targetAttr = element.data.target ? { target: element.data.target } : {};
      relAttr = element.data.target ? { rel: "noopener" } : {};
      props = {
        href: element.data.url, // || linkResolver(element.data)
        ...targetAttr,
        ...relAttr,
      };
      return (
        <PageLink {...propsWithUniqueKey(props, key)}>{children}</PageLink>
      );

    // Return null to stick with the default behavior
    default:
      return null;
  }
};

export default function DynamicPage(props) {
  // Google analytics/Google adwords
  React.useEffect(() => {
    // Google AdSense
    window.dataLayer = window.dataLayer || [];
    gtag("js", new Date());
    gtag("config", "AW-599284852");
  }, []);

  const { pageId } = props;

  const [prismicRef, setPrismicRef] = React.useState(null);
  const [pages, setPages] = React.useState([]);

  const fetchPrismicRef = () => {
    // We're using Prisimic as our CDN!
    // First, we need to grab our master ref so we can query our data
    // Yes, it requires 2 queries to actually get data :(
    fetch("https://dev-launchers-site.cdn.prismic.io/api")
      .then((response) => response.json())
      .then((json) => {
        setPrismicRef(json.refs[0].ref);
      });
  };

  // When app loads
  React.useEffect(() => {
    fetchPrismicRef();
  }, []);

  // When we've loaded our prismicRef
  React.useEffect(() => {
    if (!prismicRef) return;
    const fetchPages = () => {
      fetch(
        `https://dev-launchers-site.cdn.prismic.io/api/v2/documents/search?ref=${prismicRef}&q=%5B%5Bat(document.type%2C+"page")%5D%5D`
      )
        .then((response) => response.json())
        .then((json) => {
          setPages(json.results);
        });
    };
    fetchPages();
  }, [prismicRef]);

  // When we've loaded our pages
  React.useEffect(() => {
    pages.map((page) => {
      if (page.uid === pageId) {
        document.title = page.data.title[0].text;
      }
    });
  }, [pageId, pages]);

  return (
    <PageBody>
      {pageId
        ? pages.map((page) => {
            if (page.uid === pageId) {
              return (
                <PageContainer>
                  <IntroArea
                    onClick={
                      page.data.intro_image_hyperlink.url
                        ? () => {
                            const conversionId = page.data.intro_image.alt;
                            const destination =
                              page.data.intro_image_hyperlink.url;
                            gtagReportConversion(conversionId, destination);
                          }
                        : ""
                    }
                    style={{
                      backgroundImage: `url("${page.data.intro_image.url})`,

                      cursor: page.data.intro_image_hyperlink.url
                        ? "pointer"
                        : "default",
                    }}
                  >
                    {/* }
                    <IntroImage
                      src={page.data.intro_image.url}
                    />
                  { */}
                    <TitleArea>
                      <RichText
                        render={page.data.title}
                        htmlSerializer={htmlSerializer}
                      />
                    </TitleArea>
                  </IntroArea>
                  <BodyContent>
                    <RichText
                      render={page.data.body}
                      htmlSerializer={htmlSerializer}
                    />
                  </BodyContent>
                </PageContainer>
              );
            }
            return false;
          })
        : pages.map((page, i) => <div key={i}>{page.data.title[0].text}</div>)}
    </PageBody>
  );
}
