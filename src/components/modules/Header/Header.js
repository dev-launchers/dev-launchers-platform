import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import style from "./Header.module.css";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div>
        <div className={style.header}>
          <div className={style.logo}>
            <Link to={"/"} className="nav-link">
              <img
                src="/images/logo-full.png"
                style={{ width: "100%", marginTop: "2.5%" }}
              />
            </Link>
          </div>
          <div className={style.headerNav}>
            <Link to={"/create"} className="nav-link">
              <div className={style.navEntry}>CREATE</div>
            </Link>
            <Link to={"/learn"} className="nav-link">
              <div className={style.navEntry}>LEARN</div>
            </Link>
            <Link to={"/play"} className="nav-link">
              <div className={style.navEntry}>PLAY</div>
            </Link>
            <Link to={"/earn"} className="nav-link">
              <div className={style.navEntry}>EARN</div>
            </Link>
            <Link to={"/support-us"} className="nav-link">
              <div className={style.navEntry}>SUPPORT US</div>
            </Link>
          </div>
          <div />
          <div />
        </div>
        <div
          className="header-pusher"
          style={{
            position: "relative",
            width: "100%",
            minHeight: "7.5vh"
          }}
        >
          x
        </div>
      </div>
    );
  }
}
