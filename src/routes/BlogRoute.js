import React from "react";
import queryString from "query-string";

import Header from "../components/common/Header";
import Blog from "../components/modules/Blog";
import Footer from "../components/common/Footer";

export default function BlogRoute(props) {
  React.useEffect(() => {
    document.title = "Blog";
  }, []);

  const params = props.match.params;
  const pathType = params.pathType;
  const authorId = params.authorId;
  const articleId = params.articleId;
  return (
    <div>
      <Header />
      <Blog authorId={authorId} articleId={articleId} />
      <Footer />
    </div>
  );
}
