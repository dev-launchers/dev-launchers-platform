import React from "react";

import style from "./PageBody.module.css";

export default function PageBody({ children }) {
  return <div className={style.PageBody}>{children}</div>;
}
