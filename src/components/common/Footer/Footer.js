import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import style from "./Footer.module.css";

import RandomQuote from "./RandomQuote";

import logoMonogramImage from "../../../images/logo-monogram.png";

export default function Footer(props) {
  return (
    <footer className={style.FooterBlock}>
      <RandomQuote />
      <Link to={"/"} className="nav-link">
        <img className={style.FooterLogo} src={logoMonogramImage} />
      </Link>
      <div className={style.FooterNav}>
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
        <Link to={"/stories"} className="nav-link">
          <div className={style.NavEntry}>STORIES</div>
        </Link>
        <Link to={"/join"} className="nav-link">
          <div className={style.NavEntry}>JOIN</div>
        </Link>
      </div>
      <div className={style.SocialMediaLink}>
        <a
          href="https://www.instagram.com/devlaunchers/"
          class="fab fa-instagram"
          target="_blank"
        ></a>
        <a
          href="https://www.linkedin.com/company/devlaunchers/"
          class="fab fa-linkedin"
          target="_blank"
        ></a>
        <a
          href="https://www.twitch.tv/devlaunchers/"
          class="fab fa-twitch"
          target="_blank"
        ></a>
        <a
          href="https://discord.io/devlaunchers/"
          class="fab fa-discord"
          target="_blank"
        ></a>
      </div>
      <div className={style.OrgInfoArea}>
        Terms of Service | Privacy Policy | ©Dev Launchers, 2020.
      </div>
    </footer>
  );
}
