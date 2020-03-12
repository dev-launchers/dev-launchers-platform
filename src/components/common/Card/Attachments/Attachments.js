import React, { useState } from "react";
import style from "./Attachments.module.css";

export default function Attachments(props) {
  const [showAttachment, setShowAttachment] = useState(false);

  const imageClick = () => setShowAttachment(!showAttachment);

  const array = props.data.split(",");

  return (
    <div>
      <div className={style.attachmentImgContainer}>
        <img
          src={"images/Attachment.png"}
          onClick={() => imageClick()}
          className={style.attachmentImg}
        ></img>
      </div>

      {showAttachment && (
        <div className={style.attachmentLinkContainer}>
          {array.map((item, i) => (
            <a href="http://zacdemi.com" className={style.attachmentLink}>
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
