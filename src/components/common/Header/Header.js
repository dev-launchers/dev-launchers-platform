import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import style from "./Header.module.css";
import logoMonogramImage from "../../../images/logo-monogram.png";

import { useAuthContext } from "../../../context/AuthContext";

import Button from "../../common/Button";

export default function Header(props) {
  const { authUser, doAuthRequest } = useAuthContext();

  return (
    <div>
      <div className={style.HeaderBlock}>
        <div className={style.Logo}>
          <div className={style.LogoWrapper}>
            <Link to={"/"} className="nav-link">
              <div className={style.LogoImageHolder}>
                <img src={logoMonogramImage} className={style.LogoImage} />
              </div>
              <div className={style.LogoWords}>Dev Launchers</div>
            </Link>
          </div>
        </div>
        <div className={style.HeaderNav}>
          <Link to={"/create"} className="nav-link">
            <div className={style.NavEntry}>CREATE</div>
          </Link>
          <Link to={"/learn"} className="nav-link">
            <div className={style.NavEntry}>LEARN</div>
          </Link>
          {/*}
          <Link to={"/play"} className="nav-link">
            <div className={style.NavEntry}>PLAY</div>
          </Link>
          {*/}
          <Link to={"/earn"} className="nav-link">
            <div className={style.NavEntry}>EARN</div>
          </Link>
          <Link to={"/support-us"} className="nav-link">
            <div className={style.NavEntry}>SUPPORT US</div>
          </Link>
          <Link to={"/members"} className="nav-link">
            <div className={style.NavEntry}>JOIN</div>
          </Link>
        </div>
        <div />
        <div className={style.SignInArea}>
          {authUser ? (
            <img className={style.UserProfilePic} src={authUser.photoURL} />
          ) : (
            <Button fontSize="1.2rem" onClick={doAuthRequest}>
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
