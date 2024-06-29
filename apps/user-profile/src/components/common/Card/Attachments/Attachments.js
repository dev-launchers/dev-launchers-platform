import React, { useState } from "react";
import {
  AttachmentLink,
  AttachmentLinkContainer,
  AttachmentImg,
  AttachmentImgContainer,
} from "./StyledAttachments";

export default function Attachments(props) {
  const [showAttachment, setShowAttachment] = useState(false);

  const imageClick = () => setShowAttachment(!showAttachment);

  return (
    <div>
      <AttachmentImgContainer>
        <AttachmentImg onClick={() => imageClick()} />
      </AttachmentImgContainer>

      {showAttachment && (
        <AttachmentLinkContainer>
          {JSON.parse(props.data).map((item, i) => (
            <AttachmentLink href={item.href} key={i}>
              {item.name}
            </AttachmentLink>
          ))}
        </AttachmentLinkContainer>
      )}
    </div>
  );
}
