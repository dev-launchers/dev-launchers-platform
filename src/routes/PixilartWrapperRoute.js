import React from "react";
import { useParams } from "react-router-dom";
import queryString from "query-string";

import PixilartWrapper from "../components/modules/PixilartWrapper";

export default function PixilartWrapperRoute(props) {
  React.useEffect(() => {
    document.title = "Pixilart Wrapper";
  }, []);

  // Need to use GET params to get a specific variable
  let params = queryString.parse(props.location.search);
  return (
    <div>
      <PixilartWrapper pixilartId={params.pixilartId} />
    </div>
  );
}
