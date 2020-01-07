import React from "react";
import ReactDOM from "react-dom";

import style from "./PageBody.module.css";

export default class PageBody extends React.Component {
  render() {
    return <div className={style.PageBody}>{this.props.children}</div>;
  }
}
