import React from "react";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles
import PageBody from "../../../components/common/PageBody";

export default function Article() {
  return (
    <div>
      <PageBody>
        <br />
        <h1 id="title">Our Dev Launchers Experience</h1>
        <div className="page-description">
          This is a collection of stories from our members
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: storiesPageData }}
        ></div>
      </PageBody>
    </div>
  );
}
