import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import style from "./Header.module.css";
import logoMonogramImage from "../../../images/logo-monogram.png";

import Button from "../../common/Button";

export default function Header(props) {
  const { user, signOut, signInWithGithub } = props;
  return (
    <div>
      <div className={style.HeaderBlock}>
        <div className={style.Logo}>
          <Link to={"/"} className="nav-link">
            <div className={style.LogoImageHolder}>
              <img src={logoMonogramImage} className={style.LogoImage} />
            </div>
            <div className={style.LogoWords}>Dev Launchers</div>
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
          <Link to={"/join"} className="nav-link">
            <div className={style.NavEntry}>JOIN</div>
          </Link>
        </div>
        <div />
        <div style={{ width: "10%", textAlign: "center" }}>
          {user ? (
            <p>Hello, {user.displayName}</p>
          ) : (
            <Button fontSize="1.2rem" onClick={signInWithGithub}>
              Sign In
            </Button>
          )}
        </div>
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
