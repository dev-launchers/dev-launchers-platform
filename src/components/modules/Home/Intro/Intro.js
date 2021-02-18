import React from "react";

import style from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={style.Intro}>
      <h1 className={style.CenteredTitleUnderline}>A Nonprofit Tech Company</h1>
      Dev Launchers members become an integral part of our community full of
      developers and creators. Our programs, which provide content and
      experience on par with programs and classes that could otherwise cost
      hundreds to thousands of dollars, are offered for FREE by leveraging the
      expertise of our members!
    </div>
  );
}
