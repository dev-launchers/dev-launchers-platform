import React, { useState } from "react";
import style from "./Attachments.module.css";

export default function Attachments(props) {
  const [showAttachment, setShowAttachment] = useState(true);

  const imageClick = () => setShowAttachment(!showAttachment);

  return (
    <div>
      <div className={style.attachmentImgContainer}>
        <img
          src={"images/Attachment.png"}
          onClick={() => imageClick()}
          className={style.attachmentImg}
          alt="attachment-icon"
        ></img>
      </div>

      {showAttachment && (
        <div className={style.attachmentLinkContainer}>
          {JSON.parse(props.data).map((item, i) => {
            return (
              <a
                href={item.href}
                className={style.attachmentLink}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
