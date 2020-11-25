import React from "react";
import Link from "next/link";

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
            <Link href="/">
              <a>
                <div className={style.LogoImageHolder}>
                  <img
                    src={logoMonogramImage}
                    className={style.LogoImage}
                    alt="logo"
                  />
                </div>
                <div className={style.LogoWords}>Dev Launchers</div>
              </a>
            </Link>
          </div>
        </div>
        <div className={style.HeaderNav}>
          <Link href="/create">
            <a>
              <div className={style.NavEntry}>CREATE</div>
            </a>
          </Link>
          <Link href="/learn">
            <a>
              <div className={style.NavEntry}>LEARN</div>
            </a>
          </Link>
          {/*}
          <Link href={"/play"} className="nav-link">
            <div className={style.NavEntry}>PLAY</div>
          </Link>
          {*/}
          <Link href="/earn">
            <a>
              <div className={style.NavEntry}>EARN</div>
            </a>
          </Link>
          <Link href="/support-us">
            <a>
              <div className={style.NavEntry}>SUPPORT US</div>
            </a>
          </Link>
          <Link href="/members">
            <a>
              <div className={style.NavEntry}>JOIN</div>
            </a>
          </Link>
        </div>
        <div />
        <div className={style.SignInArea}>
          {authUser ? (
            <img
              className={style.UserProfilePic}
              src={authUser.photoURL}
              alt="profile-pic"
            />
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
