import React from "react";
import PageBody from "../../common/PageBody";

import Building from "./Building";
//
export default function Hangout() {
  return (
    <PageBody width="90%">
      <br />
      <h1>Hangout With Us Virtually!</h1>
      <div>
        Click one of the rooms below to open up a <u>Google Meet</u> video chat
        or <u>Mozilla Hubs</u> virtual room!
      </div>
      <Building />
    </PageBody>
  );
}
