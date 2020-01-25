import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import style from "./Button.module.css";

export default class Button extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    if (this.props.href)
      window.open(this.props.href, "_blank")
    else if (this.props.toast)
      toast(this.props.toast);
    else
      toast("This site is currently under development, check back soon!");
  }

  render() {
    var inlineStyles = {};
    if (this.props.fontSize) inlineStyles = {fontSize:this.props.fontSize};
    return (
      <button
        className={style.Button}
        style={inlineStyles}
        onClick={this.props.onClick ? this.props.onClick : this.clickHandler}
      >
        {this.props.children}
      </button>
    );
  }
}
