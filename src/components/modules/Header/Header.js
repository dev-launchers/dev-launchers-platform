import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import style from "./Header.module.css";
import logoFullImage from "../../../images/logo-full.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  render() {
    return (
      <div>
        <div className={style.HeaderBlock}>
          <div className={style.Logo}>
            <Link to={"/"} className="nav-link">
              <img
                src={logoFullImage}
                style={{ width: "100%", marginTop: "2.5%" }}
              />
            </Link>
          </div>
          <div className={style.HeaderNav}>
            <Link to={"/create"} className="nav-link">
              <div className={style.NavEntry}>CREATE</div>
            </Link>
            <Link to={"/learn"} className="nav-link">
              <div className={style.NavEntry}>LEARN</div>
            </Link>
            <Link to={"/play"} className="nav-link">
              <div className={style.NavEntry}>PLAY</div>
            </Link>
            <Link to={"/earn"} className="nav-link">
              <div className={style.NavEntry}>EARN</div>
            </Link>
            <Link to={"/support-us"} className="nav-link">
              <div className={style.NavEntry}>SUPPORT US</div>
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
