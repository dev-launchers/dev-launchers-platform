import React from "react";

import style from "./SignUpForm.module.css";

export default function SignUpForm() {
  return (
    <div
      className={style.formContainer}
      style={{ width: "100%", textAlign: "center" }}
    >
      <iframe
        title="application-form"
        className={style.signUpIframe}
        src="https://docs.google.com/forms/d/e/1FAIpQLSeHOcc3_-CKxkGIlCRZ7myiAe3lBbQnAim5Zv5gZqvsuH-90w/viewform?embedded=true"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
