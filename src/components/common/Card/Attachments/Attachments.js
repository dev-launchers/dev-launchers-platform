import React, { useState } from "react";
import style from "./Attachments.module.css";

export default function Attachments(props) {
  return (
    <div>
      <div className={style.attachmentImgContainer}>
        <img
          src={"images/Attachment.png"}
          className={style.attachmentImg}
        ></img>
      </div>

      <div className={style.attachmentLinkContainer}>
        {JSON.parse(props.data).map((item, i) => {
          return (
            <a
              href={item.href}
              className={style.attachmentLink}
              target="_blank"
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
