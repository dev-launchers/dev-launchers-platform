import React, { useState } from "react";
import {
  AttachmentLink,
  AttachmentLinkContainer,
  AttachmentImg,
  AttachmentImgContainer
} from "./StyledAttachments.js";

export default function Attachments(props) {
  const [showAttachment, setShowAttachment] = useState(true);

  const imageClick = () => setShowAttachment(!showAttachment);

  return (
    <div>
      <AttachmentImgContainer>
        <AttachmentImg onClick={() => imageClick()} />
      </AttachmentImgContainer>

      {showAttachment && (
        <AttachmentLinkContainer>
          {JSON.parse(props.data).map((item, i) => {
            return (
              <AttachmentLink href={item.href} key={i}>
                {item.name}
              </AttachmentLink>
            );
          })}
        </AttachmentLinkContainer>
      )}
    </div>
  );
}
