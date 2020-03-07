import React from "react";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles
import PageBody from "../../../components/common/PageBody";;

const STORIES_CONTENT_URL = "https://dev-launchers.github.io/stories/";

export default function Stories() {
    const [storiesPageData, setStoriesState] = React.useState({});
    React.useEffect(() => {
        fetch(STORIES_CONTENT_URL)
            .then(response => response.text())
            .then(data => {
                setStoriesState(data)
            })
    }, [])
    return (
        <div>
            <PageBody>
                <br />
                <h1 id="title">Our Dev Launchers Experience</h1>
                <div className="page-description">
                    This is a collection of stories from our members
        </div>
                <div className="content" dangerouslySetInnerHTML={{ __html: storiesPageData }}>
                </div>
            </PageBody>
        </div>
    );
}
