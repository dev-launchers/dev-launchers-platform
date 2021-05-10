import React from "react";

import { Wrapper } from "./StyledPhotoHolder";

export default function PhotoHolder() {
  return (
    <Wrapper>
      <h2
        style={{
          width: "100%",
          height: "auto",
          textAlign: "center"
        }}
      >
        Space is limited, apply today!
      </h2>
      {/*}
      <div style={{ width: "40%", height: "50%", textAlign: "left" }}>
        <div style={{ fontSize: "1.5em" }}>You can do this. We can help.</div>
        This is a lot of text. This is a lot of text. This is a lot of text.
        This is a lot of text. This is a lot of text. This is a lot of text.
      </div>
      {/*}<div style={{ width: "100%", height: "30%" }}></div>{*/}
    </Wrapper>
  );
}
