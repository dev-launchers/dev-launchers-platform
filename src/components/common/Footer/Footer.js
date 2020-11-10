import React from "react";
import Link from "next/link";

import style from "./Footer.module.css";

import RandomQuote from "./RandomQuote";

import logoMonogramImage from "../../../images/logo-monogram.png";

export default function Footer(props) {
  return (
    <footer className={style.FooterBlock}>
      <RandomQuote />
      <Link href={"/"} className="nav-link">
        <a>
          <img
            className={style.FooterLogo}
            src={logoMonogramImage}
            alt="logo"
          />
        </a>
      </Link>
      <div className={style.FooterNav}>
        <Link href={"/create"} className="nav-link">
          <a>
            <div className={style.NavEntry}>CREATE</div>
          </a>
        </Link>
        <Link href={"/learn"} className="nav-link">
          <a>
            <div className={style.NavEntry}>LEARN</div>
          </a>
        </Link>
        {/*}
        <Link href={"/play"} className="nav-link">
          <div className={style.NavEntry}>PLAY</div>
        </Link>
        {*/}
        <Link href={"/earn"} className="nav-link">
          <a>
            <div className={style.NavEntry}>EARN</div>
          </a>
        </Link>
        <Link href={"/support-us"} className="nav-link">
          <a>
            <div className={style.NavEntry}>SUPPORT US</div>
          </a>
        </Link>
        <Link href={"/members"} className="nav-link">
          <a>
            <div className={style.NavEntry}>JOIN</div>
          </a>
        </Link>
      </div>
      <div className={style.SocialMediaLink}>
        <a
          href="https://www.instagram.com/devlaunchers/"
          className="fab fa-instagram"
          target="_blank"
        ></a>
        <a
          href="https://www.linkedin.com/company/devlaunchers/"
          className="fab fa-linkedin"
          target="_blank"
        ></a>
        <a
          href="https://www.twitch.tv/devlaunchers/"
          className="fab fa-twitch"
          target="_blank"
        ></a>
        <a
          href="https://discord.io/devlaunchers/"
          className="fab fa-discord"
          target="_blank"
        ></a>
      </div>
      <div className={style.OrgInfoArea}>
        -<a href="/#/page/terms-and-conditions">Terms of Service </a> {"- | -"}
        <a href="/#/page/privacy-policy">Privacy Policy </a> {"- | "} ©Dev
        Launchers, 2020.
      </div>
    </footer>
  );
}
