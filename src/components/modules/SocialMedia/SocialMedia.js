import React from "react";
import PageBody from "../../common/PageBody";
import { Link } from "react-router-dom";
import logoMonogramImage from "../../../images/logo-monogram.png";
import chessPiece from "../../../images/check-it/chess_display_large.jpg";

import style from "./SocialMedia.module.css";

export default function SocialMedia() {
  return (
    <div>
      <PageBody>
        <br />
        <div class={style.row}>
          <div class={style.side}>
            <h2>check it</h2>
            <div className={style.chessImageWrapper}>
              <img
                className={style.chessImage}
                src={chessPiece}
                alt="chess-piece"
              />
            </div>
          </div>
          <div class={style.main}>
            <p>
              <b>Join</b> the Discord chats and Twitch streams to interact with
              the Devlaunchers community.
            </p>
            <ul class={style.list}>
              <li>
                <a
                  href="https://discord.io/devlaunchers/"
                  target="_blank"
                  class={style.link}
                >
                  <i class="fab fa-discord fa-2x" />
                  &nbsp;Discord
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitch.tv/devlaunchers"
                  target="_blank"
                  class={style.link}
                >
                  <i class="fab fa-twitch fa-2x" />
                  &nbsp;Twitch
                </a>
              </li>
            </ul>
            <br />
            <p>
              <b>Collaborate</b> with fellow members on a variety of projects.
            </p>
            <ul class={style.list}>
              <li>
                <Link to={"/hangout"} className={style.link}>
                  <div className={style.LogoImageHolder}>
                    <img src={logoMonogramImage} className={style.LogoImage} />
                    &nbsp;Hangout Link
                  </div>
                </Link>
              </li>
              <li>
                <Link to={"/play"} className={style.link}>
                  <div className={style.LogoImageHolder}>
                    <img src={logoMonogramImage} className={style.LogoImage} />
                    &nbsp;Project Showcase
                  </div>
                </Link>
              </li>
            </ul>

            <br />
            <p>
              <b>Follow</b> devlauncher adventures on social media.
            </p>
            <ul class={style.list}>
              <li>
                <a
                  href="https://www.instagram.com/devlaunchers/"
                  target="_blank"
                  class={style.link}
                >
                  <i class="fab fa-instagram fa-2x" />
                  &nbsp;Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/devlaunchers/"
                  target="_blank"
                  class={style.link}
                >
                  <i class="fab fa-linkedin fa-2x" />
                  &nbsp;LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <br />
      </PageBody>
    </div>
  );
}
